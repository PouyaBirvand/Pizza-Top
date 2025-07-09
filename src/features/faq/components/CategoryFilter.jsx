import React from 'react';
import { useFAQ } from '../hooks/useFAQ';
import { LordIcon } from './ui/LordIcon';

const CategoryButton = ({ category, isActive, onClick }) => {
  const baseClasses = "flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200";
  const activeClasses = "bg-emerald-500 text-white shadow-lg transform scale-105";
  const inactiveClasses = "bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30";
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      aria-pressed={isActive}
    >
      <LordIcon
        src={category.icon}
        trigger="hover"
        colors={isActive ? "primary:#ffffff,secondary:#ffffff" : "primary:#10b981,secondary:#065f46"}
        style={{ width: '20px', height: '20px' }}
      />
      <span>{category.name}</span>
    </button>
  );
};

const CategoryFilter = () => {
  const { categories, activeCategory, setActiveCategory } = useFAQ();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <CategoryButton
          key={category.id}
          category={category}
          isActive={activeCategory === category.id}
          onClick={() => setActiveCategory(category.id)}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;