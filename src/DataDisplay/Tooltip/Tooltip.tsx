import { useState } from 'react';

const Tooltip = ({
  text,
  position = 'top',
  arrow = false,
}: {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  arrow?: boolean;
}) => {
  const [visible, setVisible] = useState(false);

  // 툴팁 위치 클래스
  const positionClasses = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  };

  // 화살표 클래스
  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-800',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-800',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-800',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-800',
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      {/* 버튼 */}
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Hover me</button>

      {/* 툴팁 */}
      {visible && (
        <div
          className={`absolute px-3 py-2 text-sm text-white bg-gray-800 rounded shadow-lg transition-opacity duration-300 ${positionClasses[position]}`}>
          {text}

          {/* 화살표 추가 */}
          {arrow && (
            <div
              className={`absolute w-0 h-0 border-8 border-transparent ${arrowClasses[position]}`}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;