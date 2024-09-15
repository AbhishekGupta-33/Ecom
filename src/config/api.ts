// services/apiConfig.ts

export const API_BASE_URL = 'https://api.yourdomain.com';  // Base URL for all API requests

// Default headers for API requests
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

// Auth token placeholder (can be dynamically managed)
export let AUTH_TOKEN: string | null = null;

// Utility function to get the full URL for an API endpoint
export const getApiUrl = (endpoint: string): string => `${API_BASE_URL}/${endpoint}`;

// Function to set the auth token
export const setAuthToken = (token: string) => {
  AUTH_TOKEN = token;
};

// Function to get headers with authorization
export const getHeaders = () => {
  const headers: iHeader = { ...DEFAULT_HEADERS };
  if (AUTH_TOKEN) {
    headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;
  }
  return headers;
};