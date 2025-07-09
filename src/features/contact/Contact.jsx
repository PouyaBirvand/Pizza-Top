import React from 'react';
import ContactHeader from './components/ContactHeader';
import ContactForm from './components/ContactForm';
import ContactSidebar from './components/ContactSidebar';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <ContactHeader />
      
      <div className="grid lg:grid-cols-2 gap-12">
        <ContactForm />
        <ContactSidebar />
      </div>
    </div>
  );
};

export default Contact;
