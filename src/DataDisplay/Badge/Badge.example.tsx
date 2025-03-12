import Badge from "./Badge";

const BadgeExample = () => {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-black text-white">
   <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-4 items-center">
    <Badge count={5} />
    <Badge count={0} hideWhenZero={true} />
    <Badge count={10} className="bg-gray-200 p-2" />
   </div>
  </div>
 );
};

export default BadgeExample;