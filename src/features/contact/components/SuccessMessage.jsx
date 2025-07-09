import React from 'react';

const SuccessMessage = ({ message, onClose }) => {
  return (
    <div className='mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-800 dark:bg-emerald-900/20'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2 text-emerald-700 dark:text-emerald-300'>
          <lord-icon
            src='https://cdn.lordicon.com/oqdmuxru.json'
            trigger='loop'
            colors='primary:#059669,secondary:#059669'
            style={{ width: '20px', height: '20px' }}
          />
          <span className='font-medium'>{message}</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className='text-emerald-600 transition-colors hover:text-emerald-800'
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default SuccessMessage;
