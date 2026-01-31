import { CartProducts } from '@/data/products';
import { createSlice } from '@reduxjs/toolkit';

export interface SliceCart {
  products: CartProducts[];
  total: number;
  productsInCart: number;
  status: string | null;
}

const initialState: SliceCart = {
  products: [],
  total: 0,
  productsInCart: 0,
  status: null
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    onLoadCart: ( state, { payload } ) => {
      state.products = payload
      state.productsInCart = state.products.reduce( ( acc, product ) => acc + product.quantity , 0 )
      state.total = state.products.reduce( ( acc, product ) => acc + product.price * product.quantity, 0) 
    },

    onClearCart: ( state ) => {
      state.products = []
      state.productsInCart = 0
      state.total = 0
    },

    onAddProductToCart: (state, { payload }) => {
      const product = state.products.find( i => i.id === payload.id )

      if (product) {
        if (product.quantity + payload.quantity > product.max) {
          state.status = 'MAX_STOCK_REACHED'
          return
        } 
        product.quantity += payload.quantity
        
      } else {
        state.products = [...state.products, payload]
      }
      state.productsInCart += payload.quantity
      state.total = state.products.reduce( (acc, product ) => acc + product.price * product.quantity, 0 )
      state.status = 'SUCCESS'      
    },

    onRemoveProductFromCart: ( state, { payload } ) => {
      state.products = state.products.filter( product => product.id !== payload )      
      state.productsInCart = state.products.reduce( ( acc, product ) => acc + product.quantity , 0 )
      state.total = state.products.reduce( ( acc, product ) => acc + product.price * product.quantity, 0) 
    },

    onClearError: ( state ) => {
      state.status = null
    }
    
  },
});

export const { 
    onLoadCart,
    onClearCart,
    onAddProductToCart,
    onClearError,    
    onRemoveProductFromCart
 } = cartSlice.actions;