// services/UserService.ts

import { getApiUrl, getHeaders } from '../config/api';

export const fetchUserDetails = async () => {
  const response = await fetch(getApiUrl('user'), {
    method: 'GET',
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user details');
  }

  return response.json();
};

export const updateUserDetails = async (userData: any) => {
  const response = await fetch(getApiUrl('user/update'), {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Failed to update user details');
  }

  return response.json();
};

// Add other user-related methods as needed