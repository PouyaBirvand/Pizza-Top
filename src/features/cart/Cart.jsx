import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useCart } from './hooks/useCart';
import EmptyCart from './components/ui/EmptyCart';
import CartHeader from './components/CartHeader';
import CartItemsList from './components/CartItemsList';
import CartActions from './components/CartActions';

const Cart = memo(() => {
  const username = useSelector((state) => state.user.username);
  const { cart, isEmpty } = useCart();

  if (isEmpty) {
    return <EmptyCart />;
  }

  return (
    <div className='mx-auto max-w-4xl px-4 py-8'>
      <CartHeader username={username} />
      <CartItemsList items={cart} />
      <CartActions />
    </div>
  );
});

Cart.displayName = 'Cart';

export default Cart;
