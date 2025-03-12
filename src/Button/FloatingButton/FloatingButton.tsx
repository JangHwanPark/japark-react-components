import { ReactNode } from "react";
import Plus from "../../Icons/Plus/Plus";
import clsx from "clsx";

interface FloatingButtonProps {
 onClick?: () => void;
 size?: number;
 theme?: keyof typeof themes;
 className?: string;
 children?: ReactNode;
}

const themes = {
 primary: "bg-blue-500 hover:bg-blue-600 text-white shadow-lg",
 secondary: "bg-gray-700 hover:bg-gray-800 text-white shadow-lg",
 success: "bg-green-500 hover:bg-green-600 text-white shadow-lg",
 danger: "bg-red-500 hover:bg-red-600 text-white shadow-lg",
 warning: "bg-yellow-500 hover:bg-yellow-600 text-black shadow-lg",
 light: "bg-white hover:bg-gray-100 text-black shadow-md",
 dark: "bg-gray-900 hover:bg-black text-white shadow-md",
};

const FloatingButton: React.FC<FloatingButtonProps> = ({
 onClick,
 size = 24,
 theme = "primary",
 className,
 children,
}) => {
 return (
  <button
   className={clsx(
    "fixed bottom-10 right-10 cursor-pointer",
    "flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out",
    themes[theme],
    className,
   )}
   onClick={onClick}
   style={{ width: size, height: size }}>
   {children ? children : <Plus size={size * 0.5} color="currentColor" />}
  </button>
 );
};

export default FloatingButton;