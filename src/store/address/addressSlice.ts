import { Address } from '@/types/address';
import { createSlice } from '@reduxjs/toolkit';

export interface SliceAddress {
  address: Address | null
}

const initialState: SliceAddress = {
  address: null,
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,

  reducers: {
    onSetAddress: ( state, { payload } ) => {
      state.address = payload
    },
  },
});

export const { 
    onSetAddress,
 } = addressSlice.actions;