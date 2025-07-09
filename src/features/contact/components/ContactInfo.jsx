import React from 'react';
import { CONTACT_ITEMS as contactitems } from '../constants/contactConstants';

const ContactInfoItem = ({ icon, title, content }) => (
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center">
      <lord-icon
        src={icon}
        trigger="hover"
        colors="primary:#10b981,secondary:#065f46"
        style={{ width: '24px', height: '24px' }}
      />
    </div>
    <div>
      <h3 className="font-semibold text-slate-800 dark:text-slate-200">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{content}</p>
    </div>
  </div>
);

const ContactInfo = () => {


  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/50 dark:border-emerald-800/50 shadow-lg">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center">
        <lord-icon
          src="https://cdn.lordicon.com/srsgifqc.json"
          trigger="hover"
          colors="primary:#10b981,secondary:#065f46"
          style={{ width: '28px', height: '28px', marginRight: '12px' }}
        />
        Contact Information
      </h2>
      
      <div className="space-y-6">
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
