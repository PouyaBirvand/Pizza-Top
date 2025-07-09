import React from 'react';

const MenuHeader = () => {
  return (
    <div className='mb-12 text-center'>
      <div className='mb-6'>
        <lord-icon
          src='https://cdn.lordicon.com/wloilxuq.json'
          trigger='loop'
          delay='2000'
          colors='primary:#10b981,secondary:#065f46'
          style={{ width: '80px', height: '80px', margin: '0 auto' }}
        />
      </div>
      <h1 className='mb-4 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-400 dark:to-emerald-600'>
        Our Premium Menu
      </h1>
      <p className='mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300'>
        Discover our handcrafted pizzas made with the finest ingredients and
        authentic recipes
      </p>
    </div>
  );
};

export default MenuHeader;
