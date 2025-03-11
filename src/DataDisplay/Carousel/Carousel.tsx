import { Button } from "../../Inputs";
import { ReactNode, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

interface CarouselProps {
 isClick?: boolean;
 children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
 const [current, setCurrent] = useState(0);
 const carouselRef = useRef<HTMLUListElement>(null);
 const totalSlides = Array.isArray(children) ? children.length : 1;
 const isAnimating = useRef(false); // 애니메이션 중복 방지
 const containerRef = useRef<HTMLDivElement>(null);

 useGSAP(() => {
  if (carouselRef.current) {
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
  }
 }, [current]);

 const nextSlide = () => {
  if (current < totalSlides) {
   setCurrent((prev) => prev + 1);
  }
 };

 const prevSlide = () => {
  if (isAnimating.current) return;
  isAnimating.current = true;

  if (current > 0) {
   setCurrent((prev) => prev - 1);
  } else {
   requestAnimationFrame(() => {
    // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
    gsap.set(carouselRef.current, { x: `-${totalSlides * 100}%` });
    setCurrent(totalSlides - 1);
   });
  }
 };

 return (
  <section
   ref={containerRef}
   role="region"
   className="relative border overflow-x-hidden bg-background"
   aria-label="캐러셀 슬라이드"
   aria-live="polite"
   tabIndex={0}>
   <ul ref={carouselRef} className="flex">
    {children}
    {Array.isArray(children) && children.length > 0 ? children[0] : null}
   </ul>
   <div className="absolute top-1/2 w-full flex justify-between -translate-y-1/2">
    <Button onClick={prevSlide} style="text" ariaLabel="이전 슬라이드">
     <GrFormPrevious />
    </Button>
    <Button onClick={nextSlide} style="text" ariaLabel="다음 슬라이드">
     <MdNavigateNext />
    </Button>
   </div>
  </section>
 );
};

export default Carousel;