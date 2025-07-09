import React from 'react';
import { useFAQItem } from '../hooks/useFAQ';
import { LordIcon } from './ui/LordIcon';

const FAQItem = ({ faq }) => {
  const { isOpen, toggle } = useFAQItem(faq.id);

  return (
    <div className='overflow-hidden rounded-2xl border border-emerald-200/50 bg-white/70 shadow-lg backdrop-blur-sm dark:border-emerald-800/50 dark:bg-slate-800/70'>
      <button
        onClick={toggle}
        className='flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <h3 className='pr-4 text-lg font-semibold text-slate-800 dark:text-slate-200'>
          {faq.question}
        </h3>
        <div
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <LordIcon
            src='https://cdn.lordicon.com/zmkotitn.json'
            trigger='hover'
            colors='primary:#10b981,secondary:#065f46'
            style={{ width: '24px', height: '24px' }}
          />
        </div>
      </button>

      {isOpen && (
        <div
          id={`faq-answer-${faq.id}`}
          className='border-t border-emerald-200/30 px-6 pb-4 dark:border-emerald-800/30'
        >
          <p className='pt-4 leading-relaxed text-slate-600 dark:text-slate-400'>
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
