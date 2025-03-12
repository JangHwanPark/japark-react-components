import { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";
import { FaUser } from "react-icons/fa";

/**
 * `Avatar` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof Avatar> = {
 title: "Media/Avatar",
 component: Avatar,
 tags: ["autodocs"],
 argTypes: {
  size: {
   control: "radio",
   options: ["small", "medium", "large"],
  },
  radius: {
   control: "radio",
   options: ["circle", "square"],
  },
  types: {
   control: "radio",
   options: ["text", "img", "icon"],
  },
  imageUrl: { control: "text" },
  text: { control: "text" },
  icon: { control: false }, // 기본적으로 자동 아이콘 사용
  backgroundColor: { control: "color" },
  textColor: { control: "color" },
 },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/**
 * ✅ 기본 텍스트 아바타
 */
export const TextAvatar: Story = {
 args: {
  size: "medium",
  radius: "circle",
  types: "text",
  text: "JD",
  backgroundColor: "#007bff",
  textColor: "#fff",
 },
};

/**
 * ✅ 이미지 아바타
 */
export const ImageAvatar: Story = {
 args: {
  size: "large",
  radius: "circle",
  types: "img",
  imageUrl: "https://source.unsplash.com/random/100x100",
 },
};

/**
 * ✅ 아이콘 아바타
 */
export const IconAvatar: Story = {
 args: {
  size: "small",
  radius: "square",
  types: "icon",
  icon: <FaUser size={24} />,
  backgroundColor: "#ff9800",
  textColor: "#fff",
 },
};

/**
 * ✅ 사각형 텍스트 아바타
 */
export const SquareTextAvatar: Story = {
 args: {
  size: "medium",
  radius: "square",
  types: "text",
  text: "AB",
  backgroundColor: "#4caf50",
  textColor: "#fff",
 },
};