import Plus from "./Plus";

const PlusExample = () => {
 return (
  <div className="h-screen flex flex-col gap-4 items-center justify-center bg-gray-100">
   <h1 className="text-2xl font-bold">React Icons 스타일 아이콘</h1>

   {/* 기본 크기 */}
   <Plus />

   {/* 크기 조절 */}
   <Plus size={40} />

   {/* 색상 변경 */}
   <Plus color="red" />

   {/* 두께 변경 */}
   <Plus strokeWidth={4} />

   {/* TailwindCSS와 함께 사용 */}
   <Plus
    size={48}
    color="blue"
    className="hover:scale-110 transition-transform"
   />
  </div>
 );
};

export default PlusExample;