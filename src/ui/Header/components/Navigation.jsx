import NavigationItem from './NavigationItem';

const navigationItems = [
  {
    to: '/menu',
    label: 'Menu',
    icon: 'https://cdn.lordicon.com/wloilxuq.json'
  },
  {
    to: '/about',
    label: 'About',
    icon: 'https://cdn.lordicon.com/hrjifpbq.json'
  },
  {
    to: '/reviews',
    label: 'Reviews',
    icon: 'https://cdn.lordicon.com/yqzmiobz.json'
  },
  {
    to: '/faq',
    label: 'FAQ',
    icon: 'https://cdn.lordicon.com/oqdmuxru.json'
  },
  {
    to: '/contact',
    label: 'Contact',
    icon: 'https://cdn.lordicon.com/srsgifqc.json'
  }
];

function Navigation({ isMobile = false, onItemClick }) {
  const baseClasses = isMobile 
    ? "flex flex-col space-y-4" 
    : "flex items-center space-x-6 xl:space-x-8";

  return (
    <nav className={baseClasses}>
      {navigationItems.map((item) => (
        <NavigationItem
          key={item.to}
          to={item.to}
          label={item.label}
          icon={item.icon}
          isMobile={isMobile}
          onClick={onItemClick}
        />
      ))}
    </nav>
  );
}

export default Navigation;
