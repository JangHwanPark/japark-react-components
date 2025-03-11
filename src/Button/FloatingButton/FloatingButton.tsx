import { CiCirclePlus } from "react-icons/ci";

const FloatingButton = () => {
 return (
  <div className="fixed bottom-10 right-10">
   <button className="cursor-pointer">
    <CiCirclePlus size={50} />
   </button>
  </div>
 );
};

export default FloatingButton;