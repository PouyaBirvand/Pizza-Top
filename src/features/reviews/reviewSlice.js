import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  reviews: [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2024-01-15',
      comment:
        'Amazing pizza! The Margherita was absolutely perfect. Fast delivery and great customer service.',
      verified: true,
    },
    {
      id: 2,
      name: 'Mike Chen',
      rating: 5,
      date: '2024-01-12',
      comment:
        'Best pizza in town! The crust is crispy and the toppings are fresh. Highly recommend the Pepperoni.',
      verified: true,
    },
    {
      id: 3,
      name: 'Emily Davis',
      rating: 4,
      date: '2024-01-10',
      comment:
        'Great variety of pizzas. The Quattro Stagioni was delicious. Only minor issue was delivery time.',
      verified: true,
    },
    {
      id: 4,
      name: 'David Wilson',
      rating: 5,
      date: '2024-01-08',
      comment:
        'Exceptional quality! The ingredients taste fresh and authentic. Will definitely order again.',
      verified: true,
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      rating: 5,
      date: '2024-01-05',
      comment:
        'Outstanding service and delicious pizza. The Prosciutto e Funghi exceeded my expectations!',
      verified: true,
    },
    {
      id: 6,
      name: 'Tom Anderson',
      rating: 4,
      date: '2024-01-03',
      comment:
        'Good pizza with authentic Italian taste. The delivery was quick and the pizza arrived hot.',
      verified: true,
    },
  ],
  isLoading: false,
  isSubmitting: false,
  error: null,
  showForm: false,
  newReview: {
    name: '',
    rating: 5,
    comment: '',
  },
  stats: {
    averageRating: 0,
    totalReviews: 0,
    satisfactionRate: 98,
  },
};

// Async thunks
export const submitReview = createAsyncThunk(
  'reviews/submitReview',
  async (reviewData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newReview = {
      id: Date.now(),
      ...reviewData,
      date: new Date().toISOString().split('T')[0],
      verified: false,
    };

    return newReview;
  }
);

export const loadMoreReviews = createAsyncThunk(
  'reviews/loadMore',
  async () => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [];
  }
);

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    toggleForm: (state) => {
      state.showForm = !state.showForm;
      if (!state.showForm) {
        state.newReview = { name: '', rating: 5, comment: '' };
      }
    },
    updateNewReview: (state, action) => {
      state.newReview = { ...state.newReview, ...action.payload };
    },
    calculateStats: (state) => {
      const totalReviews = state.reviews.length;
      const averageRating =
        totalReviews > 0
          ? state.reviews.reduce((sum, review) => sum + review.rating, 0) /
            totalReviews
          : 0;

      state.stats = {
        ...state.stats,
        averageRating,
        totalReviews,
      };
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitReview.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(submitReview.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.reviews.unshift(action.payload);
        state.showForm = false;
        state.newReview = { name: '', rating: 5, comment: '' };
      })
      .addCase(submitReview.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.error.message || 'Failed to submit review';
      })
      .addCase(loadMoreReviews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadMoreReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews.push(...action.payload);
      })
      .addCase(loadMoreReviews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to load more reviews';
      });
  },
});

export const { toggleForm, updateNewReview, calculateStats, clearError } =
  reviewsSlice.actions;
export default reviewsSlice.reducer;
