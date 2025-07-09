export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

export const getInitials = (name) => {
  return name.charAt(0).toUpperCase();
};

export const validateReviewForm = (review)  => {
  const errors= [];
  
  if (!review.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!review.comment.trim()) {
    errors.push('Comment is required');
  }
  
  if (review.comment.length < 10) {
    errors.push('Comment must be at least 10 characters long');
  }
  
  return errors;
};
