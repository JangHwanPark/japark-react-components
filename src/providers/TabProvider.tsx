import { useCallback, useState, createContext, useContext } from 'react';
import { TabsProviderProps, TabsContextType } from '../types/tabs';

// 탭 컨텍스트 생성
/**
 * `TabsContext`는 탭의 상태(`activeTab`) 및 변경 핸들러(`handleTabChange`)를 관리하는 컨텍스트입니다.
 */
const TabsContext = createContext<TabsContextType<any> | undefined>(undefined);

// 컨텍스트 훅
/**
 * `useTabs` 훅을 사용하면 현재 `TabsContext`의 값을 가져올 수 있습니다.
 *
 * @template T - 탭 데이터의 타입
 * @throws {Error} - `TabsProvider` 내부에서 호출되지 않으면 에러를 발생시킵니다.
 *
 * @example
 * ```tsx
 * const { active, handleTabChange } = useTabs();
 * ```
 */
export const useTabs = <T extends object = {} | never>(): TabsContextType<T> => {
  const context = useContext(TabsContext);
  if (!context) throw new Error('useTabs must be used within TabsContext');
  return context;
};

// 탭 프로바이더를 사용해 상태를 전역 관리
/**
 * `TabsProvider`는 `Tabs` 내부에서 탭 상태를 전역적으로 관리하는 컨텍스트 프로바이더입니다.
 *
 * @template T - 탭 데이터의 타입
 * @param {TabsProviderProps<T>} props - `TabsProvider`의 속성
 * @param {TabItem<T>[]} props.tabs - 탭 목록
 * @param {string} [props.defaultTab] - 기본적으로 활성화될 탭
 * @param {ReactNode} props.children - 자식 요소 (탭 목록과 패널들)
 *
 * @example
 * ```tsx
 * <TabsProvider tabs={tabItems} defaultTab="home">
 *   <TabList>
 *     <Tab tabKey="home">홈</Tab>
 *   </TabList>
 *   <TabPanels>
 *     <TabPanel tabKey="home">홈 컨텐츠</TabPanel>
 *   </TabPanels>
 * </TabsProvider>
 * ```
 */
export const TabsProvider = <T extends {} = {}>({
  tabs,
  defaultTab = '',
  children,
}: TabsProviderProps<T>) => {
  const initialTab = tabs.some(tab => tab.key === defaultTab)
    ? defaultTab
    : // 존재하지 않는 탭이면 첫 번째 탭 선택
      tabs.length > 0
      ? tabs[0].key
      : '';
  const [active, setActive] = useState<string>(initialTab);

  const handleTabChange = useCallback((tabKey: string) => {
    setActive(tabKey);
  }, []);

  return (
    <TabsContext.Provider value={{ active, handleTabChange, tabs }}>
      {children}
    </TabsContext.Provider>
  );
};
