import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

/**
 * `Tooltip` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof Tooltip> = {
 title: "Data Display/Tooltip",
 component: Tooltip,
 tags: ["autodocs"],
 argTypes: {
  text: { control: "text" },
  position: {
   control: "radio",
   options: ["top", "bottom", "left", "right"],
  },
  arrow: { control: "boolean" },
 },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/**
 * ✅ 기본 툴팁 (위쪽)
 */
export const Default: Story = {
 args: {
  text: "기본 툴팁",
  position: "top",
 },
};

/**
 * ✅ 아래쪽 툴팁
 */
export const Bottom: Story = {
 args: {
  text: "아래쪽 툴팁",
  position: "bottom",
 },
};

/**
 * ✅ 왼쪽 툴팁
 */
export const Left: Story = {
 args: {
  text: "왼쪽 툴팁",
  position: "left",
 },
};

/**
 * ✅ 오른쪽 툴팁
 */
export const Right: Story = {
 args: {
  text: "오른쪽 툴팁",
  position: "right",
 },
};

/**
 * ✅ 화살표가 있는 툴팁
 */
export const WithArrow: Story = {
 args: {
  text: "화살표 포함 툴팁",
  position: "top",
  arrow: true,
 },
};