import Toast from "./Feedback/Toast/Toast";
import { GrInfo } from "react-icons/gr";

function App() {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-[#0f1214]">
   <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-4">
    <Toast message="info" type="info" size="sm" />
    <Toast message="success" type="success" size="sm" />
    <Toast message="error" type="error" />
    <Toast message="warning" type="warning" size="lg" />
    <Toast message="Custom Icon" type="info" size="lg" icon={<GrInfo />} />
    <Toast message="애니메이션 적용" duration={3} type="warning" size="lg" />
   </div>
  </div>
 );
}

export default App;