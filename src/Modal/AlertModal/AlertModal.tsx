import { ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import { FaInfo } from "react-icons/fa";
import {
 MdCheckCircleOutline,
 MdErrorOutline,
 MdWarningAmber,
} from "react-icons/md";
import { Button } from "../../Button";

interface AlertModalProps extends HTMLAttributes<HTMLDivElement> {
 title: string;
 close: () => void;
 children: ReactNode;
 overlay?: boolean;
 align?: "left" | "center";
 size?: "sm" | "md" | "lg";
 alert?: "notice" | "success" | "warning" | "error";
}

const AlertModal = ({
 title,
 close,
 children,
 overlay = false,
 size = "md",
 alert = "notice",
 align = "center",
}: AlertModalProps) => {
 return (
  <div
   className={clsx(
    overlay &&
     "fixed bg-black/80 inset-0 flex items-center justify-center z-50",
   )}>
   <div
    className={clsx(
     "fixed top-1/2 -translate-1/2 left-1/2 p-8 border bg-background text-text border-gray-200 rounded-lg",
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
      <MdCheckCircleOutline
       size={20}
       className="text-green-400 flex-shrink-0"
      />
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
     {children}
    </p>
    <div
     className={clsx(
      "w-full max-w-xl mx-auto mt-5 flex justify-center items-center gap-3",
     )}>
     <Button
      className={clsx("w-full h-12", {
       "bg-amber-500": alert === "warning",
       "bg-red-500": alert === "error",
      })}
      onClick={close}>
      확인
     </Button>
    </div>
   </div>
  </div>
 );
};

export default AlertModal;