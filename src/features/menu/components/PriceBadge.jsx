import React from 'react';
import { formatCurrency } from '../../../utils/helpers';

const PriceBadge = ({ price }) => {
  return (
    <div className='absolute right-4 top-4'>
      <div className='rounded-full bg-emerald-500 px-3 py-1 text-sm font-bold text-white shadow-lg'>
        {formatCurrency(price)}
      </div>
    </div>
  );
};

export default PriceBadge;
