import React from 'react';
import { useFAQ } from '../hooks/useFAQ';
import FAQItem from './FAQItem';

const EmptyState = () => (
  <div className="text-center py-12">
    <p className="text-slate-600 dark:text-slate-400 text-lg">
      No questions found in this category.
    </p>
  </div>
);

const FAQList = () => {
  const { filteredFaqs } = useFAQ();

  if (filteredFaqs.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      {filteredFaqs.map((faq) => (
        <FAQItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default FAQList;