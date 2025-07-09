import React from 'react';

const QuickActionLink = ({ href, icon, children }) => (
  <a
    href={href}
    className='flex items-center space-x-3 rounded-xl bg-white/20 p-3 transition-colors hover:bg-white/30'
  >
    <lord-icon
      src={icon}
      trigger='hover'
      colors='primary:#ffffff,secondary:#ffffff'
      style={{ width: '20px', height: '20px' }}
    />
    <span>{children}</span>
  </a>
);

const QuickActions = () => {
  const quickActions = [
    {
      href: 'tel:+15551234567',
      icon: 'https://cdn.lordicon.com/surcxhka.json',
      text: 'Call Now for Orders',
    },
    {
      href: 'mailto:hello@pizzatop.com',
      icon: 'https://cdn.lordicon.com/rhvddzym.json',
      text: 'Email Support',
    },
  ];

  return (
    <div className='rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 text-white'>
      <h2 className='mb-6 flex items-center text-2xl font-bold'>
        <lord-icon
          src='https://cdn.lordicon.com/oqdmuxru.json'
          trigger='hover'
          colors='primary:#ffffff,secondary:#ffffff'
          style={{ width: '28px', height: '28px', marginRight: '12px' }}
        />
        Quick Actions
      </h2>

      <div className='space-y-4'>
        {quickActions.map((action, index) => (
          <QuickActionLink key={index} href={action.href} icon={action.icon}>
            {action.text}
          </QuickActionLink>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
