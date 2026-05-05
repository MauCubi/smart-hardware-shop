import { Address } from '@/types/address';
import { createSlice } from '@reduxjs/toolkit';

export interface SliceAddress {
  currentAddress: Address | null
}

const initialState: SliceAddress = {
  currentAddress: null,
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,

  reducers: {
    onSetAddress: ( state, { payload } ) => {
      state.currentAddress = payload
    },
  },
});

export const { 
    onSetAddress,
 } = addressSlice.actions;