import { memo } from 'react';

const Icon = memo(({ 
  src, 
  trigger = 'hover', 
  colors = 'primary:#10b981,secondary:#065f46',
  style = {},
  delay,
  ...props 
}) => {
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
});

Icon.displayName = 'Icon';

export default Icon;
