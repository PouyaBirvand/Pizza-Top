import React from 'react';
import MenuItem from '../MenuItem';

const MenuGrid = ({ menuItems }) => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {menuItems.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
};

export default MenuGrid;
