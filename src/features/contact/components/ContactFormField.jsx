import React from 'react';

const ContactFormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  required = false, 
  rows = null,
  className = '' 
}) => {
  const baseInputClasses = `w-full px-4 py-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-white/50 dark:bg-slate-800/50 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 ${className}`;

  const InputComponent = rows ? 'textarea' : 'input';
  
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
        {label} {required && '*'}
      </label>
      <InputComponent
        type={rows ? undefined : type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className={`${baseInputClasses} ${rows ? 'resize-none' : ''}`}
      />
    </div>
  );
};

export default ContactFormField;
