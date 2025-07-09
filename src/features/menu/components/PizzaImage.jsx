import React from 'react';

const PizzaImage = ({ imageUrl, name, soldOut }) => {
  return (
    <div className='relative overflow-hidden rounded-t-2xl'>
      <img
        src={imageUrl}
        alt={name}
        className={`h-48 w-full object-cover transition-all duration-300 group-hover:scale-105 ${
          soldOut ? 'opacity-50 grayscale' : ''
        }`}
      />
      {soldOut && <SoldOutOverlay />}
    </div>
  );
};

const SoldOutOverlay = () => (
  <div className='absolute inset-0 flex items-center justify-center bg-slate-900/50'>
    <div className='rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white'>
      <lord-icon
        src='https://cdn.lordicon.com/akqsdstj.json'
        trigger='loop'
        colors='primary:#ffffff,secondary:#ffffff'
        style={{
          width: '20px',
          height: '20px',
          marginRight: '8px',
          display: 'inline-block',
        }}
      />
      Sold Out
    </div>
  </div>
);

export default PizzaImage;
