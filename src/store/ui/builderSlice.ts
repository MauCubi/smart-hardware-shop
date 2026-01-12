import { createSlice } from '@reduxjs/toolkit';

export interface SliceBuilder {
  platform: 'AMD' | 'Intel' | null;
}

const initialState: SliceBuilder = {
  platform: null,
};

export const builderSlice = createSlice({
  name: 'builder',
  initialState,

  reducers: {
    onPlatformSelect: ( state, { payload } ) => {
      state.platform = payload
    }
  },
});

export const { 
    onPlatformSelect
 } = builderSlice.actions;