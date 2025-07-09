import { memo } from 'react';

const QuantityDisplay = memo(({ quantity }) => {
  return (
    <span className='min-w-[2rem] text-center text-lg font-semibold text-slate-800 dark:text-slate-200'>
      {quantity}
    </span>
  );
});

QuantityDisplay.displayName = 'QuantityDisplay';

export default QuantityDisplay;
