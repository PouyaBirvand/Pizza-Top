import React from 'react';

const ReviewHeader = () => {
  return (
    <div className='mb-16 text-center'>
      <lord-icon
        src='https://cdn.lordicon.com/yqzmiobz.json'
        trigger='loop'
        delay='2000'
        colors='primary:#10b981,secondary:#065f46'
        style={{ width: '80px', height: '80px', margin: '0 auto 24px' }}
      />
      <h1 className='mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-400 dark:to-emerald-600 md:text-5xl'>
        Customer Reviews
      </h1>
      <p className='mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-300'>
        See what our customers are saying about their Pizza Top experience
      </p>
    </div>
  );
};

export default ReviewHeader;
