export interface TimelineItem {
  title: string;
  date: string; // 날짜를 문자열 형식으로 사용 (예: "2023-01-15")
  description?: string;
}

export const dummyTimelineItems: TimelineItem[] = [
  {
    title: "프로젝트 시작",
    date: "2023-01-15",
    description: "프로젝트 킥오프 회의 및 초기 계획 수립",
  },
  {
    title: "디자인 단계",
    date: "2023-02-10",
    description: "UI/UX 디자인 완료 및 프로토타입 제작",
  },
  {
    title: "개발 시작",
    date: "2023-03-01",
    description: "핵심 기능 개발 및 시스템 아키텍처 확정",
  },
  {
    title: "베타 테스트",
    date: "2023-04-20",
    description: "내부 베타 테스트 진행 및 피드백 수집",
  },
  {
    title: "공식 출시",
    date: "2023-06-15",
    description: "제품 공식 출시 및 마케팅 캠페인 시작",
  },
];
