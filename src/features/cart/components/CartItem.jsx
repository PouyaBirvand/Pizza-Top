import { memo } from 'react';
import { useSelector } from 'react-redux';
import CartItemInfo from '../components/CartItemInfo';
import CartItemActions from '../components/CartItemActions';
import { getCurrentQuantityById } from '../cartSlice';

const CartItem = memo(({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className='flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between'>
      <CartItemInfo name={name} quantity={quantity} totalPrice={totalPrice} />
      <CartItemActions pizzaId={pizzaId} currentQuantity={currentQuantity} />
    </div>
  );
});

CartItem.displayName = 'CartItem';

export default CartItem;
