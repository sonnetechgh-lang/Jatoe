import type { Product } from "@/types/content";

export const products: Product[] = [
  {
    slug: "stacked-extension-board",
    name: "Jatoe Stacked Extension Board",
    summary: "A power extension concept designed to be safe, dependable and affordable.",
    description: "We are developing the Jatoe Stacked Extension Board as an everyday power solution that gives users individual control over each outlet.",
    status: "In development",
    features: ["Four universal sockets", "Individual switches", "Three-metre cable", "Safety-led design"],
    image: "/images/products/stacked-extension-board.jpg",
    imageAlt: "White stacked tower extension board with universal sockets and individual switches",
  },
  {
    slug: "affordable-stem-robotics-kit",
    name: "Affordable STEM Robotics Kit",
    summary: "An affordable way for young builders to learn electronics and robotics by doing.",
    description: "This kit is being designed to help students discover electronics, programming and robotics through projects they can build themselves.",
    status: "In development",
    features: ["For children and students", "Hands-on STEM learning", "Accessible component set", "Project-led lessons"],
    image: "/images/products/stem-robotics-kit.jpg",
    imageAlt: "Arduino board, sensors, motors and breadboards arranged as a STEM learning toolkit",
  },
  {
    slug: "portable-study-lamp",
    name: "Portable Study Lamp",
    summary: "An affordable light that students can carry and use wherever they study.",
    description: "We are exploring a simple, dependable lamp for students who need a light they can move easily between study spaces.",
    status: "Concept",
    features: ["Student-focused", "Portable format", "Affordable direction", "Product design in progress"],
    image: "/images/products/portable-study-lamp.jpg",
    imageAlt: "Compact white foldable LED study lamp",
  },
  {
    slug: "bench-power-supply",
    name: "Bench Power Supply",
    summary: "A workbench power tool for students, technicians and electronics makers.",
    description: "This bench power supply is intended for testing circuits and building prototypes in classrooms, labs and workshops.",
    status: "Concept",
    features: ["For electronics testing", "Student and technician focused", "Workbench format", "Development beginning"],
    image: "/images/products/bench-power-supply.jpg",
    imageAlt: "Electronics workbench with test equipment and circuit boards",
  },
];
