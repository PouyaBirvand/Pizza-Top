import { useSelector } from 'react-redux';
import { getCurrentQuantityById, getCartItem } from '../cartSlice';

export const useCartItem = (pizzaId) => {
  const item = useSelector(getCartItem(pizzaId));
  const quantity = useSelector(getCurrentQuantityById(pizzaId));

  return {
    item,
    quantity,
    isInCart: quantity > 0,
  };
};
