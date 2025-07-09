import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for form submission
export const submitContactForm = createAsyncThunk(
  'contact/submitForm',
  async (formData, { rejectWithValue }) => {
    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would make actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  formData: {
    name: '',
    email: '',
    subject: '',
    message: ''
  },
  isSubmitting: false,
  submitted: false,
  error: null,
  successMessage: null
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.submitted = false;
      state.error = null;
      state.successMessage = null;
    },
    clearSubmissionStatus: (state) => {
      state.submitted = false;
      state.successMessage = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isSubmitting = true;
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.isSubmitting = false;
        state.submitted = true;
        state.successMessage = action.payload.message;
        state.formData = initialState.formData;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isSubmitting = false;
        state.error = action.payload;
      });
  }
});

export const { updateFormField, resetForm, clearSubmissionStatus } = contactSlice.actions;
export default contactSlice.reducer;
