import React from 'react';
import FAQHeader from './components/FAQHeader';
import CategoryFilter from './components/CategoryFilter';
import FAQControls from './components/FAQControls';
import FAQList from './components/FAQList';
import ContactSection from './components/ContactSection';

const FAQ = () => {
  return (
    <div className='mx-auto max-w-6xl px-4 py-12'>
      <FAQHeader />
      <CategoryFilter />
      <FAQControls />
      <FAQList />
      <ContactSection />
    </div>
  );
};

export default FAQ;
