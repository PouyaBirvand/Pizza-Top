import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateStats, loadMoreReviews, toggleForm } from '../reviewSlice';

export const useReviews = () => {
  const dispatch = useDispatch();
  const reviewsState = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(calculateStats());
  }, [reviewsState.reviews, dispatch]);

  const handleToggleForm = () => {
    dispatch(toggleForm());
  };

  const handleLoadMore = () => {
    dispatch(loadMoreReviews());
  };

  return {
    ...reviewsState,
    handleToggleForm,
    handleLoadMore,
  };
};
