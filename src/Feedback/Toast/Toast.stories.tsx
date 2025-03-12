import { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import { MdErrorOutline } from "react-icons/md";
import { action } from "@storybook/addon-actions";

/**
 * `Toast` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof Toast> = {
 title: "Feedback/Toast",
 component: Toast,
 tags: ["autodocs"],
 argTypes: {
  message: { control: "text" },
  type: {
   control: "radio",
   options: ["info", "success", "error", "warning"],
  },
  size: {
   control: "radio",
   options: ["sm", "md", "lg"],
  },
  duration: {
   control: { type: "number", min: 1, max: 10, step: 1 },
  },
  onClose: { action: "closed" },
  icon: { control: false }, // 기본적으로 자동 아이콘 사용
 },
};

export default meta;
type Story = StoryObj<typeof Toast>;

/**
 * ✅ 기본 성공 토스트
 */
export const Default: Story = {
 args: {
  message: "This is a success toast!",
  type: "success",
  size: "md",
  duration: 3,
  onClose: action("closed"),
 },
};

/**
 * ⚠️ 경고 토스트
 */
export const Warning: Story = {
 args: {
  message: "This is a warning toast!",
  type: "warning",
  size: "md",
  duration: 5,
  onClose: action("closed"),
 },
};

/**
 * ❌ 오류 토스트
 */
export const Error: Story = {
 args: {
  message: "An error occurred!",
  type: "error",
  size: "lg",
  duration: 4,
  onClose: action("closed"),
 },
};

/**
 * ℹ️ 정보 토스트
 */
export const Info: Story = {
 args: {
  message: "Here is some information!",
  type: "info",
  size: "sm",
  duration: 6,
  onClose: action("closed"),
 },
};

/**
 * 🎨 커스텀 아이콘이 있는 토스트
 */
export const CustomIcon: Story = {
 args: {
  message: "This toast has a custom icon!",
  type: "success",
  size: "md",
  duration: 4,
  icon: <MdErrorOutline size={20} className="text-red-500" />,
  onClose: action("closed"),
 },
};