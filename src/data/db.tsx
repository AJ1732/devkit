import figma from "../assets/logos/figma.svg";
import framer from "../assets/images/framer.png";
import webflow from "../assets/logos/webflow.svg";

import template from "../assets/images/templates.png"
import assets from "../assets/images/assests.png"
import components from "../assets/images/components.png"
import wireframes from "../assets/images/wireframes.png"

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

interface CardProps {
  src: string;
  title: string;
  caption: string;
}
export const cards: CardProps[] = [
  {
    src: template,
    title: "templates",
    caption: "Explore 2300+ beautiful templates",
  },
  {
    src: assets,
    title: "assets",
    caption: "Great assets for all your design needs",
  },
  {
    src: components,
    title: "components",
    caption: "Discover 2300+ utilities & components",
  },
  {
    src: wireframes,
    title: "wireframes",
    caption: "Carefully crafted wireframes and layouts",
  },
];
