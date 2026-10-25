

import api from './axios';

// Fetch current logged-in user profile through the API Gateway
export const getUserProfile = async () => {
  return await api.get('/api/v1/users/me');
};

// import api from './axios';

// // Fetch current logged-in user profile
// export const getUserProfile = async () => {
//   return await api.get('/users/me');
// };