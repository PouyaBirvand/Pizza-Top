import React from 'react';
import { useFAQ } from '../hooks/useFAQ';

const FAQControls = () => {
  const { openItems, filteredFaqs, openAllItems, closeAllItems } = useFAQ();
  
  const hasOpenItems = openItems.length > 0;
  const allItemsOpen = openItems.length === filteredFaqs.length;

  return (
    <div className="flex justify-end gap-2 mb-4">
      <button
        onClick={allItemsOpen ? closeAllItems : openAllItems}
        className="px-4 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors duration-200"
      >
        {allItemsOpen ? 'Close All' : 'Open All'}
      </button>
      {hasOpenItems && (
        <button
          onClick={closeAllItems}
          className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors duration-200"
        >
          Close All
        </button>
      )}
    </div>
  );
};

export default FAQControls;
