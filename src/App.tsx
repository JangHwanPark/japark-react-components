import { AlertModal } from "./Modal";

function App() {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-[#0f1214] text-background">
   <div className="w-full flex flex-col justify-center items-center gap-5">
    <AlertModal
     title="모달 제목"
     description="모달 설명"
     size="sm"
    />
    <AlertModal
     title="모달 제목"
     description="모달 설명"
    />
    <AlertModal
     title="모달 제목"
     description="모달 설명"
     size="lg"
    />
   </div>
  </div>
 );
}

export default App;