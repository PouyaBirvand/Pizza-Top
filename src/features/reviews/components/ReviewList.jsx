import React from 'react';
import { useSelector } from 'react-redux';
import ReviewCard from './ReviewCard';

const ReviewList = () => {
  const { reviews } = useSelector((state) => state.reviews);

  return (
    <div className='grid gap-6'>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
