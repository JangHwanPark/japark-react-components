interface CarouselItemProps {
 title?: string;
}

const CarouselItem = ({ title }: CarouselItemProps) => {
 return (
  <li className="w-full flex-shrink-0 flex items-center justify-center text-center bg-gray-200 h-64">
   {title}
  </li>
 );
};

export default CarouselItem;