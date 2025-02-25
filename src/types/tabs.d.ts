// 컨텍스트 타입
export interface TabItem<T = {}> {
  key: string;
  label: string;
  icon?: ReactNode; // 아이콘 추가 가능
  extra?: T; // 확장 가능 필드
}

export interface TabsContextType<T = {}> {
  active: string;
  handleTabChange: (tabKey: string) => void;
  tabs: TabItem<T>[];
}

// 프로 바이더 타입
export interface TabsProviderProps<T = {}> {
  tabs: TabItem<T>[];
  defaultTab?: string;
  children: ReactNode;
}

export interface TabsProps<T = {}> {
  tabs: TabItem<T>[];
  defaultTab?: string;
  children: ReactNode;
}

// Tab 컴포넌트
export interface TabListProps {
  children: ReactNode;
  className?: string;
}

export interface TabProps {
  tabKey: string;
  className?: string;
  children?: ReactNode;
}