import { memo } from 'react';

const Card = memo(
  ({ children, variant = 'default', className = '', ...props }) => {
    const baseClasses = 'backdrop-blur-sm rounded-2xl p-8 border';

    const variants = {
      default:
        'bg-white/50 dark:bg-slate-800/50 border-emerald-200/50 dark:border-emerald-800/50',
      elevated:
        'bg-white/70 dark:bg-slate-800/70 border-emerald-200/50 dark:border-emerald-800/50 shadow-lg',
      gradient: 'bg-gradient-to-br from-emerald-400 to-emerald-600 p-1',
    };

    const cardClasses = `${baseClasses} ${variants[variant]} ${className}`;

    return (
      <div className={cardClasses} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
