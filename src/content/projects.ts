import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "robot-combat-experience",
    name: "Robot Combat Experience",
    summary: "A team competition where engineering, creativity and excitement meet.",
    description: "Teams will design, build and repair their own robots before putting them to the test in competition. It is engineering people can see, share and enjoy.",
    category: "Innovation event",
    status: "Concept",
    image: "/images/projects/robot-combat-experience.jpg",
    imageAlt: "Two combat robots battling inside a protected robot arena",
  },
  {
    slug: "connected-device-research",
    name: "Connected Device Research",
    summary: "Exploring how sensors, embedded systems and IoT software can work together.",
    description: "We are researching connected devices that can gather information from the world around them, share it and respond in helpful ways.",
    category: "Embedded systems & IoT",
    status: "In development",
    image: "/images/projects/connected-device-research.svg",
    imageAlt: "Diagram showing sensors connected to an edge controller, secure network and monitoring dashboard",
    imageFit: "contain",
  },
  {
    slug: "fabrication-prototypes",
    name: "Fabrication & 3D Prototypes",
    summary: "Quick physical prototypes that help us test shape, fit and function.",
    description: "We turn digital models into physical parts so we can handle them, test them and learn what needs to change.",
    category: "Product development",
    status: "In development",
    image: "/images/projects/fabrication-prototypes.jpg",
    imageAlt: "African metalworker welding a component in an outdoor fabrication workshop",
  },
];
