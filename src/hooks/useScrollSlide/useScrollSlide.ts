import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollSlideProps {
 direction?: "horizontal" | "vertical"; // 가로 or 세로 스크롤
 height?: string; // 요소 높이 (기본값: "h-screen")
 opacity?: boolean; // 투명도 애니메이션 적용 여부
}

const useScrollSlide = ({
 direction = "horizontal",
 height = "h-screen",
 opacity = false,
}: ScrollSlideProps) => {
 const sectionRef = useRef<HTMLDivElement | null>(null);
 const sectionsRef = useRef<HTMLDivElement[]>([]);

 useGSAP(
  () => {
   // ✅ 스크롤 이동 애니메이션
   gsap.to(sectionsRef.current, {
    [direction === "horizontal" ? "xPercent" : "yPercent"]:
     -100 * (sectionsRef.current.length - 1),
    //opacity: opacity ? 0 : 1, // opacity 적용
    ease: "none",
    scrollTrigger: {
     trigger: sectionRef.current,
     pin: true,
     scrub: 1,
     start: "top top",
     // end: `+=${direction === "horizontal" ? "200%" : "300%"}`,
     end: `+=${sectionsRef.current.length * window.innerHeight}`,
     snap: 1 / (sectionsRef.current.length - 1),
    },
   });

   // ✅ opacity 애니메이션 적용 (선택적)
   if (opacity) {
    sectionsRef.current.forEach((section, index) => {
     gsap.fromTo(
      section,
      { autoAlpha: 0 }, // 초기 상태 (opacity: 0, visibility: hidden)
      {
       autoAlpha: 1, // 스크롤할수록 서서히 나타남
       duration: 1.2,
       ease: "power2.out",
       scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "top 40%",
        scrub: true,
        toggleActions: "play reverse play reverse",
        onEnter: () => {
         gsap.to(section, { autoAlpha: 1, duration: 0.8 });
         sectionsRef.current.forEach((el, idx) => {
          if (idx !== index) gsap.to(el, { autoAlpha: 0, duration: 0.5 });
         });
        },
        onEnterBack: () => {
         gsap.to(section, { autoAlpha: 1, duration: 0.8 });
         sectionsRef.current.forEach((el, idx) => {
          if (idx !== index) gsap.to(el, { autoAlpha: 0, duration: 0.5 });
         });
        },
       },
      },
     );
    });
   }
  },
  { dependencies: [] },
 );

 return { sectionRef, sectionsRef, height };
};

export default useScrollSlide;