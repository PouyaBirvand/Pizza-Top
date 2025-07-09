import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

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
          cartSlice.caseReducers.deleteItem(state, action);
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
          cartSlice.caseReducers.deleteItem(state, { payload: pizzaId });
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

// Selectors with reselect for better performance
const selectCartState = (state) => state.cart;

export const getCart = createSelector(
  [selectCartState],
  (cartState) => cartState.cart
);

export const getTotalCartQuantity = createSelector(
  [getCart],
  (cart) => cart.reduce((sum, item) => sum + item.quantity, 0)
);

export const getTotalCartPrice = createSelector(
  [getCart],
  (cart) => cart.reduce((sum, item) => sum + item.totalPrice, 0)
);

export const getCartItemsCount = createSelector(
  [getCart],
  (cart) => cart.length
);

export const getCurrentQuantityById = (id) =>
  createSelector(
    [getCart],
    (cart) => cart.find((item) => item.pizzaId === id)?.quantity ?? 0
  );

export const getCartItem = (id) =>
  createSelector(
    [getCart],
    (cart) => cart.find((item) => item.pizzaId === id)
  );

export const getIsCartEmpty = createSelector(
  [getCart],
  (cart) => cart.length === 0
);
