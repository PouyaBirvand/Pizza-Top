import React from 'react';

const ReviewHeader = () => {
  return (
    <div className="text-center mb-16">
      <lord-icon
        src="https://cdn.lordicon.com/yqzmiobz.json"
        trigger="loop"
        delay="2000"
        colors="primary:#10b981,secondary:#065f46"
        style={{ width: '80px', height: '80px', margin: '0 auto 24px' }}
      />
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent mb-6">
        Customer Reviews
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
        See what our customers are saying about their Emerald Slice experience
      </p>
    </div>
  );
};

export default ReviewHeader;
