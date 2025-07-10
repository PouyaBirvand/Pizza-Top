import { memo } from 'react';
import Icon from './LordIcon';
import Button from '../../../../ui/Button';

const IconButton = memo(
  ({ icon, iconProps = {}, children, ...buttonProps }) => {
    return (
      <Button {...buttonProps}>
        {icon && (
          <Icon
            src={icon}
            style={{ 
              width: '20px', 
              height: '20px', 
              marginRight: children ? '8px' : '0', 
              display: 'inline-block',
              verticalAlign: 'middle'
            }}
            {...iconProps}
          />
        )}
        {children}
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';
export default IconButton;