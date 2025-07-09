import React from 'react';

const MenuHeader = () => {
  return (
    <div className="text-center mb-12">
      <div className="mb-6">
        <lord-icon
          src="https://cdn.lordicon.com/wloilxuq.json"
          trigger="loop"
          delay="2000"
          colors="primary:#10b981,secondary:#065f46"
          style={{ width: '80px', height: '80px', margin: '0 auto' }}
        />
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent mb-4">
        Our Premium Menu
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        Discover our handcrafted pizzas made with the finest ingredients and authentic recipes
      </p>
    </div>
  );
};

export default MenuHeader;
