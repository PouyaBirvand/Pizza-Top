import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { 
  submitContactForm, 
  updateFormField, 
  resetForm, 
  clearSubmissionStatus 
} from '../contactSlice';

export const useContactForm = () => {
  const dispatch = useDispatch();
  const contactState = useSelector((state) => state.contact);

  const handleFieldChange = useCallback((name, value) => {
    dispatch(updateFormField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback((formData) => {
    return dispatch(submitContactForm(formData));
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch(resetForm());
  }, [dispatch]);

  const clearStatus = useCallback(() => {
    dispatch(clearSubmissionStatus());
  }, [dispatch]);

  return {
    ...contactState,
    handleFieldChange,
    handleSubmit,
    handleReset,
    clearStatus
  };
};
