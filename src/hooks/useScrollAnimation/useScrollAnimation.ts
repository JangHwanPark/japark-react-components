import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (selector: string, start: string) => {
 useGSAP(() => {
  // 전달된 selector를 사용하여 애니메이션 대상 요소들 선택
  const sections = gsap.utils.toArray(selector) as HTMLElement[];
  sections.forEach((section, idx) => {
   gsap.fromTo(
    section,
    {
     // 초기 상태에서 요소의 투명도를 0으로 설정하여 요소가 보이지 않게 만듬
     opacity: 0,
     // 요소의 x축 위치를 설정
     // 인덱스(idx)가 짝수이면 왼쪽(-100)에서 시작
     // 홀수면 오른쪽(100)에서 시작
     x: idx % 2 === 0 ? -100 : 100,
    },
    {
     // 애니메이션이 끝날 때 요소의 투명도를 1로 설정하여 완전히 보이도록 만듬
     opacity: 1,
     // 애니메이션이 끝날 때 요소를 원래 위치(0)로 이동
     x: 0,
     // 애니메이션이 1.2초 동안 실행되도록 설정
     duration: 1.2,
     scrollTrigger: {
      // 트리거 요소, 기본값은 현재 section
      trigger: section,
      // 시작 시점, 기본값은 'top 80%'
      // 뷰포트 80%에 들어올 때 실행
      start: start,
      // 토글 액션, 기본값은 'play none none reverse'
      // play: 애니메이션을 실행.
      // pause: 애니메이션을 멈춤.
      // resume: 애니메이션을 재개 (재개 시점).
      // reverse: 애니메이션을 역순으로 실행.
      toggleActions: "play none none reverse",
     },
    },
   );
  });
  // 의존성 배열을 빈 배열로 두어 컴포넌트 마운트 시 한 번만 실행
 }, []);
};

export default useScrollAnimation;