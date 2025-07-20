import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId
      );
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
      } else {
        state.cart.push(action.payload);
      }
    },

    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },

    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
        
        if (item.quantity === 0) {
          state.cart = state.cart.filter((cartItem) => cartItem.pizzaId !== action.payload);
        }
      }
    },

    clearCart(state) {
      state.cart = [];
    },

    updateItemQuantity(state, action) {
      const { pizzaId, quantity } = action.payload;
      const item = state.cart.find((item) => item.pizzaId === pizzaId);
      
      if (item) {
        if (quantity <= 0) {
          state.cart = state.cart.filter((cartItem) => cartItem.pizzaId !== pizzaId);
        } else {
          item.quantity = quantity;
          item.totalPrice = item.quantity * item.unitPrice;
        }
      }
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  updateItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) => 
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) => 
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCartItemsCount = (state) => state.cart.cart.length;

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getCartItem = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id);

export const getIsCartEmpty = (state) => state.cart.cart.length === 0;
