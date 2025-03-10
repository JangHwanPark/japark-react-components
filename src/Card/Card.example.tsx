import Card from "./Card";

const CardExample = () => {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-[#0f1214] text-background">
   <div className="w-full flex flex-col justify-center items-center gap-5">
    <Card
     title="Card UI"
     description="Card UI description"
    />
    <Card
     title="Card UI"
     description="Card UI description"
     imgUrl="p1.webp"
     size="sm"
    />
    <Card
     title="Card UI"
     description="Card UI description"
     imgUrl="p1.webp"
    />
    <Card
     title="Card UI"
     description="Card UI description"
     imgUrl="p1.webp"
     size="lg"
    />
   </div>
  </div>
 );
};

export default CardExample;