import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * useInfiniteCarousel - GSAP을 이용한 무한 루프 캐러셀을 구현하는 커스텀 훅
 *
 * @example
 * const sliderRef = useInfiniteCarousel();
 * <ul ref={sliderRef}>...</ul>
 */
const useInfiniteCarousel = (): React.RefObject<HTMLUListElement | null> => {
 const sliderRef = useRef<HTMLUListElement | null>(null);

 useGSAP(() => {
  const slider = sliderRef.current;
  if (!slider) return;

  // 초기 위치 설정
  gsap.set(slider, { xPercent: 0 });

  gsap.to(slider, {
   xPercent: -100, // 왼쪽으로 계속 이동
   duration: 50, // 속도 조절 가능
   ease: "linear",
   repeat: -1, // 무한 반복
   modifiers: {
    xPercent: gsap.utils.wrap(-100, 0), // 끝까지 가면 다시 시작
   },
  });
 }, []);

 return sliderRef;
};

export default useInfiniteCarousel;