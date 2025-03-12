import { ReactNode } from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5"; // 닫기 아이콘 추가

interface TagProps {
 children: ReactNode;
 theme?: keyof typeof themes;
 size?: "sm" | "md" | "lg";
 variant?: "filled" | "outlined";
 closable?: boolean;
 onClose?: () => void;
 className?: string;
}

const themes = {
 primary: "bg-blue-500 text-white border-blue-500",
 secondary: "bg-gray-600 text-white border-gray-600",
 success: "bg-green-500 text-white border-green-500",
 warning: "bg-yellow-500 text-black border-yellow-500",
 error: "bg-red-500 text-white border-red-500",
 light: "bg-gray-200 text-black border-gray-300",
 dark: "bg-gray-900 text-white border-gray-900",
};

const Tag = ({
 children,
 theme = "primary",
 size = "md",
 variant = "filled",
 closable = false,
 onClose,
 className,
}: TagProps) => {
 return (
  <div
   className={clsx(
    "inline-flex items-center rounded-full font-medium transition",
    {
     "px-2 py-1 text-xs": size === "sm",
     "px-3 py-1 text-sm": size === "md",
     "px-4 py-2 text-base": size === "lg",
    },
    variant === "filled"
     ? themes[theme]
     : `border ${themes[theme]} bg-transparent`,
    className,
   )}>
   {children}
   {closable && (
    <button
     onClick={onClose}
     className="ml-2 text-white hover:text-gray-300 transition"
     aria-label="Remove tag">
     <IoClose size={12} />
    </button>
   )}
  </div>
 );
};

export default Tag;