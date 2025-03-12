import { Meta, StoryObj } from "@storybook/react";
import FloatingButton from "./FloatingButton";
import Plus from "../../Icons/Plus/Plus";

/**
 * `FloatingButton` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof FloatingButton> = {
 title: "Button/FloatingButton",
 component: FloatingButton,
 tags: ["autodocs"],
 argTypes: {
  onClick: { action: "clicked" },
  size: {
   control: { type: "number", min: 24, max: 100, step: 4 },
  },
  theme: {
   control: "select",
   options: [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "light",
    "dark",
   ],
  },
  className: { control: "text" },
  children: { control: false }, // 기본적으로 `Plus` 아이콘 사용
 },
};

export default meta;
type Story = StoryObj<typeof FloatingButton>;

/**
 * 기본 플로팅 버튼 (파란색, + 아이콘)
 */
export const Default: Story = {
 args: {
  size: 56,
  theme: "primary",
 },
};

/**
 * 위험 (Danger) 테마
 */
export const Danger: Story = {
 args: {
  size: 56,
  theme: "danger",
 },
};

/**
 * 사용자 아이콘 추가
 */
export const CustomIcon: Story = {
 args: {
  size: 64,
  theme: "success",
  children: <Plus size={32} color="white" />,
 },
};

/**
 * 큰 플로팅 버튼 (사이즈 조절)
 */
export const Large: Story = {
 args: {
  size: 80,
  theme: "dark",
 },
};

/**
 * 작은 플로팅 버튼
 */
export const Small: Story = {
 args: {
  size: 32,
  theme: "light",
 },
};