interface PlusIconProps {
 size?: number; // 아이콘 크기
 color?: string; // 아이콘 색상
 strokeWidth?: number; // 선 두께
 className?: string; // 추가적인 Tailwind 스타일
}

const PlusIcon: React.FC<PlusIconProps> = ({
 size = 24,
 color = "currentColor",
 strokeWidth = 2,
 className,
}) => {
 return (
  <svg
   width={size}
   height={size}
   viewBox="0 0 56 56"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   className={`inline-block ${className}`}>
   {/* + 아이콘을 path로 구현 */}
   <path
    d="M28 12 V44 M12 28 H44" // 수직선과 수평선을 한 번에 그리기
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
   />
  </svg>
 );
};

export default PlusIcon;