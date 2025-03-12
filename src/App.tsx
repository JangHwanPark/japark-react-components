import FloatingButton from "./Button/FloatingButton/FloatingButton";

function App() {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-black text-white">
   <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-4 items-center">
    <FloatingButton
     size={56}
     onClick={() => alert("Floating Button Clicked!")}
     className="bg-primary p-4 rounded-full shadow-lg hover:bg-primary/80 transition"
    />
   </div>
  </div>
 );
}

export default App;