import { memo } from 'react';

const LordIcon = memo(({ 
  src, 
  trigger = 'hover', 
  delay, 
  colors = 'primary:#10b981,secondary:#065f46',
  size = { width: '48px', height: '48px' },
  style = {},
  className = ''
}) => {
  const iconStyle = {
    width: size.width,
    height: size.height,
    margin: style.margin || '0 auto 16px',
    ...style
  };

  return (
    <lord-icon
      src={src}
      trigger={trigger}
      delay={delay}
      colors={colors}
      style={iconStyle}
      className={className}
    />
  );
});

LordIcon.displayName = 'LordIcon';

export default LordIcon;
