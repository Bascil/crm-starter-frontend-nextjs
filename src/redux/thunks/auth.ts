import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginCredentials } from "@/utils";

import { authService } from "@/redux/services";

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      // Store in localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      return response.data;
    } catch (error: any) {
      console.log(error);
      const message = error.response?.data?.message || "Login failed";
      return rejectWithValue(message);
    }
  }
);

// Async thunk to check if user is already logged in (on app init)
export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const userString = localStorage.getItem("user");

      if (token && userString) {
        const user = JSON.parse(userString);
        return { token, user };
      }

      throw new Error("No authentication data found");
    } catch (error) {
      return rejectWithValue("No valid session found");
    }
  }
);
