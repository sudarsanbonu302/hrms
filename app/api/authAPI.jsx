import apiClient from './apiClient';

export const login = async (credentials) => {
  try {
    const response = await apiClient.post('login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const logout = async () => {
  // Add logout API call if needed
  return Promise.resolve();
};