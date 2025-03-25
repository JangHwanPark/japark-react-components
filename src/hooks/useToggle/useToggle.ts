import { useState, useCallback } from "react";

const useToggle = (initialState = false) => {
 const [isOpen, setIsOpen] = useState(initialState);

 const toggle = useCallback(() => {
  setIsOpen((prev) => !prev);
 }, []);

 const close = useCallback(() => {
  setIsOpen(false);
 }, []);

 return { isOpen, toggle, close };
};

export default useToggle;