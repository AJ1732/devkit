import figma from "../assets/images/figma.png";
import framer from "../assets/images/framer.png";
import webflow from "../assets/logos/webflow.svg";

export const interests = [
  "headers",
  "wireframes",
  "buttons",
  "footers",
  "navigation",
  "forms",
  "pricing",
  "UI templates",
  "mobile apps",
  "web",
  "icons",
  "contact",
  "website components",
  "B2B",
  "widgets",
  "UX copy",
  "illustrations",
];

interface Alias {
  icon: string;
  text: string;
}
export const alias: Alias[] = [
  {
    icon: figma,
    text: "figma",
  },
  {
    icon: webflow,
    text: "webflow",
  },
  {
    icon: framer,
    text: "framer",
  },
];
