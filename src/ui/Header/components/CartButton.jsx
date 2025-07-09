import { Link } from 'react-router-dom';

function CartButton({ totalCartQuantity }) {
  return (
    <Link
      to='/cart'
      className='relative rounded-lg p-2 text-slate-700 transition-colors duration-200 hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-400'
    >
      <lord-icon
        src='https://cdn.lordicon.com/pbrgppbb.json'
        trigger='hover'
        colors='primary:#10b981,secondary:#065f46'
        style={{ width: '24px', height: '24px' }}
      />
      {totalCartQuantity > 0 && (
        <span className='absolute -right-1 -top-1 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-emerald-500 text-xs font-bold text-white'>
          {totalCartQuantity > 99 ? '99+' : totalCartQuantity}
        </span>
      )}
    </Link>
  );
}

export default CartButton;
