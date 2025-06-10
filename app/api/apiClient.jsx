import axios from 'axios';
import { getToken, removeToken } from '../utils/tokenService';

const BASE_URL = 'http://192.168.3.124:1111/hrms/api/';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await removeToken();
      // You might want to dispatch logout action here
    }
    return Promise.reject(error);
  }
);

export default apiClient;