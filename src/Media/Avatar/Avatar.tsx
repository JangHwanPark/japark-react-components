import clsx from "clsx";
/**
 * size - 아바타 크기
 * radius -  border-radius
 * types - 아바타 타입
 * imageUrl - 이미지 URL (types 가 img 일때 사용)
 * text - 텍스트 (types가 "text"일 때 사용)
 * icon - 아이콘 컴포넌트 (types가 "icon"일 때 사용)
 * backgroundColor - 배경색
 * textColor - 텍스트 색상
 */
interface AvatarProps {
 size: "small" | "medium" | "large";
 radius: "circle" | "square";
 types: "text" | "img" | "icon";
 imageUrl?: string;
 text?: string;
 icon?: React.ReactNode;
 backgroundColor?: string;
 textColor?: string;
}

const Avatar = ({
 size,
 radius,
 types,
 imageUrl,
 text,
 icon,
 backgroundColor = "#ccc",
 textColor = "#fff",
}: AvatarProps) => {
 const avatarClass = clsx(
  `flex items-center justify-center overflow-hidden border-2 border-white`,
  size === "small" && "w-16 h-16",
  size === "medium" && "w-24 h-24",
  size === "medium" && "w-32 h-32",
  radius === "circle" && "rounded-full",
  radius === "square" && "rounded-2xl",
  types !== "img" && backgroundColor, // 배경색 적용 (이미지는 배경 X)
  textColor, // 텍스트 색상
 );

 return (
  <div className={avatarClass}>
   {types === "img" && imageUrl ? (
    <img
     src={imageUrl}
     alt="avatar"
     className="w-full h-full object-cover rounded-inherit"
    />
   ) : types === "text" && text ? (
    <span className="font-bold text-lg">
     {text.slice(0, 2).toUpperCase()}
    </span>
   ) : types === "icon" && icon ? (
    icon
   ) : null}
  </div>
 );
};

export default Avatar;