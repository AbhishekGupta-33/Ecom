// store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './actions/authSlice';
import productReducer from './actions/productSlice';
import cartReducer from './actions/cartSlice';
import serviceReducer from './actions/serviceSlice';
import userReducer from './actions/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    services: serviceReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;