import React from 'react';
import { CONTACT_ITEMS as contactitems } from '../constants/contactConstants';

const ContactInfoItem = ({ icon, title, content }) => (
  <div className='flex items-center space-x-4'>
    <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30'>
      <lord-icon
        src={icon}
        trigger='hover'
        colors='primary:#10b981,secondary:#065f46'
        style={{ width: '24px', height: '24px' }}
      />
    </div>
    <div>
      <h3 className='font-semibold text-slate-800 dark:text-slate-200'>
        {title}
      </h3>
      <p className='text-slate-600 dark:text-slate-400'>{content}</p>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className='rounded-3xl border border-emerald-200/50 bg-white/70 p-8 shadow-lg backdrop-blur-sm dark:border-emerald-800/50 dark:bg-slate-800/70'>
      <h2 className='mb-6 flex items-center text-2xl font-bold text-slate-800 dark:text-slate-200'>
        <lord-icon
          src='https://cdn.lordicon.com/srsgifqc.json'
          trigger='hover'
          colors='primary:#10b981,secondary:#065f46'
          style={{ width: '28px', height: '28px', marginRight: '12px' }}
        />
        Contact Information
      </h2>

      <div className='space-y-6'>
        {contactitems.map((item, index) => (
          <ContactInfoItem
            key={index}
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
