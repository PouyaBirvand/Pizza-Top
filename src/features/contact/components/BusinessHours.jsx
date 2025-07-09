import React from 'react';
import { BUSINESS_HOURS as schedules } from '../constants/contactConstants';

const BusinessHours = () => {
  return (
    <div className='rounded-3xl border border-emerald-200/50 bg-white/70 p-8 shadow-lg backdrop-blur-sm dark:border-emerald-800/50 dark:bg-slate-800/70'>
      <h2 className='mb-6 flex items-center text-2xl font-bold text-slate-800 dark:text-slate-200'>
        <lord-icon
          src='https://cdn.lordicon.com/abvsilkn.json'
          trigger='hover'
          colors='primary:#10b981,secondary:#065f46'
          style={{ width: '28px', height: '28px', marginRight: '12px' }}
        />
        Business Hours
      </h2>

      <div className='space-y-3'>
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className='flex items-center justify-between border-b border-emerald-200/30 py-2 last:border-b-0 dark:border-emerald-800/30'
          >
            <span className='font-medium text-slate-800 dark:text-slate-200'>
              {schedule.day}
            </span>
            <span className='text-emerald-600 dark:text-emerald-400'>
              {schedule.hours}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessHours;
