import { useEffect } from 'react';
import Navigation from './Navigation';
import SearchOrder from '../../../features/order/SearchOrder';
import Username from '../../../features/user/Username';

function MobileMenu({ isOpen, onClose }) {
  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mobile Menu Panel */}
      <div className={`fixed top-16 left-0 right-0 bg-white dark:bg-slate-900 border-b border-emerald-200/50 dark:border-emerald-800/50 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          {/* Search Section */}
          <div className="mb-6 sm:hidden">
            <SearchOrder />
          </div>
          
          {/* Navigation */}
          <div className="mb-6">
            <Navigation isMobile={true} onItemClick={onClose} />
          </div>
          
          {/* User Section */}
          <div className="pt-4 border-t border-emerald-200/50 dark:border-emerald-800/50 md:hidden">
            <Username />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
