import { Container } from ".";

export default {
  title: "Components/Container",
  component: Container,
  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    imgClassName: {},
    img: "https://c.animaapp.com/Zndjl2ps/img/7avabzyytaliootvgguafuelphu-svg.svg",
    img1: "https://c.animaapp.com/Zndjl2ps/img/l1ntbtj8px6kzrliscis56etwre-svg.svg",
  },
};
