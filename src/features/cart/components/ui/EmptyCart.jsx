import { memo } from 'react';
import LinkButton from '../../../../ui/LinkButton';
import Icon from './LordIcon';

const EmptyCart = memo(() => {
  return (
    <div className='mx-auto max-w-2xl px-4 py-16 text-center'>
      <div className='mb-8'>
        <Icon
          src='https://cdn.lordicon.com/mfmkufkr.json'
          trigger='loop'
          delay='2000'
          colors='primary:#94a3b8,secondary:#64748b'
          style={{ width: '120px', height: '120px', margin: '0 auto' }}
        />
      </div>

      <h2 className='mb-4 text-2xl font-bold text-slate-800 dark:text-slate-200'>
        Your cart is empty
      </h2>

      <p className='mb-8 text-lg text-slate-600 dark:text-slate-400'>
        Start adding some delicious pizzas to get started! 🍕
      </p>

      <LinkButton to='/menu'>
        <Icon
          src='https://cdn.lordicon.com/zmkotitn.json'
          style={{ width: '20px', height: '20px', marginRight: '8px' }}
        />
        Browse Menu
      </LinkButton>
    </div>
  );
});

EmptyCart.displayName = 'EmptyCart';

export default EmptyCart;
