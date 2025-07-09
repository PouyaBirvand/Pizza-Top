function SocialLinks() {
  const socialIcons = [
    { src: 'https://cdn.lordicon.com/iqagrlso.json', href: '#' },
    { src: 'https://cdn.lordicon.com/ewswvzmw.json', href: '#' },
    { src: 'https://cdn.lordicon.com/kthelypq.json', href: '#' },
  ];

  return (
    <div className='flex space-x-4'>
      {socialIcons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors duration-200 hover:bg-emerald-600'
        >
          <lord-icon
            src={icon.src}
            trigger='hover'
            colors='primary:#ffffff,secondary:#ffffff'
            style={{ width: '20px', height: '20px' }}
          />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
