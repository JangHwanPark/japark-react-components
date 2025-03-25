import { useEffect, RefObject } from "react";

/**
 * 외부 클릭 시 실행할 핸들러 함수의 타입입니다.
 * @param {Event} event - 발생한 이벤트 객체
 */
interface ClickOutsideHandler {
 (event: Event): void;
}

/**
 * 주어진 ref 요소 외부에서 발생하는 클릭 이벤트를 감지하여 handler 함수를 실행합니다.
 *
 * @param {RefObject<HTMLElement>} ref - 외부 클릭을 감지할 대상 요소의 ref 객체
 * @param {ClickOutsideHandler} handler - 외부 클릭 시 실행할 콜백 함수
 * @
 * @remarks
 * - ref는 객체이므로 의존성 배열에서 제외하여 불필요한 리렌더링을 방지합니다.
 * - handler 함수는 매 렌더링마다 새로 생성될 가능성이 있으므로, 최적화를 위해 useCallback을 사용하세요.
 */
function useOnClickOutside(
 ref: RefObject<HTMLElement>,
 handler: ClickOutsideHandler,
) {
 useEffect(() => {
  const listener = (event: Event) => {
   if (!ref.current || ref.current.contains(event.target as Node)) {
    return;
   }
   handler(event);
  };

  document.addEventListener("mousedown", listener);
  document.addEventListener("touchstart", listener);

  return () => {
   document.removeEventListener("mousedown", listener);
   document.removeEventListener("touchstart", listener);
  };
 }, [handler]); // ref는 객체이므로 의존성 배열에서 제거
}

export default useOnClickOutside;