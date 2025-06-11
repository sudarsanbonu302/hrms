import apiClient from "./apiClient";

export const login = async (userName, password) => {
  try {
    const response = await apiClient.post("login", {
      userName,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
