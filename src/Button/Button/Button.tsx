'use client';
import { forwardRef, ReactNode, MouseEvent } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  style?: 'text' | 'contained' | 'outlined' | 'disabled';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  ariaLabel?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      type = 'button',
      size = 'md',
      style = 'primary',
      disabled = false,
      icon,
      onClick,
      ariaLabel,
    },
    ref,
  ) => {
    // 접근성 개성 (아리아 라벨 자동으로 추가)
    const aria = ariaLabel ? ariaLabel : !children && icon ? 'Button with icon' : undefined;

    // 버튼 스타일
    const buttonColor = clsx({
      'bg-primary text-white hover:bg-primary/80': style === 'primary',
      'text-primary hover:text-primary/80': style === 'text',
      'text-primary hover:text-primary/80 border border-primary hover:border-primary/80':
        style === 'outlined',
      'bg-gray-300 text-gray-400 cursor-not-allowed': style === 'disabled',
      // 사용자 정의 스타일 가능
      [style]: !['primary', 'text', 'outlined', 'disabled'].includes(style),
    });

    const buttonSize = clsx({
      'px-3 py-1 text-sm': size === 'sm', // 작은 버튼
      'px-4 py-2 text-base': size === 'md', // 기본 크기
      'px-6 py-3 text-lg': size === 'lg', // 큰 버튼
      'px-8 py-4 text-xl': size === 'xl', // 가장 큰 버튼
    });

    const buttonClass = clsx(
      'cursor-pointer rounded-lg transition disabled:bg-gray-400',
      buttonSize,
      buttonColor,
      className,
    );

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClass}
        onClick={onClick}
        disabled={disabled}
        aria-label={aria}>
        {icon && icon}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;