import Stepper from "./Stepper";

const data = [
 "test 01",
 "test 02",
 "test 03",
];

const StepperExample = () => {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-[#0f1214] text-background">
   <div className="w-full flex flex-col">
    <Stepper data={data} />
    <Stepper
     data={data}
     style="check"
    />
   </div>
  </div>
 );
};

export default StepperExample;