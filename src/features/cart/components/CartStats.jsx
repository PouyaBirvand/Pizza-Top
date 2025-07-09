import { memo } from 'react';
import Icon from './ui/LordIcon';
import { formatCurrency } from '../../../utils/helpers';

const CartStats = memo(({ totalQuantity, totalPrice }) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="flex items-center space-x-2">
        <Icon
          src="https://cdn.lordicon.com/mfmkufkr.json"
          style={{ width: '24px', height: '24px' }}
        />
        <span className="font-semibold text-slate-700 dark:text-slate-300">
          {totalQuantity} {totalQuantity === 1 ? 'pizza' : 'pizzas'}
        </span>
      </div>
      
      <div className="flex items-center space-x-2">
        <Icon
          src="https://cdn.lordicon.com/qhgmphtg.json"
          style={{ width: '20px', height: '20px' }}
        />
        <span className="font-bold text-emerald-600 dark:text-emerald-400">
          {formatCurrency(totalPrice)}
        </span>
      </div>
    </div>
  );
});

CartStats.displayName = 'CartStats';

export default CartStats;
