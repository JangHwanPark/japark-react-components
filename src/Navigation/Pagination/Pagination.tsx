import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { GrCaretNext, GrCaretPrevious, GrChapterNext, GrChapterPrevious } from 'react-icons/gr';

interface PaginationProps {
  count: number;
  defaultPage?: number;
  color?: 'primary' | 'secondary' | 'gray' | 'black' | 'custom';
  disabled?: boolean;
  hidden?: boolean;

  siblingCount?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  showPrevNext?: boolean;

  className?: string;
  itemClass?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: 'text' | 'contained' | 'outlined';
}

const Pagination = ({
  count,
  defaultPage = 1,
  color = 'primary',
  disabled = false,
  hidden = false,
  siblingCount = 1,
  showFirstButton = true,
  showLastButton = true,
  showPrevNext = true,
  className,
  itemClass,
  size = 'md',
  style = 'contained',
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [isHidden, setIsHidden] = useState(hidden);

  useEffect(() => {
    setIsHidden(hidden);
  }, [hidden]);

  const handleChange = (newPage: number) => {
    if (newPage < 1 || newPage > count || disabled) return;
    setCurrentPage(newPage);
  };

  const wrapClass = clsx(
    className,
    'inline-flex items-center justify-center space-x-2',
    disabled && 'opacity-50 pointer-events-none',
    isHidden && 'hidden',
  );

  const listClass = clsx(
    itemClass,
    style,
    'cursor-pointer min-w-[32px] h-[32px] flex items-center justify-center rounded-md',
    {
      'text-sm': size === 'sm',
      'text-md': size === 'md',
      'text-lg': size === 'lg',
      'text-primary text-blue-500 hover:bg-blue-700 hover:text-white': color === 'primary',
      'text-secondary text-purple-500 hover:bg-purple-700 hover:text-white': color === 'secondary',
      'text-gray-500 hover:bg-gray-700 hover:text-white': color === 'gray',
      'text-black hover:bg-black hover:text-white': color === 'black',
    },
  );

  const getPaginationRange = () => {
    const totalPages = count;
    const pages: (number | '...')[] = [];
    if (totalPages <= 7) {
      const cnt = Array.from({ length: totalPages }, (_, i) => i + 1);
      console.log('cnt : ', cnt);
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 6);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);

    const shouldShowLeftDots = leftSiblingIndex > 6;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    console.log(`leftSiblingIndex : ${leftSiblingIndex}`);
    console.log(`rightSiblingIndex : ${rightSiblingIndex}`);
    console.log(`shouldShowLeftDots : ${shouldShowLeftDots}`);
    console.log(`shouldShowRightDots : ${shouldShowRightDots}`);

    // 초기값 1 ~ 5 까지 출력
    for (let i = 1; i <= 5; i++) {
      pages.push(i);
    }

    if (shouldShowLeftDots) {
      pages.push('...');
    }

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      pages.shift();
      console.log(`leftSiblingIndex; i <= rightSiblingIndex Before: ${i}`);
      pages.push(i);
      console.log(`leftSiblingIndex; i <= rightSiblingIndex After: ${i}`);
    }

    if (shouldShowRightDots) {
      pages.push('...');
    }

    // 마지막 페이지값 출력
    // pages.push(totalPages - 1);
    pages.push(totalPages);
    return pages;
  };

  const paginationRange = getPaginationRange();
  console.log('paginationRange', paginationRange);
  return (
    <ul className={wrapClass}>
      {showFirstButton && (
        <li className={listClass} onClick={() => handleChange(1)}>
          <GrChapterPrevious />
        </li>
      )}
      {showPrevNext && (
        <li className={listClass} onClick={() => handleChange(currentPage - 1)}>
          <GrCaretPrevious />
        </li>
      )}
      {paginationRange.map((page, index) => (
        <li
          key={index}
          className={clsx(
            listClass,
            page === currentPage && 'active pointer-events-none opacity-50',
          )}
          onClick={() => typeof page === 'number' && handleChange(page)}>
          {page}
        </li>
      ))}
      {showPrevNext && (
        <li className={listClass} onClick={() => handleChange(currentPage + 1)}>
          <GrCaretNext />
        </li>
      )}
      {showLastButton && (
        <li className={listClass} onClick={() => handleChange(count)}>
          <GrChapterNext />
        </li>
      )}
    </ul>
  );
};

export default Pagination;