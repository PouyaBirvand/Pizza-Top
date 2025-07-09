function HeroIcon() {
  return (
    <div className='mb-8 flex justify-center'>
      <div className='relative'>
        <div className='absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-30 blur-xl' />
        <lord-icon
          src='https://cdn.lordicon.com/wloilxuq.json'
          trigger='loop'
          delay='2000'
          colors='primary:#10b981,secondary:#065f46'
          style={{ width: '120px', height: '120px' }}
        />
      </div>
    </div>
  );
}

export default HeroIcon;
