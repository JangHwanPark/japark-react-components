import { Meta, StoryObj } from "@storybook/react";
import AlertModal from "./AlertModal";
import { useState } from "react";

/**
 * `AlertModal` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof AlertModal> = {
 title: "Modal/AlertModal",
 component: AlertModal,
 tags: ["autodocs"],
 argTypes: {
  title: { control: "text" },
  overlay: { control: "boolean" },
  size: {
   control: "radio",
   options: ["sm", "md", "lg"],
  },
  alert: {
   control: "radio",
   options: ["notice", "success", "warning", "error"],
  },
  align: {
   control: "radio",
   options: ["left", "center"],
  },
 },
};

export default meta;
type Story = StoryObj<typeof AlertModal>;

/**
 * ✅ Storybook을 위한 `ModalWrapper` HOC
 *  - `useState`를 사용하여 Storybook에서 모달을 열고 닫을 수 있도록 구성
 */
const ModalWrapper = (props: any) => {
 const [open, setOpen] = useState(true);
 return open ? <AlertModal {...props} close={() => setOpen(false)} /> : null;
};

/**
 * ✅ 기본 알림 모달
 */
export const Default: Story = {
 render: (args) => <ModalWrapper {...args} />,
 args: {
  title: "알림",
  children: "이것은 기본 알림 모달입니다.",
  size: "md",
  alert: "notice",
  overlay: true,
  align: "center",
 },
};

/**
 * ✅ 성공 모달
 */
export const Success: Story = {
 render: (args) => <ModalWrapper {...args} />,
 args: {
  title: "성공!",
  children: "작업이 정상적으로 완료되었습니다.",
  size: "md",
  alert: "success",
  overlay: true,
  align: "center",
 },
};

/**
 * ✅ 경고 모달
 */
export const Warning: Story = {
 render: (args) => <ModalWrapper {...args} />,
 args: {
  title: "경고!",
  children: "이 작업을 실행하면 되돌릴 수 없습니다.",
  size: "md",
  alert: "warning",
  overlay: true,
  align: "center",
 },
};

/**
 * ✅ 오류 모달
 */
export const Error: Story = {
 render: (args) => <ModalWrapper {...args} />,
 args: {
  title: "오류 발생",
  children: "예기치 않은 오류가 발생했습니다.",
  size: "md",
  alert: "error",
  overlay: true,
  align: "center",
 },
};

/**
 * ✅ 작은 모달
 */
export const Small: Story = {
 render: (args) => <ModalWrapper {...args} />,
 args: {
  title: "작은 모달",
  children: "이것은 작은 크기의 모달입니다.",
  size: "sm",
  alert: "notice",
  overlay: true,
  align: "center",
 },
};

/**
 * ✅ 큰 모달
 */
export const Large: Story = {
 render: (args) => <ModalWrapper {...args} />,
 args: {
  title: "큰 모달",
  children: "이것은 큰 크기의 모달입니다.",
  size: "lg",
  alert: "notice",
  overlay: true,
  align: "center",
 },
};

/**
 * ✅ 왼쪽 정렬 모달
 */
export const LeftAligned: Story = {
 render: (args) => <ModalWrapper {...args} />,
 args: {
  title: "왼쪽 정렬 모달",
  children: "이 모달은 왼쪽 정렬되어 있습니다.",
  size: "md",
  alert: "notice",
  overlay: true,
  align: "left",
 },
};