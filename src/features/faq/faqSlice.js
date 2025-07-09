import { createSlice } from '@reduxjs/toolkit';
import { FAQ_CATEGORIES as categories, FAQ_DATA as faqdata } from './constants/faqConstants';

const initialState = {
  faqs: faqdata,
  categories,
  activeCategory: 'all',
  openItems: [],
  isLoading: false,
  error: null
};

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    toggleFaqItem: (state, action) => {
      const itemId = action.payload;
      const index = state.openItems.indexOf(itemId);
      
      if (index > -1) {
        state.openItems.splice(index, 1);
      } else {
        state.openItems.push(itemId);
      }
    },
    closeAllItems: (state) => {
      state.openItems = [];
    },
    openAllItems: (state) => {
      state.openItems = state.faqs.map(faq => faq.id);
    }
  }
});

export const { 
  setActiveCategory, 
  toggleFaqItem, 
  closeAllItems, 
  openAllItems 
} = faqSlice.actions;

// Selectors
export const selectFaqs = (state) => state.faq.faqs;
export const selectCategories = (state) => state.faq.categories;
export const selectActiveCategory = (state) => state.faq.activeCategory;
export const selectOpenItems = (state) => state.faq.openItems;
export const selectFilteredFaqs = (state) => {
  const { faqs, activeCategory } = state.faq;
  return activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);
};
export const selectIsItemOpen = (state, itemId) => 
  state.faq.openItems.includes(itemId);

export default faqSlice.reducer;
