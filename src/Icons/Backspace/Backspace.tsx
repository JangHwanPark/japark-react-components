interface BackspaceIconProps {
 size?: number; // 아이콘 크기
 color?: string; // 아이콘 색상
 strokeWidth?: number; // 선 두께
 className?: string; // 추가적인 Tailwind 스타일
}

const Backspace: React.FC<BackspaceIconProps> = ({
 size = 24,
 color = "currentColor",
 strokeWidth = 2,
 className,
}) => {
 return (
  <svg
   width={size}
   height={size}
   viewBox="0 0 24 24"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   className={`inline-block ${className}`}>
   {/* 백스페이스 키 모양 */}
   <path
    d="M5 12L10 7H21V17H10L5 12Z"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinejoin="round"
   />
   {/* X 아이콘 */}
   <path
    d="M13 10L17 14"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
   />
   <path
    d="M17 10L13 14"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
   />
  </svg>
 );
};

export default Backspace;