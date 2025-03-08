import { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import { FaInfo, FaRegCheckCircle } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';
import { LuMessageCircleWarning } from 'react-icons/lu';

interface ToastProps {
  id?: string;
  message: string;
  icon?: ReactNode;
  type?: 'info' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
}

const Toast = forwardRef<any, ToastProps>(
  (
    {
      id = `toast-${Math.random().toString(36).substr(2, 9)}`,
      message,
      icon,
      type = 'success',
      size = 'md',
    },
    ref,
  ) => {
    const toastClass = clsx(
      'w-full px-6 py-4 flex items-center gap-5 rounded-lg',
      {
        'bg-primary': type === 'info',
        'bg-success': type === 'success',
        'bg-danger': type === 'error',
        'bg-warning': type === 'warning',
      },
      {
        'text-lg': size === 'sm',
        'text-xl': size === 'md',
        'text-2xl': size === 'lg',
      },
    );

    return (
      <div id={id} ref={ref} className={toastClass}>
        {!icon && type === 'info' && <FaInfo />}
        {!icon && type === 'success' && <FaRegCheckCircle />}
        {!icon && type === 'error' && <MdErrorOutline />}
        {!icon && type === 'warning' && <LuMessageCircleWarning />}
        {icon && icon}
        <p className="pb-1">{message}</p>
      </div>
    );
  },
);

Toast.displayName = 'Toast';
export default Toast;