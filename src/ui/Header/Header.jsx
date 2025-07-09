import { useState } from 'react';
import { useSelector } from 'react-redux';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import MobileMenu from './components/MobileMenu';
import RightSection from './components/RightSection';
import { getTotalCartQuantity } from '../../features/cart/cartSlice';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='sticky top-0 z-50 border-b border-emerald-200/50 bg-white/80 backdrop-blur-md dark:border-emerald-800/50 dark:bg-slate-900/80'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Logo />

          {/* Desktop Navigation */}
          <div className='hidden lg:block'>
            <Navigation />
          </div>

          {/* Right Section */}
          <RightSection
            totalCartQuantity={totalCartQuantity}
            onMobileMenuToggle={toggleMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        totalCartQuantity={totalCartQuantity}
      />
    </header>
  );
}

export default Header;
