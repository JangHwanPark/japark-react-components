import { Backspace } from "../index";

const BackspaceExample = () => {
 return (
  <div className="h-screen flex flex-col gap-6 items-center justify-center bg-gray-100">
   <h1 className="text-2xl font-bold">⌫ Backspace Icons</h1>

   {/* 기본 아이콘 */}
   <Backspace />

   {/* 크기 조절 */}
   <Backspace size={40} />

   {/* 색상 변경 */}
   <Backspace color="red" />

   {/* 두께 변경 */}
   <Backspace strokeWidth={3} />

   {/* TailwindCSS와 함께 사용 */}
   <Backspace
    size={48}
    color="blue"
    className="hover:scale-110 transition-transform"
   />
  </div>
 );
};

export default BackspaceExample;