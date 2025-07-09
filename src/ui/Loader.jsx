function Loader() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-slate-900/80'>
      <div className='text-center'>
        <div className='mb-4'>
          <lord-icon
            src='https://cdn.lordicon.com/xjovhxra.json'
            trigger='loop'
            colors='primary:#10b981,secondary:#065f46'
            style={{ width: '80px', height: '80px' }}
          />
        </div>
        <p className='mt-4 font-medium text-emerald-600 dark:text-emerald-400'>
          Loading delicious pizzas...
        </p>
      </div>
    </div>
  );
}

export default Loader;
