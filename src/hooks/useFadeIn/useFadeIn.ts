import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useMemo } from 'react';

gsap.registerPlugin(useGSAP);
const useFadeIn = (
  direction: 'left' | 'right' | 'top' | 'bottom' = 'left',
  delay: number = 0,
  distance: number = 200,
  duration: number = 1,
) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const fadeDirection = useMemo(() => {
    switch (direction) {
      case 'left':
        return { x: -distance };
      case 'right':
        return { x: distance };
      case 'top':
        return { y: -distance };
      case 'bottom':
        return { y: distance };
    }
  }, [direction, distance]);

  useGSAP(() => {
    if (componentRef.current) {
      gsap.from(componentRef.current, {
        duration: 1,
        ...fadeDirection,
        opacity: 0,
        delay,
      });
    }
  }, [fadeDirection, delay, duration]);

  return { componentRef };
};

export { useFadeIn };
