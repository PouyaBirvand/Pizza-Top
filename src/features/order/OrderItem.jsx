import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <div className='flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-center space-x-4'>
        <div className='flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30'>
          <lord-icon
            src='https://cdn.lordicon.com/wloilxuq.json'
            trigger='hover'
            colors='primary:#10b981,secondary:#065f46'
            style={{ width: '24px', height: '24px' }}
          />
        </div>

        <div className='flex-1'>
          <div className='mb-2 flex items-center space-x-3'>
            <span className='font-bold text-slate-800 dark:text-slate-200'>
              {quantity}×
            </span>
            <span className='font-semibold text-slate-800 dark:text-slate-200'>
              {name}
            </span>
          </div>

          <p className='text-sm italic text-slate-500 dark:text-slate-400'>
            {isLoadingIngredients ? (
              <span className='flex items-center space-x-2'>
                <lord-icon
                  src='https://cdn.lordicon.com/xjovhxra.json'
                  trigger='loop'
                  colors='primary:#64748b,secondary:#64748b'
                  style={{ width: '16px', height: '16px' }}
                />
                <span>Loading ingredients...</span>
              </span>
            ) : (
              ingredients.join(', ')
            )}
          </p>
        </div>
      </div>

      <div className='text-right'>
        <p className='font-bold text-slate-800 dark:text-slate-200'>
          {formatCurrency(totalPrice)}
        </p>
      </div>
    </div>
  );
}

export default OrderItem;
