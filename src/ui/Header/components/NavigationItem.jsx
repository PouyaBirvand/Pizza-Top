import { Link } from 'react-router-dom';

function NavigationItem({ to, label, icon, isMobile = false, onClick }) {
  const baseClasses =
    'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors duration-200 flex items-center space-x-2';

  const mobileClasses = isMobile
    ? 'text-lg py-2 px-4 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
    : '';

  return (
    <Link
      to={to}
      className={`${baseClasses} ${mobileClasses}`}
      onClick={onClick}
    >
      <lord-icon
        src={icon}
        trigger='hover'
        colors='primary:#10b981,secondary:#065f46'
        style={{
          width: isMobile ? '20px' : '16px',
          height: isMobile ? '20px' : '16px',
        }}
      />
      <span>{label}</span>
    </Link>
  );
}

export default NavigationItem;
