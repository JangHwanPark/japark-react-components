import { forwardRef, ReactNode } from "react";
import clsx from "clsx";
import { FaInfo, FaRegCheckCircle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoClose, IoWarningOutline } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface ToastProps {
 id?: string;
 message: string;
 icon?: ReactNode;
 type?: "info" | "success" | "error" | "warning";
 size?: "sm" | "md" | "lg";
 duration?: number;
 onClose?: () => void;
}

const Toast = forwardRef<any, ToastProps>(
 (
  {
   id = `toast-${Math.random().toString(36).substr(2, 9)}`,
   message,
   icon,
   type = "success",
   size = "md",
   onClose,
   duration,
  },
  ref,
 ) => {
  useGSAP(() => {
   if (!duration) return;
   const tl = gsap.timeline();
   tl.to(`#${id}`, {
    opacity: 0,
    y: -50,
    duration: duration,
    // delay: duration,
    onComplete: () => {
     if (onClose) onClose();
    },
   });
  }, [id, duration, onClose]);

  const toastClass = clsx(
   "relative w-full px-6 py-4 flex items-center gap-5 rounded-lg bg-white shadow-md border",
   {
    "border-primary": type === "info",
    "border-success": type === "success",
    "border-danger": type === "error",
    "border-warning": type === "warning",
   },
   {
    "text-lg": size === "sm",
    "text-xl": size === "md",
    "text-2xl": size === "lg",
   },
  );

  const toastText = clsx({
   "mb-1": size === "sm" || "md",
   "mb-2": size === "lg",
  });

  const iconColor = clsx({
   "text-primary": type === "info",
   "text-green-500": type === "success",
   "text-red-500": type === "error",
   "text-yellow-500": type === "warning",
  });

  const iconSize = size === "sm" ? 16 : size === "md" ? 20 : 24;

  return (
   <div
    id={id}
    ref={ref}
    className={toastClass}
    role="alert"
    aria-live="assertive">
    {/* 아이콘 */}
    {!icon && type === "info" && (
     <FaInfo size={iconSize} aria-hidden="true" className={iconColor} />
    )}
    {!icon && type === "success" && (
     <FaRegCheckCircle
      size={iconSize}
      aria-hidden="true"
      className={iconColor}
     />
    )}
    {!icon && type === "error" && (
     <MdErrorOutline size={iconSize} aria-hidden="true" className={iconColor} />
    )}
    {!icon && type === "warning" && (
     <IoWarningOutline
      size={iconSize}
      aria-hidden="true"
      className={iconColor}
     />
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

Toast.displayName = "Toast";
export default Toast;