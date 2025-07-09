function FeatureCard({ icon, title, description }) {
  return (
    <div className='rounded-xl border border-emerald-200/30 bg-white/30 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/40 hover:shadow-lg dark:border-emerald-800/30 dark:bg-slate-800/30 dark:hover:bg-slate-800/40'>
      <div className='mb-4'>
        <lord-icon
          src={icon}
          trigger='hover'
          colors='primary:#10b981,secondary:#065f46'
          style={{ width: '48px', height: '48px', margin: '0 auto' }}
        />
      </div>
      <h3 className='mb-2 font-semibold text-slate-800 dark:text-slate-200'>
        {title}
      </h3>
      <p className='text-sm text-slate-600 dark:text-slate-400'>
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
