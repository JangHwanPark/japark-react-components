import BasicCarousel from "./BasicCarousel";
import CarouselItem from "../CarouselItem";

const BasicCarouselExample = () => {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-[#0f1214]">
   <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-4">
    <BasicCarousel>
     <CarouselItem title="Section 01" />
     <CarouselItem title="Section 02" />
     <CarouselItem title="Section 03" />
    </BasicCarousel>
   </div>
  </div>
 );
};

export default BasicCarouselExample;