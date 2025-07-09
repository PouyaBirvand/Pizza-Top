import React from 'react';

const StarRating = ({
  rating,
  maxStars = 5,
  size = 'md',
  readonly = true,
  onChange,
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const handleStarClick = (starRating) => {
    if (!readonly && onChange) {
      onChange(starRating);
    }
  };

  return (
    <div className='flex'>
      {Array.from({ length: maxStars }, (_, i) => (
        <span
          key={i}
          className={`${sizeClasses[size]} ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          } ${!readonly ? 'cursor-pointer hover:text-yellow-300' : ''}`}
          onClick={() => handleStarClick(i + 1)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
