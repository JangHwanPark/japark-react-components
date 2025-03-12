import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

/**
 * `Card` 컴포넌트의 Storybook 문서화
 */
const meta: Meta<typeof Card> = {
 title: "Card/Card",
 component: Card,
 tags: ["autodocs"],
 argTypes: {
  title: { control: "text" },
  description: { control: "text" },
  imgUrl: { control: "text" },
  size: {
   control: "radio",
   options: ["sm", "md", "lg"],
  },
  className: { control: "text" },
 },
};

export default meta;
type Story = StoryObj<typeof Card>;

/**
 * 기본 카드
 */
export const Default: Story = {
 args: {
  title: "Card Title",
  description: "This is a description of the card.",
  imgUrl: "https://source.unsplash.com/random/300x200",
  size: "md",
 },
};

/**
 * 작은 카드
 */
export const Small: Story = {
 args: {
  title: "Small Card",
  description: "This is a smaller card.",
  imgUrl: "https://source.unsplash.com/random/200x150",
  size: "sm",
 },
};

/**
 * 큰 카드
 */
export const Large: Story = {
 args: {
  title: "Large Card",
  description: "This is a larger card.",
  imgUrl: "https://source.unsplash.com/random/400x250",
  size: "lg",
 },
};

/**
 * 이미지 없는 카드
 */
export const NoImage: Story = {
 args: {
  title: "No Image Card",
  description: "This card does not have an image.",
  size: "md",
 },
};