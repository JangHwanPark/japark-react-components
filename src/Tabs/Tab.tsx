import { TabProps } from "../../types/tabs";
import { useTabs } from "../../providers/TabProvider";
import clsx from "clsx";

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
const Tab = ({
  tabKey,
  className,
  children
}: TabProps) => {
  const {active, handleTabChange} = useTabs();
  const isActive = active === tabKey;
  const classes = clsx(
    className, 'relative xs:text-base lg:text-xl transition-all',
    isActive ? 'border-t-2 border-x-2 border-c-yellow font-bold text-white px-8 py-3 lg:px-10 rounded-t-xl' : 'px-0 text-primary bg-c-yellow rounded-2xl mx-3 px-5 py-2 bg-gradient-to-b from-[#F4B400] to-white font-semibold');
  // 바텀 부분 둥글게 작업중
  /*before:content-[""] before:absolute before:bottom-[-1px] before:left-[-36px] before:w-8 before:h-8 before:border-b-2 before:border-r-2 before:border-c-yellow before:rounded-br-xl before:translate-x-1 after:content-[""] after:absolute after:bottom-[-1px] after:right-[-36px] after:w-8 after:h-8 after:border-b-2 after:border-l-2 after:border-c-yellow after:rounded-bl-xl after:-translate-x-1*/

  return (
    <li className={classes}>
      <button
        role="tab"
        className='w-full h-full cursor-pointer'
        aria-selected={isActive}
        aria-controls={`panel-${tabKey}`}
        onClick={() => handleTabChange(tabKey)}>
        {children}
      </button>
    </li>
  );
};

export default Tab;