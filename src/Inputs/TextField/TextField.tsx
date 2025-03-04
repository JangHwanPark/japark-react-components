import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { useId } from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      error = false,
      fullWidth = false,
      variant = 'outlined',
      id,
      className,
      ...props
    },
    ref,
  ) => {
    const autoId = useId();
    const inputId = id || autoId;
    const helperTextId = helperText ? `${inputId}-helper-text` : undefined;

    const inputClasses = clsx('px-3 py-2 w-full border rounded-md focus:outline-none transition', {
      'border-gray-300 focus:ring-2 focus:ring-blue-500': variant === 'outlined',
      'bg-gray-100 border-none focus:ring-2 focus:ring-blue-500': variant === 'filled',
      'border-b border-gray-300 focus:border-blue-500': variant === 'standard',
      'border-red-500 focus:ring-red-500': error,
    });

    return (
      <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={clsx(inputClasses, className)}
          aria-labelledby={label ? inputId : undefined}
          aria-describedby={helperTextId}
          aria-invalid={error ? 'true' : undefined}
          {...props}
        />
        {helperText && (
          <p
            id={helperTextId}
            className={clsx('text-xs', error ? 'text-red-500' : 'text-gray-500')}>
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
