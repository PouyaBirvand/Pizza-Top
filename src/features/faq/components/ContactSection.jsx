import React from 'react';
import { LordIcon } from './ui/LordIcon';

const ContactSection = () => {
  return (
    <div className="mt-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 text-white text-center">
      <LordIcon
        src="https://cdn.lordicon.com/srsgifqc.json"
        trigger="loop"
        delay="3000"
        colors="primary:#ffffff,secondary:#ffffff"
        style={{ width: '48px', height: '48px', margin: '0 auto 16px' }}
      />
      <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
      <p className="text-emerald-100 mb-6">
        Can't find what you're looking for? Our friendly support team is here to help!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-colors duration-200"
        >
          <LordIcon
            src="https://cdn.lordicon.com/rhvddzym.json"
            trigger="hover"
            colors="primary:#059669,secondary:#059669"
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          Contact Us
        </a>
        <a
          href="tel:+15551234567"
          className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors duration-200"
        >
          <LordIcon
            src="https://cdn.lordicon.com/surcxhka.json"
            trigger="hover"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          Call Now
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
