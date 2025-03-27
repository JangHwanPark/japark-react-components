import { RefObject } from "react";

interface ProgressBarProps {
 ref: RefObject<HTMLDivElement | null>;
 className?: string;
}

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full bg-gray-300 rounded-full h-4">
      <div
        className={`bg-blue-500 h-4 rounded-full transition-all duration-300`}
        style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;