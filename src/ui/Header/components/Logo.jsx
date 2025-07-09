import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/' className='group flex flex-shrink-0 items-center space-x-2'>
      <lord-icon
        src='https://cdn.lordicon.com/wloilxuq.json'
        trigger='hover'
        colors='primary:#10b981,secondary:#065f46'
        style={{ width: '32px', height: '32px' }}
      />
      <span className='bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-lg font-bold text-transparent dark:from-emerald-400 dark:to-emerald-600 sm:text-xl'>
        Pizza Top
      </span>
    </Link>
  );
}

export default Logo;
