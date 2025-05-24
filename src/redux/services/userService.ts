import { AxiosResponse } from "axios";
import { api, API_BASE_URL } from "./interceptor";

// Get User
const getUser = async (id: string): Promise<any> => {
  const response: AxiosResponse<any> = await api.get(
    `${API_BASE_URL}/api/users/${id}`
  );
  return response.data.data;
};

// Get Users
const getUsers = async (): Promise<any> => {
  const response: AxiosResponse<any> = await api.get(
    `${API_BASE_URL}/api/users`
  );
  return response.data.data;
};

export const userService = {
  getUser,
  getUsers,
};

export default userService;
