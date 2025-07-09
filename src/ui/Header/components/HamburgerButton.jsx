function HamburgerButton({ isOpen, onClick }) {
    return (
      <button
        onClick={onClick}
        className="p-2 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
        </div>
      </button>
    );
  }
  
  export default HamburgerButton;
  