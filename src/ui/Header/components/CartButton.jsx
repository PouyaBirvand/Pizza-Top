import { Link } from 'react-router-dom';

function CartButton({ totalCartQuantity }) {
  return (
    <Link 
      to="/cart"
      className="relative p-2 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
    >
      <lord-icon
        src="https://cdn.lordicon.com/pbrgppbb.json"
        trigger="hover"
        colors="primary:#10b981,secondary:#065f46"
        style={{ width: '24px', height: '24px' }}
      />
      {totalCartQuantity > 0 && (
        <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
          {totalCartQuantity > 99 ? '99+' : totalCartQuantity}
        </span>
      )}
    </Link>
  );
}

export default CartButton;
