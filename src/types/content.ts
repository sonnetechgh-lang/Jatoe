export type DevelopmentStatus = "In development" | "Concept";

export interface Product {
  slug: string;
  name: string;
  summary: string;
  description: string;
  status: DevelopmentStatus;
  features: string[];
  image: string;
  imageAlt: string;
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  description: string;
  category: string;
  status: DevelopmentStatus;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
}
