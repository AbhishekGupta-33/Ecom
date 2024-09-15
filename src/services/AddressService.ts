// services/AddressService.ts

import { getApiUrl, getHeaders } from '../config/api';

export const fetchAddresses = async () => {
  const response = await fetch(getApiUrl('addresses'), {
    method: 'GET',
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch addresses');
  }

  return response.json();
};

export const addAddress = async (addressData: any) => {
  const response = await fetch(getApiUrl('addresses'), {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(addressData),
  });

  if (!response.ok) {
    throw new Error('Failed to add address');
  }

  return response.json();
};

export const updateAddress = async (addressId: string, addressData: any) => {
  const response = await fetch(getApiUrl(`addresses/${addressId}`), {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(addressData),
  });

  if (!response.ok) {
    throw new Error('Failed to update address');
  }

  return response.json();
};

// Add other address-related methods as needed