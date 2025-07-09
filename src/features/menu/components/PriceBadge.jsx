import React from 'react';
import { formatCurrency } from '../../../utils/helpers';

const PriceBadge = ({ price }) => {
  return (
    <div className="absolute top-4 right-4">
      <div className="bg-emerald-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
        {formatCurrency(price)}
      </div>
    </div>
  );
};

export default PriceBadge;
