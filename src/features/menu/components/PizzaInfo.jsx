import React from 'react';

const PizzaInfo = ({ name, ingredients }) => {
  return (
    <div className="mb-4">
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        {name}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
        {ingredients.join(', ')}
      </p>
    </div>
  );
};

export default PizzaInfo;
