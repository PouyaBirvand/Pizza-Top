import React from 'react';

const PizzaInfo = ({ name, ingredients }) => {
  return (
    <div className='mb-4'>
      <h3 className='mb-2 text-xl font-bold text-slate-800 transition-colors group-hover:text-emerald-600 dark:text-slate-200 dark:group-hover:text-emerald-400'>
        {name}
      </h3>
      <p className='line-clamp-2 text-sm text-slate-500 dark:text-slate-400'>
        {ingredients.join(', ')}
      </p>
    </div>
  );
};

export default PizzaInfo;
