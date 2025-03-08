import { forwardRef } from 'react';
import clsx from 'clsx';

interface ToastProps {
  id?: string;
  message: string;
  type?: 'success' | 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
}

const Toast = forwardRef<any, ToastProps>(
  (
    { id = `toast-${Math.random().toString(36).substr(2, 9)}`, message, type = 'success', size },
    ref,
  ) => {
    const toastClass = clsx(
      {
        'bg-green-500': type === 'success',
        'bg-red-500': type === 'error',
        'bg-yellow-500': type === 'warning',
      },
      {
        'text-md': size === 'sm',
        'text-lg': size === 'md',
        'text-xl': size === 'lg',
      },
    );
    return (
      <div id={id} ref={ref} className={toastClass}>
        <span>{message}</span>
      </div>
    );
  },
);

Toast.displayName = 'Toast';
export default Toast;