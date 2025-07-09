import React from 'react';
import { useFAQItem } from '../hooks/useFAQ';
import { LordIcon } from './ui/LordIcon';

const FAQItem = ({ faq }) => {
  const { isOpen, toggle } = useFAQItem(faq.id);

  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl border border-emerald-200/50 dark:border-emerald-800/50 shadow-lg overflow-hidden">
      <button
        onClick={toggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 pr-4">
          {faq.question}
        </h3>
        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <LordIcon
            src="https://cdn.lordicon.com/zmkotitn.json"
            trigger="hover"
            colors="primary:#10b981,secondary:#065f46"
            style={{ width: '24px', height: '24px' }}
          />
        </div>
      </button>
      
      {isOpen && (
        <div 
          id={`faq-answer-${faq.id}`}
          className="px-6 pb-4 border-t border-emerald-200/30 dark:border-emerald-800/30"
        >
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed pt-4">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;