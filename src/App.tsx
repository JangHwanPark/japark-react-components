import Accordion from "./Accordion/Accordion";

function App() {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-black text-white">
   <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-4 items-center">
    {/* button */}
    <Accordion title='test title' description='description'/>
   </div>
  </div>
 );
}

export default App;