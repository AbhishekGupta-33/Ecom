// services/ProductService.ts

import { getApiUrl, getHeaders } from '../config/api';

export const fetchProducts = async () => {
  const response = await fetch(getApiUrl('products'), {
    method: 'GET',
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
};

export const fetchProductDetails = async (productId: string) => {
  const response = await fetch(getApiUrl(`products/${productId}`), {
    method: 'GET',
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch product details');
  }

  return response.json();
};

// Add other product-related methods as needed