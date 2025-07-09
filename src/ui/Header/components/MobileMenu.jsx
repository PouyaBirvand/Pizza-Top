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
        className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden'
        onClick={onClose}
        aria-hidden='true'
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed left-0 right-0 top-16 z-50 transform border-b border-emerald-200/50 bg-white transition-transform duration-300 ease-in-out dark:border-emerald-800/50 dark:bg-slate-900 lg:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6'>
          {/* Search Section */}
          <div className='mb-6 sm:hidden'>
            <SearchOrder />
          </div>

          {/* Navigation */}
          <div className='mb-6'>
            <Navigation isMobile={true} onItemClick={onClose} />
          </div>

          {/* User Section */}
          <div className='border-t border-emerald-200/50 pt-4 dark:border-emerald-800/50 md:hidden'>
            <Username />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
