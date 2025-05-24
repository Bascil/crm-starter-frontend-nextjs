import { LoginResponse, LoginCredentials, User } from "@/utils";
import { api } from "./interceptor";

export const authService = {
  // Login user
  login: async (payload: LoginCredentials): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/api/auth/login", payload);
    return response.data;
  },

  // Logout user
  logout: async (): Promise<void> => {
    try {
      await api.post("/api/auth/logout");
    } catch (error) {
      // Even if the API call fails, we should clear local storage
      console.error("Logout API call failed:", error);
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  },

  // Get current user profile
  getCurrentUser: async (): Promise<User> => {
    const response = await api.get<{ data: User }>("/api/auth/me");
    return response.data.data;
  },

  // Refresh token (if your backend supports it)
  refreshToken: async (): Promise<{ token: string }> => {
    const response = await api.post<{ data: { token: string } }>(
      "/api/auth/refresh"
    );
    return response.data.data;
  },
};
