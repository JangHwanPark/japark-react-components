import { Meta, StoryObj } from "@storybook/react";
import TextField from "./TextField";

/**
 * `TextField` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof TextField> = {
 title: "Inputs/TextField",
 component: TextField,
 tags: ["autodocs"],
 argTypes: {
  label: { control: "text" },
  helperText: { control: "text" },
  error: { control: "boolean" },
  fullWidth: { control: "boolean" },
  variant: {
   control: "radio",
   options: ["outlined", "filled", "standard"],
  },
  placeholder: { control: "text" },
  disabled: { control: "boolean" },
 },
};

export default meta;
type Story = StoryObj<typeof TextField>;

/**
 * ✅ 기본 텍스트 필드
 */
export const Default: Story = {
 args: {
  label: "Name",
  placeholder: "Enter your name",
  variant: "outlined",
 },
};

/**
 * ✅ 에러 상태
 */
export const Error: Story = {
 args: {
  label: "Email",
  placeholder: "Enter your email",
  helperText: "Invalid email address",
  error: true,
 },
};

/**
 * ✅ 헬퍼 텍스트 포함
 */
export const WithHelperText: Story = {
 args: {
  label: "Password",
  placeholder: "Enter your password",
  helperText: "Must be at least 8 characters",
 },
};

/**
 * ✅ 채워진(filled) 스타일
 */
export const Filled: Story = {
 args: {
  label: "Username",
  placeholder: "Enter username",
  variant: "filled",
 },
};

/**
 * ✅ 하단 보더 스타일 (standard)
 */
export const Standard: Story = {
 args: {
  label: "Phone Number",
  placeholder: "Enter your phone number",
  variant: "standard",
 },
};

/**
 * ✅ 전체 너비 적용
 */
export const FullWidth: Story = {
 args: {
  label: "Address",
  placeholder: "Enter your address",
  fullWidth: true,
 },
};

/**
 * ✅ 비활성화 상태
 */
export const Disabled: Story = {
 args: {
  label: "Disabled Input",
  placeholder: "You can't type here",
  disabled: true,
 },
};