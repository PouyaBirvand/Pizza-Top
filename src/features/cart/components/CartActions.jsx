import { memo } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '../components/ui/IconButton';
import { clearCart } from '../cartSlice';

const CartActions = memo(() => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <IconButton
        to="/order/new"
        type="primary"
        icon="https://cdn.lordicon.com/jnikqyih.json"
        iconProps={{ colors: 'primary:#ffffff,secondary:#ffffff' }}
      >
        Order Pizzas
      </IconButton>
      
      <IconButton
        type="secondary"
        onClick={handleClearCart}
        icon="https://cdn.lordicon.com/skkahier.json"
      >
        Clear Cart
      </IconButton>
    </div>
  );
});

CartActions.displayName = 'CartActions';

export default CartActions;
