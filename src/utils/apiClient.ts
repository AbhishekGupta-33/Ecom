import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { API_BASE_URL } from '../config/api';

// Create Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');  // Replace with your token management logic
    if (token) {
      // Type assertion to ensure headers can accept string properties
      (config.headers as Record<string, any>)['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Generic GET request function
export const get = async (url: string, params = {}) => {
  const response = await apiClient.get(url, { params });
  return response.data;
};

// Generic POST request function
export const post = async (url: string, data: any) => {
  const response = await apiClient.post(url, data);
  return response.data;
};

// Other methods like PUT, DELETE can also be added here

export default apiClient;
