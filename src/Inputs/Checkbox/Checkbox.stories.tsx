import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import { action } from "@storybook/addon-actions";

/**
 * `Checkbox` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof Checkbox> = {
 title: "Inputs/Checkbox",
 component: Checkbox,
 tags: ["autodocs"],
 argTypes: {
  checked: { control: "boolean" },
  defaultChecked: { control: "boolean" },
  indeterminate: { control: "boolean" },
  disabled: { control: "boolean" },
  size: {
   control: "radio",
   options: ["sm", "md", "lg"],
  },
  color: {
   control: "select",
   options: ["primary", "secondary", "success", "error", "warning"],
  },
  onChange: { action: "changed" },
 },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/**
 * ✅ 기본 체크박스
 */
export const Default: Story = {
 args: {
  checked: false,
  size: "md",
  color: "primary",
  onChange: action("changed"),
 },
};

/**
 * ✅ 체크된 상태
 */
export const Checked: Story = {
 args: {
  checked: true,
  size: "md",
  color: "success",
  onChange: action("changed"),
 },
};

/**
 * ✅ 비활성화된 체크박스
 */
export const Disabled: Story = {
 args: {
  checked: false,
  disabled: true,
  size: "md",
  color: "secondary",
 },
};

/**
 * ✅ 인디터미네이트 상태
 */
export const Indeterminate: Story = {
 args: {
  indeterminate: true,
  size: "lg",
  color: "warning",
  onChange: action("changed"),
 },
};

/**
 * ✅ 작은 체크박스
 */
export const Small: Story = {
 args: {
  checked: true,
  size: "sm",
  color: "error",
  onChange: action("changed"),
 },
};

/**
 * ✅ 큰 체크박스
 */
export const Large: Story = {
 args: {
  checked: true,
  size: "lg",
  color: "success",
  onChange: action("changed"),
 },
};