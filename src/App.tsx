import AlertModal from "./Modal/AlertModal/AlertModal";
import { useModal } from "./hooks/useMadal/useModal";

function App() {
 const { isOpen, openModal, closeModal } = useModal();
 return (
  <div className="w-full h-screen flex items-center justify-center bg-background">
   <div className="w-full max-w-3xl mx-auto flex flex-col gap-4 p-4">
    <button onClick={openModal}>모달 열기</button>
    {isOpen && (
     <AlertModal title="test" close={closeModal} overlay>
      test
     </AlertModal>
    )}
   </div>
  </div>
 );
}

export default App;