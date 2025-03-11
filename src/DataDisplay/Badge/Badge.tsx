const Badge = () => {
 return (
  <div className="w-fit relative">
   <div className="w-14 h-14 bg-white"></div>
   <div className="absolute -top-5 -right-5 w-10 h-10 bg-danger rounded-full flex items-center justify-center text-white font-bold">
    0
   </div>
  </div>
 );
};

export default Badge;