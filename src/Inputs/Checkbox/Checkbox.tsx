import { forwardRef, ReactElement, useEffect, useState } from 'react';
import clsx from 'clsx';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';

interface CheckboxProps {
  checked?: boolean; // ✅ 부모에서 관리하는 상태
  defaultChecked?: boolean; // ✅ 내부에서만 사용하는 초기 상태
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
      checked, // ✅ props로 넘어오는 checked 상태
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
    // ✅ 내부 상태에서 `checked` 값을 관리
    const [internalChecked, setInternalChecked] = useState(checked ?? defaultChecked);

    // ✅ checked prop이 변경될 때 내부 상태를 업데이트
    useEffect(() => {
      if (checked !== undefined) {
        setInternalChecked(checked);
      }
    }, [checked]);

    console.log('현재 internalChecked 상태:', internalChecked);

    const handleToggle = () => {
      if (disabled) return;
      console.log('토글됨');

      // 새로운 체크 상태
      const newChecked = !internalChecked;
      console.log('새로운 checked 값:', newChecked);

      // ✅ 내부 상태 업데이트
      setInternalChecked(newChecked);

      // ✅ 부모에게 상태 변경 전달
      onChange?.(newChecked);
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
        'border-gray-400': !internalChecked && !indeterminate,
        'border-primary-500 peer-checked:border-primary-500': color === 'primary',
        'border-secondary-500 peer-checked:border-secondary-500': color === 'secondary',
        'border-green-500 peer-checked:border-green-500': color === 'success',
        'border-red-500 peer-checked:border-red-500': color === 'error',
        'border-yellow-500 peer-checked:border-yellow-500': color === 'warning',
      },
    );

    const checkedClass = clsx({
      'bg-gray-400': !internalChecked && !indeterminate,
      'peer-checked:bg-primary-500': color === 'primary',
      'peer-checked:bg-secondary-500': color === 'secondary',
      'peer-checked:bg-green-500': color === 'success',
      'peer-checked:bg-red-500': color === 'error',
      'peer-checked:bg-yellow-500': color === 'warning',
    });

    return (
      <label htmlFor={id} className="flex items-center space-x-2">
        {/* 실제 체크박스 (hidden) */}
        <input
          type="checkbox"
          id={id}
          checked={internalChecked}
          onChange={handleToggle}
          disabled={disabled}
          ref={el => {
            if (el) el.indeterminate = indeterminate;
            if (typeof ref === 'function') ref(el);
            else if (ref) ref.current = el;
          }}
          className="hidden peer"
        />

        {/* 체크박스 UI */}
        {internalChecked ? (
          <ImCheckboxChecked
            role="checkbox"
            aria-checked={indeterminate ? 'mixed' : internalChecked}
            aria-disabled={disabled}
            tabIndex={0}
            className={`${classes} ${checkedClass}`}
          />
        ) : (
          <ImCheckboxUnchecked
            role="checkbox"
            aria-checked={indeterminate ? 'mixed' : internalChecked}
            aria-disabled={disabled}
            tabIndex={0}
            className={classes}
          />
        )}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;