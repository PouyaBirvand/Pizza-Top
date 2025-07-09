import React from 'react';
import { BUSINESS_HOURS as schedules } from '../constants/contactConstants';

const BusinessHours = () => {

  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/50 dark:border-emerald-800/50 shadow-lg">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
        <lord-icon
          src="https://cdn.lordicon.com/abvsilkn.json"
          trigger="hover"
          colors="primary:#10b981,secondary:#065f46"
          style={{ width: '28px', height: '28px', marginRight: '12px' }}
        />
        Business Hours
      </h2>
      
      <div className="space-y-3">
        {schedules.map((schedule, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center py-2 border-b border-emerald-200/30 dark:border-emerald-800/30 last:border-b-0"
          >
            <span className="font-medium text-slate-800 dark:text-slate-200">
              {schedule.day}
            </span>
            <span className="text-emerald-600 dark:text-emerald-400">
              {schedule.hours}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessHours;
