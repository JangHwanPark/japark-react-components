import Toast from "./Toast";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Toast 컴포넌트 테스트", () => {
 it("제목과 설명이 올바르게 렌더링되는지 확인", () => {
  render(<Toast message="토스트 컴포넌트 테스트 설명입니다." />);
  expect(
   screen.getByText("토스트 컴포넌트 테스트 설명입니다."),
  ).toBeInTheDocument();
 });

 it("size에 따라 텍스트 크기가 올바르게 적용되는지 확인", () => {
  const { rerender } = render(<Toast message="사이즈 테스트" size="sm" />);
  expect(screen.getByText("사이즈 테스트")).toHaveClass("text-lg");

  rerender(<Toast message="사이즈 테스트" size="md" />);
  expect(screen.getByText("사이즈 테스트")).toHaveClass("text-xl");

  rerender(<Toast message="사이즈 테스트" size="lg" />);
  expect(screen.getByText("사이즈 테스트")).toHaveClass("text-2xl");
 });
});