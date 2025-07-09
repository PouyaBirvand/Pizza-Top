import React from 'react';
import { LordIcon } from './ui/LordIcon';

const ContactSection = () => {
  return (
    <div className='mt-16 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 text-center text-white'>
      <LordIcon
        src='https://cdn.lordicon.com/srsgifqc.json'
        trigger='loop'
        delay='3000'
        colors='primary:#ffffff,secondary:#ffffff'
        style={{ width: '48px', height: '48px', margin: '0 auto 16px' }}
      />
      <h2 className='mb-4 text-2xl font-bold'>Still have questions?</h2>
      <p className='mb-6 text-emerald-100'>
        Can't find what you're looking for? Our friendly support team is here to
        help!
      </p>
      <div className='flex flex-col justify-center gap-4 sm:flex-row'>
        <a
          href='/contact'
          className='inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-emerald-600 transition-colors duration-200 hover:bg-emerald-50'
        >
          <LordIcon
            src='https://cdn.lordicon.com/rhvddzym.json'
            trigger='hover'
            colors='primary:#059669,secondary:#059669'
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          Contact Us
        </a>
        <a
          href='tel:+15551234567'
          className='inline-flex items-center justify-center rounded-xl bg-white/20 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/30'
        >
          <LordIcon
            src='https://cdn.lordicon.com/surcxhka.json'
            trigger='hover'
            colors='primary:#ffffff,secondary:#ffffff'
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          Call Now
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
