import React from 'react';
import Button from '../../../ui/Button';
import DeleteItem from '../../cart/components/DeleteItem';
import UpdateItemQuantity from '../../cart/components/UpdateItemQuantity';

const MenuItemActions = ({
  isInCart,
  soldOut,
  pizzaId,
  currentQuantity,
  onAddToCart,
}) => {
  if (isInCart) {
    return (
      <div className='flex items-center space-x-3'>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    );
  }

  if (soldOut) {
    return null;
  }

  return (
    <Button type='primary' onClick={onAddToCart}>
      <lord-icon
        src='https://cdn.lordicon.com/mfmkufkr.json'
        trigger='hover'
        colors='primary:#ffffff,secondary:#ffffff'
        style={{ width: '18px', height: '18px', marginRight: '8px' }}
      />
      Add to Cart
    </Button>
  );
};

export default MenuItemActions;
