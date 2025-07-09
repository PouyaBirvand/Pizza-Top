import { memo } from 'react';
import { formatCurrency } from '../../../utils/helpers';
import Icon from './ui/LordIcon';

const CartItemInfo = memo(({ name, quantity, totalPrice }) => {
  return (
    <div className='flex items-center space-x-4'>
      <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30'>
        <Icon
          src='https://cdn.lordicon.com/wloilxuq.json'
          style={{ width: '24px', height: '24px' }}
        />
      </div>

      <div>
        <p className='font-semibold text-slate-800 dark:text-slate-200'>
          {quantity} × {name}
        </p>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          {formatCurrency(totalPrice)}
        </p>
      </div>
    </div>
  );
});

CartItemInfo.displayName = 'CartItemInfo';

export default CartItemInfo;
