import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit} className='relative w-full max-w-md'>
      <div className='relative'>
        <input
          placeholder='Search order #'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='w-full rounded-xl border border-emerald-200/50 bg-white/50 py-3 pl-12 pr-4 backdrop-blur-sm transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-emerald-800/50 dark:bg-slate-800/50'
        />
        <div className='absolute left-4 top-1/2 -translate-y-1/2 transform'>
          <lord-icon
            src='https://cdn.lordicon.com/xfftupfv.json'
            trigger='hover'
            colors='primary:#10b981,secondary:#065f46'
            style={{ width: '20px', height: '20px' }}
          />
        </div>
      </div>
    </form>
  );
}

export default SearchOrder;
