import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, increaseItemQuantity } from '../cartSlice';
import QuantityButton from './QuantityButton';
import QuantityDisplay from './QuantityDisplay';

const UpdateItemQuantity = memo(({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  const handleDecrease = useCallback(() => {
    dispatch(decreaseItemQuantity(pizzaId));
  }, [dispatch, pizzaId]);

  const handleIncrease = useCallback(() => {
    dispatch(increaseItemQuantity(pizzaId));
  }, [dispatch, pizzaId]);

  return (
    <div className='flex items-center space-x-3 rounded-xl bg-emerald-50 p-2 dark:bg-emerald-900/20'>
      <QuantityButton
        type='decrease'
        onClick={handleDecrease}
        disabled={currentQuantity <= 1}
        iconSrc='https://cdn.lordicon.com/rmkahxvq.json'
        ariaLabel='Decrease quantity'
      />

      <QuantityDisplay quantity={currentQuantity} />

      <QuantityButton
        type='increase'
        onClick={handleIncrease}
        iconSrc='https://cdn.lordicon.com/jqeuwnmb.json'
        ariaLabel='Increase quantity'
      />
    </div>
  );
});

UpdateItemQuantity.displayName = 'UpdateItemQuantity';

export default UpdateItemQuantity;
