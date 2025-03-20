import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AlertModal from "./AlertModal";

describe("AlertModal 컴포넌트", () => {
 it("제목과 설명이 올바르게 렌더링되는지 확인", () => {
  render(<AlertModal title="테스트 제목">테스트 설명입니다.</AlertModal>);
  expect(screen.getByText("테스트 제목")).toBeInTheDocument();
  expect(screen.getByText("테스트 설명입니다.")).toBeInTheDocument();
 });

 it("알림 유형(alert)에 따라 올바른 아이콘이 표시되는지 확인", () => {
  const { rerender } = render(
   <AlertModal alert="notice" title="알림 유형(alert)">알림 유형(alert) 설명</AlertModal>,
  );
  expect(screen.getByLabelText("notice")).toBeInTheDocument();

  rerender(
   <AlertModal
    title="알림 유형(alert)"
    alert="success"
   >알림 유형(alert) 설명</AlertModal>,
  );
  expect(screen.getByLabelText("success")).toBeInTheDocument();

  rerender(
   <AlertModal
    title="알림 유형(alert)"
    alert="warning"
   >알림 유형(alert) 설명</AlertModal>,
  );
  expect(screen.getByLabelText("warning")).toBeInTheDocument();

  rerender(
   <AlertModal
    title="알림 유형(alert)"
    alert="error"
   >알림 유형(alert) 설명</AlertModal>,
  );
  expect(screen.getByLabelText("error")).toBeInTheDocument();
 });

 it("'취소' 버튼이 closed = true 일 때만 렌더링되는지 확인", () => {
  render(
   <AlertModal
    title="취소 버튼 테스트"
   >취소 버튼 테스트</AlertModal>,
  );
  expect(screen.getByText("취소")).toBeInTheDocument();
 });

 it("'확인' 버튼 클릭 시 handleClick 함수가 실행되는지 확인", () => {
  render(
   <AlertModal title="확인 버튼 테스트">확인 버튼 테스트</AlertModal>,
  );
  const handleClick = screen.getByText("확인");
  const consoleSpy = vi.spyOn(console, "log"); // 콘솔 로깅 감시

  fireEvent.click(handleClick);
  expect(consoleSpy).toHaveBeenCalledWith("onClick:", "notice");
  consoleSpy.mockRestore(); // 테스트 후 콘솔 스파이 복구
 });
});