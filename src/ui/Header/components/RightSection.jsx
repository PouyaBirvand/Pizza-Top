import SearchOrder from '../../../features/order/SearchOrder';
import Username from '../../../features/user/Username';
import ThemeToggle from '../../../features/theme/ThemeToggle';
import CartButton from './CartButton';
import HamburgerButton from './HamburgerButton';

function RightSection({ totalCartQuantity, onMobileMenuToggle, isMobileMenuOpen }) {
  return (
    <div className="flex items-center space-x-2 sm:space-x-4">
      {/* Search - Hidden on small screens */}
      <div className="hidden sm:block">
        <SearchOrder />
      </div>
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Username - Hidden on small screens */}
      <div className="hidden md:block">
        <Username />
      </div>
      
      {/* Cart */}
      <CartButton totalCartQuantity={totalCartQuantity} />
      
      {/* Hamburger Menu - Only on mobile/tablet */}
      <div className="lg:hidden">
        <HamburgerButton 
          isOpen={isMobileMenuOpen}
          onClick={onMobileMenuToggle}
        />
      </div>
    </div>
  );
}

export default RightSection;
