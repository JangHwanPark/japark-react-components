import { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import { FaInfo, FaRegCheckCircle } from 'react-icons/fa';
import { MdErrorOutline } from 'react-icons/md';
import { LuMessageCircleWarning } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';

interface ToastProps {
  id?: string;
  message: string;
  icon?: ReactNode;
  type?: 'info' | 'success' | 'error' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  onClose?: () => void;
}

const Toast = forwardRef<any, ToastProps>(
  (
    {
      id = `toast-${Math.random().toString(36).substr(2, 9)}`,
      message,
      icon,
      type = 'success',
      size = 'md',
      onClose,
    },
    ref,
  ) => {
    const toastClass = clsx(
      'relative w-full px-6 py-4 flex items-center gap-5 rounded-lg',
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

    const toastText = clsx({
      'mb-1': size === 'sm' || 'md',
      'mb-2': size === 'lg',
    });

    const iconSize = size === 'sm' ? 16 : size === 'md' ? 20 : 24;

    return (
      <div id={id} ref={ref} className={toastClass} role="alert" aria-live="assertive">
        {/* 아이콘 */}
        {!icon && type === 'info' && <FaInfo size={iconSize} aria-hidden="true" />}
        {!icon && type === 'success' && <FaRegCheckCircle size={iconSize} aria-hidden="true" />}
        {!icon && type === 'error' && <MdErrorOutline size={iconSize} aria-hidden="true" />}
        {!icon && type === 'warning' && (
          <LuMessageCircleWarning size={iconSize} aria-hidden="true" />
        )}
        {icon && icon}

        {/* 토스트 메세지 */}
        <p className={toastText}>{message}</p>

        {/* 닫기 버튼 (선택적) */}
        {onClose && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition"
            onClick={onClose}
            aria-label="닫기">
            <IoClose size={20} />
          </button>
        )}
      </div>
    );
  },
);

Toast.displayName = 'Toast';
export default Toast;