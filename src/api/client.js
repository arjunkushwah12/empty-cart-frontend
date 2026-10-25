import axios from 'axios';

const api = axios.create({
  baseURL: '', // Uses Vite proxy (/api)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach token to requests if it exists
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem('accessToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
// import axios from 'axios'

// // The one place every HTTP call goes through.
// // Token handling and 401 handling will be added here later.
// const client = axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL,
//   headers: { 'Content-Type': 'application/json' },
// })

// export default client
