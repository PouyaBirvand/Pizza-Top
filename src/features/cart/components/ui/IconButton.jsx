import { memo } from 'react';
import Icon from './LordIcon';
import Button from '../../../../ui/Button';

const IconButton = memo(({ 
  icon, 
  iconProps = {}, 
  children, 
  ...buttonProps 
}) => {
  return (
    <Button {...buttonProps}>
      {icon && (
        <Icon
          style={{ width: '20px', height: '20px', marginRight: '8px' }}
          {...iconProps}
        />
      )}
      {children}
    </Button>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
