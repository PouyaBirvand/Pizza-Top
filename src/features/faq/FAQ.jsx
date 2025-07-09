import React from 'react';
import FAQHeader from './components/FAQHeader';
import CategoryFilter from './components/CategoryFilter';
import FAQControls from './components/FAQControls';
import FAQList from './components/FAQList';
import ContactSection from './components/ContactSection';

const FAQ = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <FAQHeader />
      <CategoryFilter />
      <FAQControls />
      <FAQList />
      <ContactSection />
    </div>
  );
};

export default FAQ;
