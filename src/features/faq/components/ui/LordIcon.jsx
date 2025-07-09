import React from 'react';

export const LordIcon = ({ src, trigger, colors, style, delay, ...props }) => {
  return (
    <lord-icon
      src={src}
      trigger={trigger}
      colors={colors}
      style={style}
      delay={delay}
      {...props}
    />
  );
};
