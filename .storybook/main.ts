import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
 stories: ["../src/**/**/*.stories.@(js|jsx|ts|tsx|mdx)"],

 addons: [
  "@storybook/addon-essentials",
  "@storybook/addon-onboarding",
  "@chromatic-com/storybook",
  "@storybook/addon-interactions",
  "@storybook/addon-mdx-gfm",
 ],

 framework: {
  name: "@storybook/react-vite",
  options: {},
 },

 docs: {
  autodocs: true,
 },

 typescript: {
  reactDocgen: "react-docgen-typescript",
 },
};
export default config;