import { createSlice } from '@reduxjs/toolkit';

// Theme utilities - Single Responsibility Principle
const ThemeUtils = {
  getInitialTheme() {
    if (typeof window === 'undefined') return 'light';

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  },

  applyThemeToDOM(theme) {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  },

  saveThemeToStorage(theme) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('theme', theme);
  },
};

const initialState = {
  currentTheme: ThemeUtils.getInitialTheme(),
  isSystemPreference: false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      const newTheme = action.payload;
      if (['light', 'dark'].includes(newTheme)) {
        state.currentTheme = newTheme;
        state.isSystemPreference = false;

        // Side effects
        ThemeUtils.applyThemeToDOM(newTheme);
        ThemeUtils.saveThemeToStorage(newTheme);
      }
    },

    toggleTheme: (state) => {
      const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
      state.currentTheme = newTheme;
      state.isSystemPreference = false;

      ThemeUtils.applyThemeToDOM(newTheme);
      ThemeUtils.saveThemeToStorage(newTheme);
    },

    initializeTheme: (state) => {
      const theme = state.currentTheme;
      ThemeUtils.applyThemeToDOM(theme);
    },
  },
});

export const { setTheme, toggleTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;

// Selectors - Interface Segregation Principle
export const selectCurrentTheme = (state) => state.theme.currentTheme;
export const selectIsSystemPreference = (state) =>
  state.theme.isSystemPreference;
export const selectIsDarkMode = (state) => state.theme.currentTheme === 'dark';
