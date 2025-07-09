import { memo } from 'react';
import Icon from './ui/LordIcon';
import LinkButton from '../../../ui/LinkButton';

const CartHeader = memo(({ username }) => {
  return (
    <div className='mb-8'>
      <LinkButton to='/menu'>
        <Icon
          src='https://cdn.lordicon.com/zmkotitn.json'
          style={{ width: '20px', height: '20px', marginRight: '8px' }}
        />
        Back to menu
      </LinkButton>

      <div className='mt-6 text-center'>
        <Icon
          src='https://cdn.lordicon.com/mfmkufkr.json'
          trigger='loop'
          delay='2000'
          style={{ width: '64px', height: '64px', margin: '0 auto 16px' }}
        />
        <h2 className='mb-2 text-3xl font-bold text-slate-800 dark:text-slate-200'>
          Your Cart, {username}
        </h2>
        <p className='text-slate-600 dark:text-slate-400'>
          Review your delicious selections
        </p>
      </div>
    </div>
  );
});

CartHeader.displayName = 'CartHeader';

export default CartHeader;
