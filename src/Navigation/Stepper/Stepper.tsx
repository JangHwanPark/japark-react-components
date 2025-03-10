import { ReactNode } from "react";
import { LuDot } from "react-icons/lu";
import clsx from "clsx";
import StepperItem from "./StepperItem";
import StepperLine from "./StepperLine";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface StepperProps {
 data: string[];
 size?: "sm" | "md" | "lg";
 style?: "dot" | "check";
 icon?: ReactNode;
}

const Stepper = ({
 data,
 size = "md",
 style = "dot",
}: StepperProps) => {
 const classes = clsx(
  "px-10 relative flex-1 items-center justify-center",
  {
   "text-md": size === "sm",
   "text-lg": size === "md",
   "text-xl": size === "lg",
  },
 );

 return (
  <ul className="flex justify-center items-center">
   {data.map((item, index) => {
    const isStart = index === 0;

    return (
     <StepperItem
      key={index}
      className={classes}
      text={item}
     >
      {style === "dot" && (
       <LuDot size={30} />
      )}
      {style === "check" && (
       <IoMdCheckmarkCircleOutline
        size={30}
       />
      )}
      {!isStart && <StepperLine />}
     </StepperItem>
    );
   })}
  </ul>
 );
};

export default Stepper;