import type { Meta, StoryObj } from "@storybook/react";
import { InputErrorMSG } from "@repo/ui/input-error-msg";

const meta: Meta<typeof InputErrorMSG> = {
  component: InputErrorMSG,
};

export default meta;

type Story = StoryObj<typeof InputErrorMSG>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <InputErrorMSG {...props} />,
  name: "Input",
  args: {
    children: "Oh no! There was an error",
  },
};
