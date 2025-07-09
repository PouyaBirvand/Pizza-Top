import { memo } from 'react';
import { useSelector } from 'react-redux';
import CartItemInfo from '../components/CartItemInfo';
import CartItemActions from '../components/CartItemActions';
import { getCurrentQuantityById } from '../cartSlice';

const CartItem = memo(({ item }) => {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <CartItemInfo
        name={name}
        quantity={quantity}
        totalPrice={totalPrice}
      />
      <CartItemActions
        pizzaId={pizzaId}
        currentQuantity={currentQuantity}
      />
    </div>
  );
});

CartItem.displayName = 'CartItem';

export default CartItem;
