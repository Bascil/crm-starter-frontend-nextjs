export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  active: number;
  roleId: number;
  createdAt: string;
  updatedAt: string;
  fullName: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

export interface LoginResponse {
  data: {
    token: string;
    user: User;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface Task {
  id: number;
  name: string;
  description: string;
  dueDate?: string;
  projectId?: number;
  userId?: number;
  status: string;

  createdAt: string;
  updatedAt: string;
}

// common interfaces
export interface PaginationMeta {
  from: number;
  to: number;
  total: number;
  perPage: number;
  lastPage: number;
  prevPage: number | null;
  nextPage: number | null;
  currentPage: number;
}
