import { TabProps } from '../../types/tabs';
import { useTabs } from '../../providers/TabProvider';
import clsx from 'clsx';

/**
 * `Tab` 컴포넌트는 개별적인 탭 버튼을 렌더링합니다.
 *
 * @description
 * 현재 활성화된 탭을 감지하고, 클릭 시 `handleTabChange`를 호출하여 상태를 변경합니다.
 *
 * @example
 * ```tsx
 * <Tab tabKey="home" className="custom-tab">홈</Tab>
 * ```
 */
const Tab = ({ tabKey, className, children }: TabProps) => {
  const { active, handleTabChange } = useTabs();
  const isActive = active === tabKey;
  const classes = clsx(className, 'w-full pb-2', isActive && 'border-b-2 border-blue-500');

  return (
    <li className={classes}>
      <button
        role="tab"
        className="w-full h-full cursor-pointer"
        aria-selected={isActive}
        aria-controls={`panel-${tabKey}`}
        onClick={() => handleTabChange(tabKey)}>
        {children}
      </button>
    </li>
  );
};

export default Tab;
