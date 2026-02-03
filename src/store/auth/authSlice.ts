import { User } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';

export interface SliceAuth {
  authStatus: 'not-authenticated' | 'authenticated' | 'authenticating'
  authenticatedUser: User | null
}

const initialState: SliceAuth = {
  authStatus: 'authenticating',
  authenticatedUser: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    onSetLoggedUser: ( state, { payload } ) => {
      state.authenticatedUser = payload
    },
    onSetAuthStatus: ( state, { payload }) => {
      state.authStatus = payload
    }
  },
});

export const { 
    onSetLoggedUser,
    onSetAuthStatus
 } = authSlice.actions;