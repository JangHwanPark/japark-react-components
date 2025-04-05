import clsx from "clsx";
import { TabListProps } from "../../types/tabs";

/**
 * `TabList` 컴포넌트는 탭 버튼을 감싸는 컨테이너입니다.
 *
 * @description
 * `Tab` 컴포넌트들을 포함하는 컨테이너 역할을 하며, `Tabs` 내에서 사용됩니다.
 *
 * @example
 * ```tsx
 * <TabList>
 *   <Tab tabKey="home">홈</Tab>
 *   <Tab tabKey="profile">프로필</Tab>
 * </TabList>
 * ```
 */
const TabList = ({
  children,
  className = '',
}: TabListProps) => {
  const classes = clsx(
    className,
    'border-b-2 border-b-c-yellow',
    'flex items-center xs:justify-center sm:justify-start',)
  return (
    <ul
      role='tablist'
      aria-orientation='horizontal'
      className={classes}>
      {children}
    </ul>
  );
};

export default TabList;