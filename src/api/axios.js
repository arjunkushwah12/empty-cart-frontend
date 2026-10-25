import axios from 'axios';

const api = axios.create({
  baseURL: '/', // Uses Vite proxy we configured earlier
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically attach token from sessionStorage to requests
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;