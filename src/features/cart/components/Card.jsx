import { memo } from 'react';

const Card = memo(({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  const baseClasses = 'rounded-2xl border shadow-lg overflow-hidden';
  
  const variants = {
    default: 'bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-emerald-200/50 dark:border-emerald-800/50 shadow-emerald-500/10',
    glass: 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-emerald-200/50 dark:border-emerald-800/50 shadow-emerald-500/20',
  };

  return (
    <div 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
