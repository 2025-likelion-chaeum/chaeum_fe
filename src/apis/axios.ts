import { LOCAL_STORAGE_KEY } from '@/constants/key';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const item = localStorage.getItem(LOCAL_STORAGE_KEY.token);

    const token = item ? JSON.parse(item) : null;

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error),
);
