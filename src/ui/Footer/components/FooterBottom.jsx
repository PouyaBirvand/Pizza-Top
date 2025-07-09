function FooterBottom() {
  const policyLinks = [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' },
  ];

  return (
    <div className='mt-12 border-t border-slate-800 pt-8'>
      <div className='flex flex-col items-center justify-between md:flex-row'>
        <div className='mb-4 text-sm text-slate-400 md:mb-0'>
          © 2025 Pizza Top. All rights reserved.
        </div>

        <div className='flex items-center space-x-6 text-sm'>
          {policyLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='text-slate-400 transition-colors duration-200 hover:text-emerald-400'
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
