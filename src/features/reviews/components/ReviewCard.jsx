import React from 'react';
import { formatDate, getInitials } from '../utils/reviewUtils';
import StarRating from './StarRating';

const ReviewCard = ({ review }) => {
  return (
    <div className='rounded-2xl border border-emerald-200/50 bg-white/70 p-6 shadow-lg backdrop-blur-sm dark:border-emerald-800/50 dark:bg-slate-800/70'>
      <div className='mb-4 flex items-start justify-between'>
        <div className='flex items-center space-x-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-lg font-bold text-white'>
            {getInitials(review.name)}
          </div>
          <div>
            <div className='flex items-center space-x-2'>
              <h3 className='font-semibold text-slate-800 dark:text-slate-200'>
                {review.name}
              </h3>
              {review.verified && (
                <lord-icon
                  src='https://cdn.lordicon.com/oqdmuxru.json'
                  trigger='hover'
                  colors='primary:#10b981,secondary:#065f46'
                  style={{ width: '16px', height: '16px' }}
                />
              )}
            </div>
            <div className='flex items-center space-x-2'>
              <StarRating rating={review.rating} />
              <span className='text-sm text-slate-500 dark:text-slate-400'>
                {formatDate(review.date)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className='leading-relaxed text-slate-600 dark:text-slate-400'>
        {review.comment}
      </p>
    </div>
  );
};

export default ReviewCard;
