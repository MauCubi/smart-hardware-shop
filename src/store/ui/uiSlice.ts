import { createSlice } from '@reduxjs/toolkit';


export interface SliceUi {
    isSideMenuOpen: boolean
    isSearchMenuOpen: boolean    
    isProductsMenuOpen: boolean    
    isUserMenuOpen: boolean
}

const initialState: SliceUi = {
    isSideMenuOpen: false,
    isSearchMenuOpen: false, 
    isProductsMenuOpen: false, 
    isUserMenuOpen: false
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
        },    
        onToggleUserMenu: ( state, { payload } ) => {
            state.isUserMenuOpen = payload                
        }
    }
});


export const { 
    onToggleSideMenu,  
    onToggleSearchMenu,
    onToggleProductsMenu,
    onToggleUserMenu
 } = uiSlice.actions;