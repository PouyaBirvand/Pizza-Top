import { memo } from 'react';

const QuantityDisplay = memo(({ quantity }) => {
  return (
    <span className="text-lg font-semibold text-slate-800 dark:text-slate-200 min-w-[2rem] text-center">
      {quantity}
    </span>
  );
});

QuantityDisplay.displayName = 'QuantityDisplay';

export default QuantityDisplay;
