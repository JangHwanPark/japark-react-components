import { ReactNode } from "react";

const StepperItem = ({
 children,
 className,
 text,
}: {
 children: ReactNode;
 className?: string;
 text: string;
}) => {
 return (
  <li className={className}>
   <div className="flex flex-col items-center">
    {children}
    <span>{text}</span>
   </div>
  </li>
 );
};

export default StepperItem;