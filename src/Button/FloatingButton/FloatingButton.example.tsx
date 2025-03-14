import FloatingButton from "./FloatingButton";

const FloatingButtonExample = () => {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-black text-white">
   <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-4 items-center">
    {/* 기본 (Primary) 테마 */}
    <FloatingButton onClick={() => alert("Primary!")} />

    {/* 테마 적용 */}
    <FloatingButton theme="success" onClick={() => alert("Success!")} />
    <FloatingButton theme="danger" onClick={() => alert("Danger!")} />
    <FloatingButton theme="warning" onClick={() => alert("Warning!")} />
    <FloatingButton theme="light" onClick={() => alert("Light!")} />
    <FloatingButton theme="dark" onClick={() => alert("Dark!")} />

    {/* 크기 변경 */}
    <FloatingButton size={72} theme="primary" />
   </div>
  </div>
 );
};

export default FloatingButtonExample;