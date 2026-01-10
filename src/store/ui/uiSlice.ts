import { createSlice } from '@reduxjs/toolkit';


export interface SliceAuth {
    isSideMenuOpen: boolean
    isSearchMenuOpen: boolean    
    isProductsMenuOpen: boolean    
}

const initialState: SliceAuth = {
    isSideMenuOpen: false,
    isSearchMenuOpen: false, 
    isProductsMenuOpen: false, 
  }

export const uiSlice = createSlice({
    name: 'ui',
    initialState,

    reducers: {
        onToggleSideMenu: ( state, { payload } ) => {
            state.isSideMenuOpen = payload     
        },        
        onToggleSearchMenu: ( state ) => {
            state.isSearchMenuOpen = !state.isSearchMenuOpen            
        },                
        onToggleProductsMenu: ( state, { payload } ) => {
            state.isProductsMenuOpen = payload                
        }
    }
});


export const { 
    onToggleSideMenu,  
    onToggleSearchMenu,
    onToggleProductsMenu
 } = uiSlice.actions;