import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';
import themeReducer from './features/theme/themeSlice';
import aboutReducer from './features/about/aboutSlice';
import contactReducer from './features/contact/contactSlice';
import faqReducer from './features/faq/faqSlice';
import reviewsReducer from './features/reviews/reviewSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    theme: themeReducer,
    about: aboutReducer,
    contact: contactReducer,
    faq: faqReducer,
    reviews: reviewsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'theme/setTheme',
          'theme/toggleTheme',
          'theme/initializeTheme',
          'contact/submitContactForm/pending',
          'contact/submitContactForm/fulfilled',
          'contact/submitContactForm/rejected',
          'faq/setActiveCategory',
          'faq/toggleFaqItem',
          'reviews/submitReview/pending',
          'reviews/submitReview/fulfilled',
          'reviews/submitReview/rejected',
          'reviews/loadMoreReviews/pending',
          'reviews/loadMoreReviews/fulfilled',
          'reviews/loadMoreReviews/rejected',
          'reviews/toggleForm',
          'reviews/updateNewReview',
          'reviews/calculateStats',
        ],
      },
    }),
});

export default store;
