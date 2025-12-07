import { createSlice } from '@reduxjs/toolkit';


export interface SliceAuth {
    isSideMenuOpen: boolean
    isSearchMenuOpen: boolean    
}

const initialState: SliceAuth = {
    isSideMenuOpen: false,
    isSearchMenuOpen: false, 
  }

export const uiSlice = createSlice({
    name: 'ui',
    initialState,

    reducers: {
        onToggleSideMenu: ( state ) => {
            state.isSideMenuOpen = !state.isSideMenuOpen            
        },        
        onToggleSearchMenu: ( state ) => {
            state.isSearchMenuOpen = !state.isSearchMenuOpen            
        }
    }
});


export const { 
    onToggleSideMenu,  
    onToggleSearchMenu
 } = uiSlice.actions;