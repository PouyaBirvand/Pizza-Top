import React from 'react';

const PizzaImage = ({ imageUrl, name, soldOut }) => {
  return (
    <div className="relative overflow-hidden rounded-t-2xl">
      <img
        src={imageUrl}
        alt={name}
        className={`w-full h-48 object-cover transition-all duration-300 group-hover:scale-105 ${
          soldOut ? 'opacity-50 grayscale' : ''
        }`}
      />
      {soldOut && <SoldOutOverlay />}
    </div>
  );
};

const SoldOutOverlay = () => (
  <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
    <div className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-sm">
      <lord-icon
        src="https://cdn.lordicon.com/akqsdstj.json"
        trigger="loop"
        colors="primary:#ffffff,secondary:#ffffff"
        style={{ width: '20px', height: '20px', marginRight: '8px', display: 'inline-block' }}
      />
      Sold Out
    </div>
  </div>
);

export default PizzaImage;
