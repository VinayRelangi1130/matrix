import { Cta } from ".";

export default {
  title: "Components/Cta",
  component: Cta,
  argTypes: {
    property1: {
      options: ["default", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    borderClassName: {},
    text: "Open dApp",
  },
};
