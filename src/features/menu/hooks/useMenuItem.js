import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../../cart/cartSlice';

export const useMenuItem = (pizza) => {
  const dispatch = useDispatch();
  const { id, name, unitPrice } = pizza;
  
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return {
    currentQuantity,
    isInCart,
    handleAddToCart,
  };
};
