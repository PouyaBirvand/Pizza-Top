function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="text-center">
        <div className="mb-4">
          <lord-icon
            src="https://cdn.lordicon.com/xjovhxra.json"
            trigger="loop"
            colors="primary:#10b981,secondary:#065f46"
            style={{ width: '80px', height: '80px' }}
          />
        </div>
        <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-medium">
          Loading delicious pizzas...
        </p>
      </div>
    </div>
  );
}

export default Loader;