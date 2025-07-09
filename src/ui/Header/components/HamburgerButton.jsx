function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className='rounded-lg p-2 text-slate-700 transition-colors duration-200 hover:bg-emerald-50 hover:text-emerald-600 dark:text-slate-300 dark:hover:bg-emerald-900/20 dark:hover:text-emerald-400'
      aria-label='Toggle mobile menu'
      aria-expanded={isOpen}
    >
      <div className='flex h-6 w-6 flex-col items-center justify-center'>
        <span
          className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
            isOpen ? 'translate-y-1 rotate-45' : '-translate-y-1'
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-0.5 w-5 bg-current transition-all duration-300 ${
            isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-1'
          }`}
        />
      </div>
    </button>
  );
}

export default HamburgerButton;
