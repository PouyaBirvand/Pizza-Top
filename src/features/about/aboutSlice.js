import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stats: {
    customers: 50000,
    pizzasDelivered: 100000,
    averageRating: 4.9,
    yearsOfExcellence: 3,
  },
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    updateStats: (state, action) => {
      state.stats = { ...state.stats, ...action.payload };
    },
  },
});

export const { updateStats, setLoading, setError } = aboutSlice.actions;

// Selectors
export const selectStats = (state) => state.about.stats;

export default aboutSlice.reducer;
