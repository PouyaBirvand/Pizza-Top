import { useSelector, useDispatch } from 'react-redux';
import {
  selectFaqs,
  selectCategories,
  selectActiveCategory,
  selectOpenItems,
  selectFilteredFaqs,
  selectIsItemOpen,
  setActiveCategory,
  toggleFaqItem,
  closeAllItems,
  openAllItems,
} from '../faqSlice';

export const useFAQ = () => {
  const dispatch = useDispatch();

  const faqs = useSelector(selectFaqs);
  const categories = useSelector(selectCategories);
  const activeCategory = useSelector(selectActiveCategory);
  const openItems = useSelector(selectOpenItems);
  const filteredFaqs = useSelector(selectFilteredFaqs);

  const actions = {
    setActiveCategory: (categoryId) => dispatch(setActiveCategory(categoryId)),
    toggleFaqItem: (itemId) => dispatch(toggleFaqItem(itemId)),
    closeAllItems: () => dispatch(closeAllItems()),
    openAllItems: () => dispatch(openAllItems()),
    isItemOpen: (itemId) => openItems.includes(itemId),
  };

  return {
    faqs,
    categories,
    activeCategory,
    openItems,
    filteredFaqs,
    ...actions,
  };
};

export const useFAQItem = (itemId) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => selectIsItemOpen(state, itemId));

  const toggle = () => dispatch(toggleFaqItem(itemId));

  return { isOpen, toggle };
};
