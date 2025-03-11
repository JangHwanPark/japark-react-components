import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

const CarouselExample = () => {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-[#0f1214]">
   <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-4">
    <Carousel>
     <CarouselItem title="Section 01" />
     <CarouselItem title="Section 02" />
     <CarouselItem title="Section 03" />
    </Carousel>
   </div>
  </div>
 );
};

export default CarouselExample;