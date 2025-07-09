import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../cartSlice';
import IconButton from './ui/IconButton';


const DeleteItem = memo(({ pizzaId }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteItem(pizzaId));
  }, [dispatch, pizzaId]);

  return (
    <IconButton
      type="danger"
      onClick={handleDelete}
      icon="https://cdn.lordicon.com/skkahier.json"
      iconProps={{ colors: 'primary:#ffffff,secondary:#ffffff' }}
      aria-label="Delete item from cart"
    >
      Delete
    </IconButton>
  );
});

DeleteItem.displayName = 'DeleteItem';

export default DeleteItem;
