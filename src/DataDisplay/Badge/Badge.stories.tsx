import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

/**
 * `Badge` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof Badge> = {
 title: "Data Display/Badge",
 component: Badge,
 tags: ["autodocs"],
 argTypes: {
  count: { control: { type: "number", min: 0, max: 100, step: 1 } },
  hideWhenZero: { control: "boolean" },
  className: { control: "text" },
 },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * ✅ 기본 뱃지
 */
export const Default: Story = {
 args: {
  count: 5,
 },
};

/**
 * ✅ 큰 숫자의 뱃지
 */
export const LargeCount: Story = {
 args: {
  count: 99,
 },
};

/**
 * ✅ 숫자가 0일 때 숨김 (`hideWhenZero` 활성화)
 */
export const HiddenWhenZero: Story = {
 args: {
  count: 0,
  hideWhenZero: true,
 },
};

/**
 * ✅ 커스텀 스타일 적용
 */
export const CustomStyle: Story = {
 args: {
  count: 8,
  className: "text-lg bg-gray-800 p-2 rounded-lg",
 },
};