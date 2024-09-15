// store/actions/productSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
  products: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state) {
      state.loading = true;
    },
    fetchProductsSuccess(state, action: PayloadAction<any[]>) {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchProducts, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;
export default productSlice.reducer;