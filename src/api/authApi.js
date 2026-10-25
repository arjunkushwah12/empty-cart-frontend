import api from './client';

export const registerUser = async (userData) => {
  const response = await api.post('/api/v1/auth/register', userData);
  return response.data;
};
export const loginUser = async (credentials) => {
  const response = await api.post('/api/v1/auth/login', credentials);
  return response.data;
};