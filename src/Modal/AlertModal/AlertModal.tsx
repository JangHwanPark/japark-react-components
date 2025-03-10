import {
 useState,
 HTMLAttributes,
} from "react";
import clsx from "clsx";
import { Button } from "../../Inputs";

interface AlertModalProps
 extends HTMLAttributes<HTMLDivElement> {
 title: string;
 description: string;
 size?: "sm" | "md" | "lg";
 alert?:
  | "info"
  | "success"
  | "warning"
  | "error";
}

const AlertModal = ({
 title,
 description,
 size = "md",
 alert = "info",
}: AlertModalProps) => {
 const [clicked, setClicked] =
  useState(false);

 const handleSuccess = () => {
  setClicked(true);
  console.log("Success", clicked);
 };

 const handleClose = () => {
  setClicked(false);
  console.log("Close", clicked);
 };

 return (
  <div
   className={clsx(
    "p-8 border border-gray-200 rounded-lg",
    "flex flex-col items-center justify-center",
    {
     "w-[400px]": size === "sm",
     "w-[500px]": size === "md",
     "w-[600px]": size === "lg",
    },
   )}>
   <div
    aria-label={alert}
    className={clsx({
     "text-lg": size === "sm",
     "text-xl": size === "md",
     "text-2xl": size === "lg",
    })}>
    경고!
   </div>
   <div
    id="title"
    className={clsx("font-bold", {
     "text-xl mt-3": size === "sm",
     "text-2xl mt-4": size === "md",
     "text-3xl mt-5": size === "lg",
    })}>
    {title}
   </div>
   <p
    aria-labelledby="title"
    className={clsx("mt-2", {
     "text-sm": size === "sm",
     "text-md": size === "md",
     "text-lg": size === "lg",
    })}>
    {description}
   </p>
   <div
    className={clsx(
     "w-full max-w-xs mx-auto mt-5 flex justify-center items-center gap-3",
    )}>
    <Button
     style="disabled"
     className="w-full h-12"
     onClick={handleClose}>
     취소
    </Button>
    <Button
     className="w-full h-12"
     onClick={handleSuccess}>
     확인
    </Button>
   </div>
  </div>
 );
};

export default AlertModal;