import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { 
  setTheme, 
  toggleTheme, 
  initializeTheme,
  selectCurrentTheme,
  selectIsDarkMode 
} from '../themeSlice';

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectCurrentTheme);
  const isDarkMode = useSelector(selectIsDarkMode);

  // Initialize theme on mount
  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  return {
    theme,
    isDarkMode,
    setTheme: (newTheme) => dispatch(setTheme(newTheme)),
    toggleTheme: () => dispatch(toggleTheme()),
  };
};
