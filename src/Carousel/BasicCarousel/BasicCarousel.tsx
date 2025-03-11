import { Button } from "../../Inputs";
import { ReactNode, useRef } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useCarousel } from "../../hooks/useCarousel/useCarousel";

interface CarouselProps {
 children: ReactNode;
}

const BasicCarousel = ({ children }: CarouselProps) => {
 const carouselRef = useRef<HTMLUListElement>(null);
 const totalSlides = Array.isArray(children) ? children.length : 1;
 const { nextSlide, prevSlide } = useCarousel(carouselRef, totalSlides);

 return (
  <section
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

export default BasicCarousel;