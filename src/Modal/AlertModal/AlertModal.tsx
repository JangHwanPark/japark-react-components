import { HTMLAttributes } from "react";
import clsx from "clsx";
import { Button } from "../../Inputs";
import { FaInfo } from "react-icons/fa";
import {
 MdCheckCircleOutline,
 MdErrorOutline,
 MdWarningAmber,
} from "react-icons/md";

interface AlertModalProps extends HTMLAttributes<HTMLDivElement> {
 title: string;
 description: string;
 closed?: boolean;
 align?: "left" | "center";
 size?: "sm" | "md" | "lg";
 alert?: "notice" | "success" | "warning" | "error";
}

const AlertModal = ({
 title,
 description,
 size = "md",
 alert = "notice",
 closed = false,
 align = "center",
}: AlertModalProps) => {
 const handleClick = () => {
  console.log("onClick:", alert);
 };

 return (
  <div
   className={clsx(
    "p-8 border bg-background text-text border-gray-200 rounded-lg",
    "flex flex-col justify-center",
    align === "center" && "items-center",
    align === "left" && "items-start",
    {
     "w-[400px]": size === "sm",
     "w-[500px]": size === "md",
     "w-[600px]": size === "lg",
    },
   )}>
   <div
    aria-label={alert}
    className={clsx("flex justify-center items-center gap-2", {
     "text-lg": size === "sm",
     "text-xl": size === "md",
     "text-2xl": size === "lg",
    })}>
    {alert === "notice" && (
     <FaInfo size={20} className="text-primary flex-shrink-0" />
    )}
    {alert === "success" && (
     <MdCheckCircleOutline size={20} className="text-green-400 flex-shrink-0" />
    )}
    {alert === "warning" && (
     <MdWarningAmber size={20} className="text-amber-500 flex-shrink-0" />
    )}
    {alert === "error" && (
     <MdErrorOutline size={20} className="text-red-700 flex-shrink-0" />
    )}
    <span
     id="title"
     className={clsx("font-bold leading-none", {
      "text-lg": size === "sm",
      "text-xl": size === "md",
      "text-2xl": size === "lg",
     })}>
     {title}
    </span>
   </div>
   <p
    aria-labelledby="title"
    className={clsx("mt-5", {
     "text-sm": size === "sm",
     "text-md": size === "md",
     "text-lg": size === "lg",
    })}>
    {description}
   </p>
   <div
    className={clsx(
     "w-full max-w-xl mx-auto mt-5 flex justify-center items-center gap-3",
    )}>
    {closed && (
     <Button className='"w-full h-12"' onClick={handleClick}>
      취소
     </Button>
    )}
    <Button
     className={clsx("w-full h-12", {
      "bg-amber-500": alert === "warning",
      "bg-red-500": alert === "error",
     })}
     onClick={handleClick}>
     확인
    </Button>
   </div>
  </div>
 );
};

export default AlertModal;