import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
      <lord-icon
        src="https://cdn.lordicon.com/wloilxuq.json"
        trigger="hover"
        colors="primary:#10b981,secondary:#065f46"
        style={{ width: '32px', height: '32px' }}
      />
      <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent">
        Pizza Top
      </span>
    </Link>
  );
}

export default Logo;
