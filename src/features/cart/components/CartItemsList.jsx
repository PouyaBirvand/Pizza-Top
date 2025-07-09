import { memo } from 'react';
import Card from './Card';
import CartItem from './CartItem';

const CartItemsList = memo(({ items }) => {
  return (
    <Card className="mb-8">
      <div className="divide-y divide-emerald-200/30 dark:divide-emerald-800/30">
        {items.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </div>
    </Card>
  );
});

CartItemsList.displayName = 'CartItemsList';

export default CartItemsList;
