import { Product } from '@/types/product';
import { createSlice } from '@reduxjs/toolkit';

export interface SliceBuilder {
  platform: 'AMD' | 'Intel' | null;
  componentSelect: string | null,
  products: Product[]
}

const initialState: SliceBuilder = {
  platform: null,
  componentSelect: null,
  products: []
};

export const builderSlice = createSlice({
  name: 'builder',
  initialState,

  reducers: {
    onPlatformSelect: ( state, { payload } ) => {
      state.platform = payload
    },
    onComponentSelectToggle: ( state, { payload } ) => {
      state.componentSelect = payload
    },
    onSetProducts: ( state, { payload }) => {
      state.products = payload
    }
  },
});

export const { 
    onPlatformSelect,
    onComponentSelectToggle
 } = builderSlice.actions;