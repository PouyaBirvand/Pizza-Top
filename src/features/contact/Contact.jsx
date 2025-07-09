import React from 'react';
import ContactHeader from './components/ContactHeader';
import ContactForm from './components/ContactForm';
import ContactSidebar from './components/ContactSidebar';

const Contact = () => {
  return (
    <div className='mx-auto max-w-6xl px-4 py-12'>
      <ContactHeader />

      <div className='grid gap-12 lg:grid-cols-2'>
        <ContactForm />
        <ContactSidebar />
      </div>
    </div>
  );
};

export default Contact;
