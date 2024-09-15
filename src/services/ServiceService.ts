// services/ServiceService.ts

import { getApiUrl, getHeaders } from '../config/api';

export const fetchServices = async () => {
  const response = await fetch(getApiUrl('services'), {
    method: 'GET',
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }

  return response.json();
};

export const fetchServiceDetails = async (serviceId: string) => {
  const response = await fetch(getApiUrl(`services/${serviceId}`), {
    method: 'GET',
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch service details');
  }

  return response.json();
};

// Add other service-related methods as needed