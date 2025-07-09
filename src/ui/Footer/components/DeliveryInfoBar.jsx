function DeliveryInfoBar() {
  const deliveryFeatures = [
    {
      icon: 'https://cdn.lordicon.com/abvsilkn.json',
      text: 'Free delivery on orders over $25',
      showOnMobile: true,
    },
    {
      icon: 'https://cdn.lordicon.com/abvsilkn.json',
      text: '30 minutes or less',
      showOnMobile: false,
    },
    {
      icon: 'https://cdn.lordicon.com/oqdmuxru.json',
      text: '100% satisfaction guaranteed',
      showOnMobile: false,
    },
  ];

  return (
    <div className='bg-emerald-600 py-3'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-center space-x-8 text-sm text-white'>
          {deliveryFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${
                feature.showOnMobile ? 'flex' : 'hidden md:flex'
              } items-center space-x-2`}
            >
              <lord-icon
                src={feature.icon}
                trigger='hover'
                colors='primary:#ffffff,secondary:#ffffff'
                style={{ width: '16px', height: '16px' }}
              />
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeliveryInfoBar;
