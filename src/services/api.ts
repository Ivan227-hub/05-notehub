import axios from "axios";

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});

api.interceptors.request.use(config => {
  const token = import.meta.env.VITE_NOTEHUB_TOKEN; // берем токен из .env

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
