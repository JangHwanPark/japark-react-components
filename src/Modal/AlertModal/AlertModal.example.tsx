import React from "react";
import { AlertModal } from "../index";

const AlertModalExample = () => {
 return (
  <div className="w-full h-screen flex items-center justify-center bg-[#0f1214] text-background">
   <div className="w-full flex flex-col justify-center items-center gap-5">
    {/* default Modal */}
    <AlertModal
     title="모달 제목"
     description="모달 설명"
     size="sm"
    />
    <AlertModal title="모달 제목" description="모달 설명" />
    <AlertModal
     title="모달 제목"
     description="모달 설명"
     size="lg"
    />

    {/* Modal Types */}
    <div className="grid grid-rows-2 grid-cols-2 gap-2">
     <AlertModal
      title="모달 제목"
      description="모달 설명"
      size="sm"
     />
     <AlertModal
      alert="success"
      title="모달 제목"
      description="모달 설명"
      size="sm"
     />
     <AlertModal
      alert="warning"
      title="모달 제목"
      description="모달 설명"
      size="sm"
     />
     <AlertModal
      alert="error"
      title="모달 제목"
      description="모달 설명"
      size="sm"
     />
    </div>
   </div>
  </div>
 );
};

export default AlertModalExample;