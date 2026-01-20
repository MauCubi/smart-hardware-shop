import { createSlice } from '@reduxjs/toolkit';

export interface SliceBuilder {
  platform: 'AMD' | 'Intel' | null;
  componentSelect: string | null,
}

const initialState: SliceBuilder = {
  platform: null,
  componentSelect: null,
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
    }
  },
});

export const { 
    onPlatformSelect,
    onComponentSelectToggle
 } = builderSlice.actions;