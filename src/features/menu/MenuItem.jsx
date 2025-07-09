import React from 'react';
import PizzaImage from './components/PizzaImage';
import PriceBadge from './components/PriceBadge';
import PizzaInfo from './components/PizzaInfo';
import MenuItemActions from './components/MenuItemActions';
import { useMenuItem } from './hooks/useMenuItem';

const MenuItem = ({ pizza }) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const { currentQuantity, isInCart, handleAddToCart } = useMenuItem(pizza);

  return (
    <MenuItemCard>
      <PizzaImage imageUrl={imageUrl} name={name} soldOut={soldOut} />
      <PriceBadge price={unitPrice} />

      <div className='p-6'>
        <PizzaInfo name={name} ingredients={ingredients} />

        <div className='flex items-center justify-between'>
          <MenuItemActions
            isInCart={isInCart}
            soldOut={soldOut}
            pizzaId={id}
            currentQuantity={currentQuantity}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>
    </MenuItemCard>
  );
};

const MenuItemCard = ({ children }) => (
  <div className='group relative overflow-hidden rounded-2xl border border-emerald-200/50 bg-white/70 shadow-lg shadow-emerald-500/10 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/20 dark:border-emerald-800/50 dark:bg-slate-800/70'>
    {children}
  </div>
);

export default MenuItem;
