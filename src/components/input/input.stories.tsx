import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { InputConfig, InputRootProps } from "./input";

export default {
  title: "Components/Input",
  component: InputConfig.Root,
  args: {
    children: [
        <InputConfig.Icon>
        <Envelope />
        </InputConfig.Icon>,
        <InputConfig.Input placeholder="your e-mail" />
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {};

export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: [
      <InputConfig.Input placeholder="your e-mail" />
    ],
  },
};

