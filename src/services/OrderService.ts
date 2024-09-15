// services/OrderService.ts

import { getApiUrl, getHeaders } from '../config/api';

export const fetchOrders = async () => {
  const response = await fetch(getApiUrl('orders'), {
    method: 'GET',
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch orders');
  }

  return response.json();
};

export const fetchOrderDetails = async (orderId: string) => {
  const response = await fetch(getApiUrl(`orders/${orderId}`), {
    method: 'GET',
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch order details');
  }

  return response.json();
};

// Add other order-related methods as needed