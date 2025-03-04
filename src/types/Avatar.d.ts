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
  size: 'small' | 'medium' | 'large';
  radius: 'circle' | 'square';
  types: 'text' | 'img' | 'icon';
  imageUrl?: string;
  text?: string;
  icon?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
}