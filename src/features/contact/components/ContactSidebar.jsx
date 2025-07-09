import React from 'react';
import ContactInfo from './ContactInfo';
import BusinessHours from './BusinessHours';
import QuickActions from './QuickActions';

const ContactSidebar = () => {
  return (
    <div className="space-y-8">
      <ContactInfo />
      <BusinessHours />
      <QuickActions />
    </div>
  );
};

export default ContactSidebar;
