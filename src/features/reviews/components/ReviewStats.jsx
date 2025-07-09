import React from 'react';
import StarRating from './StarRating';

const ReviewStats = ({ averageRating, totalReviews, satisfactionRate }) => {
  return (
    <div className='mb-12 rounded-3xl border border-emerald-200/50 bg-white/70 p-8 shadow-lg backdrop-blur-sm dark:border-emerald-800/50 dark:bg-slate-800/70'>
      <div className='grid gap-8 text-center md:grid-cols-3'>
        <div>
          <div className='mb-2 text-4xl font-bold text-emerald-600 dark:text-emerald-400'>
            {averageRating.toFixed(1)}
          </div>
          <div className='mb-2 flex justify-center'>
            <StarRating rating={Math.round(averageRating)} />
          </div>
          <div className='text-slate-600 dark:text-slate-400'>
            Average Rating
          </div>
        </div>

        <div>
          <div className='mb-2 text-4xl font-bold text-emerald-600 dark:text-emerald-400'>
            {totalReviews}
          </div>
          <div className='text-slate-600 dark:text-slate-400'>
            Total Reviews
          </div>
        </div>

        <div>
          <div className='mb-2 text-4xl font-bold text-emerald-600 dark:text-emerald-400'>
            {satisfactionRate}%
          </div>
          <div className='text-slate-600 dark:text-slate-400'>
            Satisfaction Rate
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStats;
