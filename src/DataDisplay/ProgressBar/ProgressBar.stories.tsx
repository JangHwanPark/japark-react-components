import { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";

/**
 * `ProgressBar` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof ProgressBar> = {
 title: "Data Display/ProgressBar",
 component: ProgressBar,
 tags: ["autodocs"],
 argTypes: {
  progress: {
   control: { type: "range", min: 0, max: 100, step: 1 },
  },
 },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

/**
 * ✅ 기본 프로그레스 바 (0%)
 */
export const Default: Story = {
 args: {
  progress: 0,
 },
};

/**
 * ✅ 50% 진행
 */
export const Halfway: Story = {
 args: {
  progress: 50,
 },
};

/**
 * ✅ 75% 진행
 */
export const SeventyFive: Story = {
 args: {
  progress: 75,
 },
};

/**
 * ✅ 100% 완료
 */
export const Complete: Story = {
 args: {
  progress: 100,
 },
};