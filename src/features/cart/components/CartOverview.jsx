import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartStats from './CartStats';
import {
  getIsCartEmpty,
  getTotalCartPrice,
  getTotalCartQuantity,
} from '../cartSlice';
import Icon from './ui/LordIcon';

const CartOverview = memo(() => {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const isCartEmpty = useSelector(getIsCartEmpty);

  if (isCartEmpty) return null;

  return (
    <div className='fixed bottom-0 left-0 right-0 z-40 border-t border-emerald-200/50 bg-white/90 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl dark:border-emerald-800/50 dark:bg-slate-900/90'>
      <div className='mx-auto max-w-7xl px-4 py-4'>
        <div className='flex items-center justify-between'>
          <CartStats
            totalQuantity={totalCartQuantity}
            totalPrice={totalCartPrice}
          />

          <Link
            to='/cart'
            className='flex transform items-center space-x-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-105 hover:from-emerald-600 hover:to-emerald-700'
          >
            <span>Open Cart</span>
            <Icon
              src='https://cdn.lordicon.com/fpmskzsv.json'
              colors='primary:#ffffff,secondary:#ffffff'
              style={{ width: '20px', height: '20px' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
});

CartOverview.displayName = 'CartOverview';

export default CartOverview;
