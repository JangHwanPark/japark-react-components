import { AlertModal } from "../index";
import { useModal } from "../../hooks/useMadal/useModal";
import { Button } from "../../Button";

const AlertModalExample = () => {
 const { isOpen, openModal, closeModal } = useModal();
 return (
  <div className="w-full h-screen flex items-center justify-center bg-background">
   <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-4">
    <Button onClick={openModal}>오버레이 모달 열기</Button>
    {isOpen && (
     <AlertModal title="test" close={closeModal} overlay>
      test
     </AlertModal>
    )}
   </div>
  </div>
 );
};

export default AlertModalExample;