import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface AnimationOptions {
 selector: string; // 애니메이션을 적용할 대상
 start?: string; // 애니메이션 시작 지점 (기본값: "top 80%")
 type?: "fadeInLeft" | "fadeInRight" | "fadeInUp" | "scaleIn" | "rotateIn"; // 애니메이션 유형
 duration?: number; // 애니메이션 지속 시간
 delay?: number; // 애니메이션 딜레이
 ease?: string; // 애니메이션 이징
}

const useScrollAnimationTest = ({
 selector,
 start = "top 80%",
 type = "fadeInLeft",
 duration = 1.2,
 delay = 0,
 ease = "power3.out",
}: AnimationOptions) => {
 useGSAP(() => {
  const elements = gsap.utils.toArray(selector) as HTMLElement[];

  elements.forEach((el) => {
   let animationConfig = {};

   switch (type) {
    case "fadeInLeft":
     animationConfig = { opacity: 0, x: -100 };
     break;
    case "fadeInRight":
     animationConfig = { opacity: 0, x: 100 };
     break;
    case "fadeInUp":
     animationConfig = { opacity: 0, y: 100 };
     break;
    case "scaleIn":
     animationConfig = { opacity: 0, scale: 0.8 };
     break;
    case "rotateIn":
     animationConfig = { opacity: 0, rotate: -15 };
     break;
    default:
     animationConfig = { opacity: 0, x: -100 };
   }

   gsap.fromTo(el, animationConfig, {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    duration,
    delay,
    ease,
    scrollTrigger: {
     trigger: el,
     start,
     toggleActions: "play none none reverse",
    },
   });
  });
 }, [selector, start, type, duration, delay, ease]);
};

export default useScrollAnimationTest;