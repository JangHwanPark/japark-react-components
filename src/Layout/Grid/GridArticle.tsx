import clsx from 'clsx';
import {FC, ReactNode, RefObject} from 'react';

const COL_SPANS: Record<number, string> = {
 1: 'col-span-1',
 2: 'col-span-2',
 3: 'col-span-3',
 4: 'col-span-4',
 5: 'col-span-5',
 6: 'col-span-6',
 7: 'col-span-7',
 8: 'col-span-8',
 9: 'col-span-9',
 10: 'col-span-10',
 11: 'col-span-11',
 12: 'col-span-12',
};

const ROW_SPANS: Record<number, string> = {
 1: 'row-span-1',
 2: 'row-span-2',
 3: 'row-span-3',
 4: 'row-span-4',
 5: 'row-span-5',
 6: 'row-span-6',
 7: 'row-span-7',
 8: 'row-span-8',
 9: 'row-span-9',
 10: 'row-span-10',
 11: 'row-span-11',
 12: 'row-span-12',
};

const COL_STARTS: Record<number, string> = {
 1: 'col-start-1',
 2: 'col-start-2',
 3: 'col-start-3',
 4: 'col-start-4',
 5: 'col-start-5',
 6: 'col-start-6',
 7: 'col-start-7',
 8: 'col-start-8',
 9: 'col-start-9',
 10: 'col-start-10',
 11: 'col-start-11',
 12: 'col-start-12',
};

const COL_ENDS: Record<number, string> = {
 2: 'col-end-2',
 3: 'col-end-3',
 4: 'col-end-4',
 5: 'col-end-5',
 6: 'col-end-6',
 7: 'col-end-7',
 8: 'col-end-8',
 9: 'col-end-9',
 10: 'col-end-10',
 11: 'col-end-11',
 12: 'col-end-12',
 13: 'col-end-13',
 14: 'col-end-14',
};

const ROW_STARTS: Record<number, string> = {
 1: 'row-start-1',
 2: 'row-start-2',
 3: 'row-start-3',
 4: 'row-start-4',
 5: 'row-start-5',
 6: 'row-start-6',
 7: 'row-start-7',
 8: 'row-start-8',
 9: 'row-start-9',
 10: 'row-start-10',
 11: 'row-start-11',
 12: 'row-start-12',
};

const ROW_ENDS: Record<number, string> = {
 2: 'row-end-2',
 3: 'row-end-3',
 4: 'row-end-4',
 5: 'row-end-5',
 6: 'row-end-6',
 7: 'row-end-7',
 8: 'row-end-8',
 9: 'row-end-9',
 10: 'row-end-10',
 11: 'row-end-11',
 12: 'row-end-12',
 13: 'row-end-13',
 14: 'row-end-14',
};

const GAP_SIZES: Record<number, string> = {
 0: 'gap-0',
 1: 'gap-1',
 2: 'gap-2',
 3: 'gap-3',
 4: 'gap-4',
 5: 'gap-5',
 6: 'gap-6',
 8: 'gap-8',
 10: 'gap-10',
 12: 'gap-12',
 16: 'gap-16',
};

const ORDER_SIZES: Record<number, string> = {
 1: 'order-1',
 2: 'order-2',
 3: 'order-3',
 4: 'order-4',
 5: 'order-5',
 6: 'order-6',
 7: 'order-7',
 8: 'order-8',
 9: 'order-9',
 10: 'order-10',
 11: 'order-11',
 12: 'order-12',
};

const PLACE_SELF_OPTIONS: Record<string, string> = {
 start: 'place-self-start',
 center: 'place-self-center',
 end: 'place-self-end',
 stretch: 'place-self-stretch',
};

interface GridArticleProps {
 children: ReactNode;
 ref?: RefObject<HTMLElement | null> | RefObject<(HTMLElement | null)[]>;
 colSpan?: number;
 rowSpan?: number;
 colStart?: number;
 colEnd?: number;
 rowStart?: number;
 rowEnd?: number;
 gap?: number;
 order?: number;
 placeSelf?: keyof typeof PLACE_SELF_OPTIONS;
 className?: string;
}

const GridArticle: FC<GridArticleProps> = ({
 children,
 ref,
 colSpan = 12,
 rowSpan = 1,
 colStart,
 colEnd,
 rowStart,
 rowEnd,
 gap,
 order,
 placeSelf,
 className,
}) => {
 return (
  <div
   ref={(el) => {
    if (ref && 'current' in ref && !Array.isArray(ref.current)) {
     ref.current = el;
    }

    if ((ref && 'current' in ref && Array.isArray(ref.current) && el)) {
     ref.current.push(el);
    }
   }}
   className={clsx(
    COL_SPANS[colSpan] || 'col-span-12',
    ROW_SPANS[rowSpan] || 'row-span-1',
    colStart && COL_STARTS[colStart],
    colEnd && COL_ENDS[colEnd],
    rowStart && ROW_STARTS[rowStart],
    rowEnd && ROW_ENDS[rowEnd],
    gap && GAP_SIZES[gap],
    order && ORDER_SIZES[order],
    placeSelf && PLACE_SELF_OPTIONS[placeSelf],
    className
   )}>
   {children}
  </div>
 );
};

export default GridArticle;