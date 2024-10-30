import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token?: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: undefined,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    resetToken: (state) => {
      state.token = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, resetToken } = authSlice.actions;

export default authSlice.reducer;
