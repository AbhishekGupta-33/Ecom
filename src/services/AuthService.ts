// services/AuthService.ts

import { getApiUrl, getHeaders } from "../config/api";

export const loginUser = async (phoneNumber: string, password: string) => {
  const response = await fetch(getApiUrl('login'), {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ phoneNumber, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};

export const signupUser = async (userData: { name: string; email: string; password: string; phoneNumber: string; userType: string }) => {
  const response = await fetch(getApiUrl('signup'), {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Signup failed');
  }

  return response.json();
};

export const verifyPhone = async (phoneNumber: string, otp: string) => {
  const response = await fetch(getApiUrl('verify-phone'), {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ phoneNumber, otp }),
  });

  if (!response.ok) {
    throw new Error('Phone verification failed');
  }

  return response.json();
};

// Add other authentication methods as needed