import React from 'react';
import { LordIcon } from './ui/LordIcon';

const FAQHeader = () => {
  return (
    <div className='mb-16 text-center'>
      <LordIcon
        src='https://cdn.lordicon.com/oqdmuxru.json'
        trigger='loop'
        delay='2000'
        colors='primary:#10b981,secondary:#065f46'
        style={{ width: '80px', height: '80px', margin: '0 auto 24px' }}
      />
      <h1 className='mb-6 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-4xl font-bold text-transparent dark:from-emerald-400 dark:to-emerald-600 md:text-5xl'>
        Frequently Asked Questions
      </h1>
      <p className='mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-300'>
        Find answers to common questions about our pizza delivery service
      </p>
    </div>
  );
};

export default FAQHeader;
