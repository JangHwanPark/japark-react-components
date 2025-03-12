import { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";

/**
 * `Tag` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof Tag> = {
 title: "Data Display/Tag",
 component: Tag,
 tags: ["autodocs"],
 argTypes: {
  children: { control: "text" },
  theme: {
   control: "radio",
   options: [
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
    "light",
    "dark",
   ],
  },
  size: {
   control: "radio",
   options: ["sm", "md", "lg"],
  },
  variant: {
   control: "radio",
   options: ["filled", "outlined"],
  },
  closable: { control: "boolean" },
 },
};

export default meta;
type Story = StoryObj<typeof Tag>;

/**
 * ✅ 기본 태그
 */
export const Default: Story = {
 args: {
  children: "Default Tag",
 },
};

/**
 * ✅ 성공 (Success) 태그
 */
export const Success: Story = {
 args: {
  children: "Success Tag",
  theme: "success",
 },
};

/**
 * ✅ 경고 (Warning) 태그
 */
export const Warning: Story = {
 args: {
  children: "Warning Tag",
  theme: "warning",
 },
};

/**
 * ✅ 오류 (Error) 태그
 */
export const Error: Story = {
 args: {
  children: "Error Tag",
  theme: "error",
 },
};

/**
 * ✅ 아웃라인 스타일 태그
 */
export const Outlined: Story = {
 args: {
  children: "Outlined Tag",
  variant: "outlined",
 },
};

/**
 * ✅ 닫기 버튼이 있는 태그
 */
export const Closable: Story = {
 args: {
  children: "Closable Tag",
  closable: true,
  theme: "primary",
 },
};