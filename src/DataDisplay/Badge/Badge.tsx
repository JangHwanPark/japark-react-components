import clsx from "clsx";

interface BadgeProps {
 count: number;
 hideWhenZero?: boolean;
 className?: string;
}

const Badge = ({ count, hideWhenZero = false, className }: BadgeProps) => {
 if (hideWhenZero && count === 0) return null; // count가 0일 때 숨김
 return (
  <div className={clsx("w-fit relative", className)}>
   <div className="w-14 h-14 bg-white"></div>
   <div className="absolute -top-5 -right-5 w-10 h-10 bg-danger rounded-full flex items-center justify-center text-white font-bold">
    {count}
   </div>
  </div>
 );
};

export default Badge;