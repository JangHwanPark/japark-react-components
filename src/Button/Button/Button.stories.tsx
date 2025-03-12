import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

/**
 * `Button` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof Button> = {
 title: "Button/Button",
 component: Button,
 tags: ["autodocs"],
 argTypes: {
  children: { control: "text" },
  size: {
   control: "radio",
   options: ["sm", "md", "lg", "xl"],
  },
  style: {
   control: "radio",
   options: ["text", "contained", "outlined", "disabled"],
  },
  type: {
   control: "radio",
   options: ["button", "submit", "reset"],
  },
  disabled: { control: "boolean" },
 },
};

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * 기본 버튼
 */
export const Default: Story = {
 args: {
  children: "Button",
  size: "md",
  style: "contained",
  disabled: false,
 },
};

/**
 * 텍스트 버튼
 */
export const Text: Story = {
 args: {
  children: "Text Button",
  style: "text",
 },
};

/**
 * 아웃라인 버튼
 */
export const Outlined: Story = {
 args: {
  children: "Outlined Button",
  style: "outlined",
 },
};

/**
 * 비활성화된 버튼
 */
export const Disabled: Story = {
 args: {
  children: "Disabled Button",
  style: "disabled",
  disabled: true,
 },
};