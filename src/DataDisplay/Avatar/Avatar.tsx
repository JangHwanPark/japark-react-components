import clsx from 'clsx';

const Avatar = ({
  size,
  radius,
  types,
  imageUrl,
  text,
  icon,
  backgroundColor = '#ccc',
  textColor = '#fff',
}: AvatarProps) => {
  const avatarClass = clsx(
    `flex items-center justify-center overflow-hidden border-2 border-white`,
    size === 'small' && 'w-16 h-16',
    size === 'medium' && 'w-24 h-24',
    size === 'medium' && 'w-32 h-32',
    radius === 'circle' && 'rounded-full',
    radius === 'square' && 'rounded-2xl',
    types !== 'img' && backgroundColor, // 배경색 적용 (이미지는 배경 X)
    textColor, // 텍스트 색상
  );

  return (
    <div className={avatarClass}>
      {types === 'img' && imageUrl ? (
        <img src={imageUrl} alt="avatar" className="w-full h-full object-cover rounded-inherit" />
      ) : types === 'text' && text ? (
        <span className="font-bold text-lg">{text.slice(0, 2).toUpperCase()}</span>
      ) : types === 'icon' && icon ? (
        icon
      ) : null}
    </div>
  );
};

export default Avatar;