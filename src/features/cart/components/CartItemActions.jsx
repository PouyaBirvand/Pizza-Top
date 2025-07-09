import { memo } from 'react';
import UpdateItemQuantity from './UpdateItemQuantity';
import DeleteItem from './DeleteItem';

const CartItemActions = memo(({ pizzaId, currentQuantity }) => {
  return (
    <div className="flex items-center space-x-4">
      <UpdateItemQuantity
        pizzaId={pizzaId}
        currentQuantity={currentQuantity}
      />
      <DeleteItem pizzaId={pizzaId} />
    </div>
  );
});

CartItemActions.displayName = 'CartItemActions';

export default CartItemActions;
