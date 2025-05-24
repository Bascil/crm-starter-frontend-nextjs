import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "@/utils";
import { loginUser, checkAuth } from "@/redux/thunks";
import { storage } from "@/utils/storage";

// Function to initialize state lazily
const getInitialState = () => {
  let user = null;

  if (typeof window !== "undefined") {
    // Access storage on the client side only
    try {
      const storedUser = storage.get("user");
      user = storedUser ? JSON.parse(storedUser) : null;
    } catch (err) {
      console.error("Failed to parse user data from storage:", err);
    }
  }

  return {
    user,
    token: null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
  };
};

const initialState: AuthState = getInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;

      // Clear storage
      storage.purge("token");
      storage.purge("user");
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        // Don't clear error here - let it persist until success/failure
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.error = null; // Only clear on successful login
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      })
      // Check Auth
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;
