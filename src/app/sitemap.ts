import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { projects } from "@/content/projects";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jatoesystems.com"; const paths = ["", "/about", "/products", "/projects", "/stem-robotics", "/team", "/contact", ...products.map(({ slug }) => `/products/${slug}`), ...projects.map(({ slug }) => `/projects/${slug}`)]; return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : .7 })); }
