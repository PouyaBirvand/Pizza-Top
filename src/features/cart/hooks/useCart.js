import { useSelector } from 'react-redux';
import { 
  getCart, 
  getTotalCartPrice, 
  getTotalCartQuantity, 
  getIsCartEmpty,
  getCartItemsCount 
} from '../cartSlice';

export const useCart = () => {
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrice);
  const totalQuantity = useSelector(getTotalCartQuantity);
  const isEmpty = useSelector(getIsCartEmpty);
  const itemsCount = useSelector(getCartItemsCount);

  return {
    cart,
    totalPrice,
    totalQuantity,
    isEmpty,
    itemsCount,
  };
};
