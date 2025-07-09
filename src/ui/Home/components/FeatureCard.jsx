function FeatureCard({ icon, title, description }) {
    return (
      <div className="text-center p-6 rounded-xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-800/30 hover:bg-white/40 dark:hover:bg-slate-800/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="mb-4">
          <lord-icon
            src={icon}
            trigger="hover"
            colors="primary:#10b981,secondary:#065f46"
            style={{ width: '48px', height: '48px', margin: '0 auto' }}
          />
        </div>
        <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
      </div>
    );
  }
  
  export default FeatureCard;
  