// store/actions/serviceSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ServiceState {
  services: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ServiceState = {
  services: [],
  loading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    fetchServices(state) {
      state.loading = true;
    },
    fetchServicesSuccess(state, action: PayloadAction<any[]>) {
      state.services = action.payload;
      state.loading = false;
    },
    fetchServicesFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchServices, fetchServicesSuccess, fetchServicesFailure } = serviceSlice.actions;
export default serviceSlice.reducer;