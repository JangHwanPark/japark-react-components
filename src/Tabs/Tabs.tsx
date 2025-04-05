import { TabsProvider } from "../../providers/TabProvider";
import { TabsProps } from "../../types/tabs";

/**
 * `Tabs` 컴포넌트는 여러 개의 탭을 관리하는 컨테이너 역할을 합니다.
 *
 * @description
 * `TabsProvider`를 사용하여 탭의 전역 상태를 관리하며,
 * `TabList`, `Tab`, `TabPanels`, `TabPanel`과 함께 사용됩니다.
 *
 * @example
 * ```tsx
 * <Tabs tabs={tabItems} defaultTab="home">
 *   <TabList>
 *     {tabItems.map(tab => <Tab key={tab.key} tabKey={tab.key}>{tab.label}</Tab>)}
 *   </TabList>
 *   <TabPanels>
 *     <TabPanel tabKey="home">홈 컨텐츠</TabPanel>
 *     <TabPanel tabKey="about">소개 컨텐츠</TabPanel>
 *   </TabPanels>
 * </Tabs>
 * ```
 */
const Tabs = <T extends {} = {}> ({
  tabs,
  defaultTab,
  onChange,
  children,
}: TabsProps<T>) => {
  return (
    <TabsProvider tabs={tabs} defaultTab={defaultTab} onChange={onChange}>
      <div className='w-full' aria-label='Tab Menu'>
        {children}
      </div>
    </TabsProvider>
  );
};

export default Tabs;