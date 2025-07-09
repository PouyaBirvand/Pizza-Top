import { memo } from 'react';
import Button from '../../../ui/Button';
import Icon from './ui/LordIcon';

const QuantityButton = memo(
  ({ type, onClick, disabled = false, iconSrc, ariaLabel }) => {
    return (
      <Button
        type='round'
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        <Icon
          src={iconSrc}
          colors='primary:#ffffff,secondary:#ffffff'
          style={{ width: '16px', height: '16px' }}
        />
      </Button>
    );
  }
);

QuantityButton.displayName = 'QuantityButton';

export default QuantityButton;
