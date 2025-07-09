import React from 'react';
import { formatDate, getInitials } from '../utils/reviewUtils';
import StarRating from './StarRating';

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-800/50 shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {getInitials(review.name)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                {review.name}
              </h3>
              {review.verified && (
                <lord-icon
                  src="https://cdn.lordicon.com/oqdmuxru.json"
                  trigger="hover"
                  colors="primary:#10b981,secondary:#065f46"
                  style={{ width: '16px', height: '16px' }}
                />
              )}
            </div>
            <div className="flex items-center space-x-2">
              <StarRating rating={review.rating} />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {formatDate(review.date)}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        {review.comment}
      </p>
    </div>
  );
};

export default ReviewCard;
