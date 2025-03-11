import FloatingButton from "./FloatingButton";

const FloatingButtonExample = () => {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-black text-white">
   <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-4 items-center">
    <FloatingButton />
   </div>
  </div>
 );
};

export default FloatingButtonExample;