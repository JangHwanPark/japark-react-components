/**
 * `TabPanels` 컴포넌트는 `TabPanel` 컴포넌트들을 감싸는 컨테이너입니다.
 *
 * @param {Object} props - `TabPanels`의 속성
 * @param {React.ReactNode} props.children - `TabPanel`들을 포함하는 요소
 *
 * @example
 * ```tsx
 * <TabPanels>
 *   <TabPanel tabKey="home">홈 컨텐츠</TabPanel>
 *   <TabPanel tabKey="profile">프로필 컨텐츠</TabPanel>
 * </TabPanels>
 * ```
 */
const TabPanels = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default TabPanels;
