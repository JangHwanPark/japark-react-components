import { ReactNode } from "react";
import { useTabs } from "../../providers/TabProvider";
import clsx from "clsx";

/**
 * `TabPanel` 컴포넌트는 특정 탭이 활성화될 때만 표시되는 컨텐츠입니다.
 *
 * @param {Object} props - `TabPanel`의 속성
 * @param {string} props.tabKey - 해당 패널이 연결된 탭의 key 값
 * @param {React.ReactNode} props.children - 탭이 활성화될 때 표시될 컨텐츠
 *
 * @example
 * ```tsx
 * <TabPanels>
 *   <TabPanel tabKey="home">홈 컨텐츠</TabPanel>
 * </TabPanels>
 * ```
 */
const TabPanel = ({
  tabKey,
  children,
} : {
  tabKey: string;
  children: ReactNode;
}) => {
  const { active } = useTabs();
  return active === tabKey ? <div className={clsx(
    'py-5 lg:py-0 lg:mt-5',
    "grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-5 md:gap-10",)}>{children}</div> : null;
};

export default TabPanel;