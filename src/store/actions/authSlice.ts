// store/actions/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state) {
      state.loading = true;
    },
    loginUserSuccess(state, action: PayloadAction<any>) {
      state.user = action.payload;
      state.loading = false;
    },
    loginUserFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    logoutUser(state) {
      return initialState;
    },
  },
});

export const { loginUser, loginUserSuccess, loginUserFailure, logoutUser } = authSlice.actions;
export default authSlice.reducer;