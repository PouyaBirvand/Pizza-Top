import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../ui/Button';
import { validateReviewForm } from '../utils/reviewUtils';
import { submitReview, updateNewReview } from '../reviewSlice';

const ReviewForm = () => {
  const dispatch = useDispatch();
  const { newReview, isSubmitting } = useSelector((state) => state.reviews);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateReviewForm(newReview);
    if (errors.length > 0) {
      // Handle validation errors
      console.error('Validation errors:', errors);
      return;
    }

    dispatch(submitReview(newReview));
  };

  const handleInputChange = (field, value) => {
    dispatch(updateNewReview({ [field]: value }));
  };

  return (
    <div className='mb-12 rounded-3xl border border-emerald-200/50 bg-white/70 p-8 shadow-lg backdrop-blur-sm dark:border-emerald-800/50 dark:bg-slate-800/70'>
      <h2 className='mb-6 text-2xl font-bold text-slate-800 dark:text-slate-200'>
        Share Your Experience
      </h2>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid gap-6 md:grid-cols-2'>
          <div>
            <label className='mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300'>
              Your Name
            </label>
            <input
              type='text'
              value={newReview.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className='w-full rounded-xl border border-emerald-200 bg-white/50 px-4 py-3 transition-all duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-emerald-800 dark:bg-slate-800/50'
            />
          </div>

          <div>
            <label className='mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300'>
              Rating
            </label>
            <select
              value={newReview.rating}
              onChange={(e) =>
                handleInputChange('rating', parseInt(e.target.value))
              }
              className='w-full rounded-xl border border-emerald-200 bg-white/50 px-4 py-3 transition-all duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-emerald-800 dark:bg-slate-800/50'
            >
              <option value={5}>5 Stars - Excellent</option>
              <option value={4}>4 Stars - Very Good</option>
              <option value={3}>3 Stars - Good</option>
              <option value={2}>2 Stars - Fair</option>
              <option value={1}>1 Star - Poor</option>
            </select>
          </div>
        </div>

        <div>
          <label className='mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300'>
            Your Review
          </label>
          <textarea
            value={newReview.comment}
            onChange={(e) => handleInputChange('comment', e.target.value)}
            required
            rows={4}
            placeholder='Tell us about your experience...'
            className='w-full resize-none rounded-xl border border-emerald-200 bg-white/50 px-4 py-3 transition-all duration-200 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-emerald-800 dark:bg-slate-800/50'
          />
        </div>

        <Button type='primary' disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <lord-icon
                src='https://cdn.lordicon.com/xjovhxra.json'
                trigger='loop'
                colors='primary:#ffffff,secondary:#ffffff'
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Submitting...
            </>
          ) : (
            <>
              <lord-icon
                src='https://cdn.lordicon.com/oqdmuxru.json'
                trigger='hover'
                colors='primary:#ffffff,secondary:#ffffff'
                style={{ width: '20px', height: '20px', marginRight: '8px' }}
              />
              Submit Review
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
