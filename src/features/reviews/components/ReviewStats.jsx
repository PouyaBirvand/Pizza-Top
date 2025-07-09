import React from 'react';
import StarRating from './StarRating';

const ReviewStats = ({
  averageRating,
  totalReviews,
  satisfactionRate
}) => {
  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 border border-emerald-200/50 dark:border-emerald-800/50 shadow-lg mb-12">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
            {averageRating.toFixed(1)}
          </div>
          <div className="flex justify-center mb-2">
            <StarRating rating={Math.round(averageRating)} />
          </div>
          <div className="text-slate-600 dark:text-slate-400">Average Rating</div>
        </div>
        
        <div>
          <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
            {totalReviews}
          </div>
          <div className="text-slate-600 dark:text-slate-400">Total Reviews</div>
        </div>
        
        <div>
          <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
            {satisfactionRate}%
          </div>
          <div className="text-slate-600 dark:text-slate-400">Satisfaction Rate</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStats;
