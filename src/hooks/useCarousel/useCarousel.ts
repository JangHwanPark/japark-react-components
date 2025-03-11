import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RefObject, useCallback, useRef, useState } from "react";

const useCarousel = (
 carouselRef: RefObject<HTMLElement | null>,
 totalSlides: number,
) => {
 const [current, setCurrent] = useState(0);
 const isAnimating = useRef(false); // 애니메이션 중복 방지

 useGSAP(() => {
  if (!carouselRef.current || totalSlides <= 1) return;

  gsap.to(carouselRef.current, {
   x: `-${current * 100}%`, // X축 이동
   duration: 0.5, // 애니메이션 지속 시간
   ease: "power2.out", // 부드러운 감속 효과
   onComplete: () => {
    isAnimating.current = false;
    if (current === totalSlides) {
     requestAnimationFrame(() => {
      // 첫 번째 슬라이드로 이동
      gsap.set(carouselRef.current, { x: "0%" });
      setCurrent(0);
     });
    }
   },
  });
 }, [current]);

 const nextSlide = useCallback(() => {
  if (isAnimating.current || current >= totalSlides - 1) return;
  isAnimating.current = true;
  setCurrent((prev) => prev + 1);
 }, [current, totalSlides]);

 const prevSlide = useCallback(() => {
  if (isAnimating.current) return;
  isAnimating.current = true;

  if (current > 0) {
   setCurrent((prev) => prev - 1);
  } else {
   requestAnimationFrame(() => {
    gsap.set(carouselRef.current, { x: `-${(totalSlides - 1) * 100}%` });
    setCurrent(totalSlides - 1);
   });
  }
 }, [current, totalSlides]);

 return { current, nextSlide, prevSlide };
};

export { useCarousel };