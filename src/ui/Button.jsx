import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary:
      base +
      ' px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 focus:ring-emerald-500 disabled:opacity-50 disabled:shadow-none transform hover:scale-105 active:scale-95',
    
    secondary:
      base +
      ' px-6 py-3 bg-white dark:bg-slate-800 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-xl focus:ring-emerald-500 disabled:opacity-50 transform hover:scale-105 active:scale-95',
    
    small:
      base +
      ' px-3 py-2 text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-lg shadow-md shadow-emerald-500/20 focus:ring-emerald-500 disabled:opacity-50 transform hover:scale-105 active:scale-95',
    
    round:
      base +
      ' w-8 h-8 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full shadow-md shadow-emerald-500/20 focus:ring-emerald-500 disabled:opacity-50 transform hover:scale-110 active:scale-95',
    
    danger:
      base +
      ' px-4 py-2 text-sm bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg shadow-md shadow-red-500/20 focus:ring-red-500 disabled:opacity-50 transform hover:scale-105 active:scale-95',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
