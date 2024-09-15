// store/selectors.ts

import { createSelector } from 'reselect';
// import { RootState } from './store';

// Define interfaces for state slices

// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
  // Add other user properties as needed
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

interface FilterState {
  category: string;
}

interface CartItem {
  id: number;
  quantity: number;
  price: number;
}

interface CartState {
  items: CartItem[];
}

interface Service {
  id: number;
  name: string;
}

interface ServiceState {
  services: Service[];
  loading: boolean;
  error: string | null;
}

interface UserDetails {
  name: string;
  email: string;
}

interface UserState {
  userDetails: UserDetails | null;
  loading: boolean;
  error: string | null;
}

// Define the RootState type
export interface RootState {
  auth: AuthState;
  products: ProductState;
  filters: FilterState;
  cart: CartState;
  services: ServiceState;
  user: UserState;
}

// Selectors for Auth
export const getUser = (state: RootState) => state.auth.user;
export const getAuthLoading = (state: RootState) => state.auth.loading;
export const getAuthError = (state: RootState) => state.auth.error;

// Selectors for Products
export const getProducts = (state: RootState) => state.products.products;
export const getProductLoading = (state: RootState) => state.products.loading;
export const getProductError = (state: RootState) => state.products.error;

// Memoized selector for filtered products
export const getFilteredProducts = createSelector(
    [getProducts, (state: RootState) => state.filters],
    (products: Product[], filters: FilterState) => {
      return products.filter(product => product.category === filters.category);
    }
  );

// Selectors for Cart
export const getCartItems = (state: RootState) => state.cart.items;

export const getCartTotal = createSelector(
    [getCartItems],
    (items: { productId: string; quantity: number; price: number }[]) => {
      return items.reduce((total, item) => total + item.quantity * item.price, 0);
    }
  );

// Selectors for Services
export const getServices = (state: RootState) => state.services.services;
export const getServiceLoading = (state: RootState) => state.services.loading;
export const getServiceError = (state: RootState) => state.services.error;

// Selectors for User
export const getUserDetails = (state: RootState) => state.user.userDetails;
export const getUserLoading = (state: RootState) => state.user.loading;
export const getUserError = (state: RootState) => state.user.error;
