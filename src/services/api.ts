import axios, { AxiosInstance } from 'axios';
import { getToken } from './token';
import { toast } from 'react-toastify';

enum Default {
  BaseUrl = 'https://15.design.htmlacademy.pro/six-cities',
  Timeout = 5000
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: Default.BaseUrl as string,
    timeout: Default.Timeout as number
  });

  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }
    return config;
  });

  api.interceptors.response.use((response) => {
    if (response.status === 500) {
      toast.error('Server error');
    }
    return response;
  });

  return api;
};
