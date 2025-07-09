import React from 'react';

const ContactHeader = () => {
  return (
    <div className="text-center mb-16">
      <lord-icon
        src="https://cdn.lordicon.com/srsgifqc.json"
        trigger="loop"
        delay="2000"
        colors="primary:#10b981,secondary:#065f46"
        style={{ width: '80px', height: '80px', margin: '0 auto 24px' }}
      />
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-400 dark:to-emerald-600 bg-clip-text text-transparent mb-6">
        Get in Touch
      </h1>
      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
        Have a question, feedback, or just want to say hello? We'd love to hear from you!
      </p>
    </div>
  );
};

export default ContactHeader;
