import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../text/Text";
import { Checkbox, CheckboxProps } from "./checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
      <div className="flex items-center gap-2">
        {Story()} 
      <Text size="sm"> Accept </Text>
      </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
