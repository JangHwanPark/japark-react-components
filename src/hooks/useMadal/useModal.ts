import { useState, useCallback } from "react";

const useModal = () => {
 const [isOpen, setIsOpen] = useState(false);
 // 이전 상태 기반 상태 변경
 const openModal = useCallback(() => {
  setIsOpen(true);
 }, []);

 const closeModal = useCallback(() => {
  setIsOpen(false);
 }, []);
 return { isOpen, openModal, closeModal };
};

export { useModal };