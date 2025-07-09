import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
  updateItemQuantity,
} from '../cartSlice';

export const useCartActions = () => {
  const dispatch = useDispatch();

  const addToCart = useCallback(
    (item) => {
      dispatch(addItem(item));
    },
    [dispatch]
  );

  const removeFromCart = useCallback(
    (pizzaId) => {
      dispatch(deleteItem(pizzaId));
    },
    [dispatch]
  );

  const increaseQuantity = useCallback(
    (pizzaId) => {
      dispatch(increaseItemQuantity(pizzaId));
    },
    [dispatch]
  );

  const decreaseQuantity = useCallback(
    (pizzaId) => {
      dispatch(decreaseItemQuantity(pizzaId));
    },
    [dispatch]
  );

  const updateQuantity = useCallback(
    (pizzaId, quantity) => {
      dispatch(updateItemQuantity({ pizzaId, quantity }));
    },
    [dispatch]
  );

  const clearAllItems = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    clearAllItems,
  };
};
