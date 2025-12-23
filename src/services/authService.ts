import api from "./api";
import type { LoginCredentials } from "../types/auth";

interface LoginResponse {
  token: string;
}

export const login = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const { data } = await api.post<LoginResponse>(
    "/auth/login",
    credentials
  );

  localStorage.setItem("token", data.token);
  return data;
};
