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
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-emerald-200/50 dark:border-emerald-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
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
