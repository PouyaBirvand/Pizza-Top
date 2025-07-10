import React from 'react';
import { useReviews } from './hooks/useReviews';
import ReviewHeader from './components/ReviewHeader';
import ReviewStats from './components/ReviewStats';
import Button from '../../ui/Button';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';

const Reviews = () => {
  const { showForm, stats, isLoading, handleToggleForm, handleLoadMore , kos } =
    useReviews();

  return (
    <div className='mx-auto max-w-6xl px-4 py-12'>
      <ReviewHeader />

      <ReviewStats
        averageRating={stats.averageRating}
        totalReviews={stats.totalReviews}
        satisfactionRate={stats.satisfactionRate}
      />

      {/* Add Review Button */}
      <div className='mb-12 text-center'>
        <Button type='primary' onClick={handleToggleForm}>
          <lord-icon
            src='https://cdn.lordicon.com/rhvddzym.json'
            trigger='hover'
            colors='primary:#ffffff,secondary:#ffffff'
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          {showForm ? 'Cancel' : 'Write a Review'}
        </Button>
      </div>

      {/* Review Form */}
      {showForm && <ReviewForm />}

      {/* Reviews List */}
      <ReviewList />

      {/* Load More Button */}
      <div className='mt-12 text-center'>
        <Button type='secondary' onClick={handleLoadMore} disabled={isLoading}>
          <lord-icon
            src='https://cdn.lordicon.com/gkryirhd.json'
            trigger='loop'
            colors='primary:#10b981,secondary:#065f46'
            style={{ width: '20px', height: '20px', marginRight: '8px' }}
          />
          {isLoading ? 'Loading...' : 'Load More Reviews'}
        </Button>
      </div>
    </div>
  );
};

export default Reviews;



// اسپینر کلاسیک
// {
//   icon: 'https://cdn.lordicon.com/msoeawqm.json',
//   iconProps: {
//     trigger: 'loop',
//     colors: 'primary:#10b981,secondary:#065f46'
//   }
// }

// // دایره چرخان
// {
//   icon: 'https://cdn.lordicon.com/xjovhxra.json',
//   iconProps: {
//     trigger: 'loop',
//     colors: 'primary:#10b981'
//   }
// }

// // نقاط چرخان
// {
//   icon: '',
//   iconProps: {
//     trigger: 'loop',
//     colors: 'primary:#10b981,secondary:#065f46'
//   }
// }

// // ساعت شنی
// {
//   icon: '',
//   iconProps: {
//     trigger: 'loop',
//     colors: 'primary:#10b981,secondary:#065f46'
//   }
// }

// // چرخ دنده چرخان
// {
//   icon: '',
//   iconProps: {
//     trigger: 'loop',
//     colors: 'primary:#10b981'
//   }
// }