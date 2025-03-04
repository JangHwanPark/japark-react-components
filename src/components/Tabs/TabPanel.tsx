import { useTabs } from '../../providers/TabProvider';

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
const TabPanel = ({ tabKey, children }: { tabKey: string; children: React.ReactNode }) => {
  const { active } = useTabs();
  return active === tabKey ? <div>{children}</div> : null;
};

export default TabPanel;
