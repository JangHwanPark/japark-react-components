import { forwardRef, ReactElement, useState } from 'react';
import clsx from 'clsx';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning';
  id?: string;
  icon?: ReactElement | null;
  checkedIcon?: ReactElement | null;
  onChange?: (checked: boolean) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked = false,
      defaultChecked = false,
      indeterminate = false,
      disabled = false,
      size = 'md',
      color = 'primary',
      id = `checkbox-${Math.random().toString(36).substr(2, 9)}`,
      onChange,
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = checked ?? internalChecked;
    console.log(internalChecked);

    const handleToggle = () => {
      if (disabled) return;
      const newChecked = !isChecked;
      onChange?.(newChecked);
      if (!isControlled) setInternalChecked(newChecked);
    };

    const classes = clsx(
      'border rounded flex items-center justify-center transition-all duration-200 cursor-pointer',
      'peer-hover:bg-opacity-70',
      disabled && 'opacity-50 cursor-not-allowed',
      {
        'w-4 h-4': size === 'sm',
        'w-6 h-6': size === 'md',
        'w-8 h-8': size === 'lg',
      },
      {
        'border-gray-400': !checked && !indeterminate,
        'border-primary-500 peer-checked:border-primary-500': color === 'primary',
        'border-secondary-500 peer-checked:border-secondary-500': color === 'secondary',
        'border-green-500 peer-checked:border-green-500': color === 'success',
        'border-red-500 peer-checked:border-red-500': color === 'error',
        'border-yellow-500  peer-checked:border-yellow-500': color === 'warning',
      },
    );

    const checkedClass = clsx({
      'bg-gray-400': !checked && !indeterminate,
      'peer-checked:bg-primary-500': color === 'primary',
      'peer-checked:bg-secondary-500': color === 'secondary',
      'peer-checked:bg-green-500': color === 'success',
      'peer-checked:bg-red-500': color === 'error',
      'peer-checked:bg-yellow-500': color === 'warning',
    });
    return (
      <span className="flex items-center space-x-2">
        {/* 실제 체크박스 (hidden) */}
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleToggle}
          disabled={disabled}
          ref={ref}
          className="hidden peer"
        />

        {/* 체크박스 UI */}
        {isChecked ? (
          <ImCheckboxChecked
            role="checkbox"
            aria-checked={indeterminate ? 'mixed' : isChecked}
            aria-disabled={disabled}
            tabIndex={0}
            className={`${classes} ${checkedClass}`}
          />
        ) : (
          <ImCheckboxUnchecked
            role="checkbox"
            aria-checked={indeterminate ? 'mixed' : isChecked}
            aria-disabled={disabled}
            tabIndex={0}
            className={classes}
          />
        )}
      </span>
    );
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;