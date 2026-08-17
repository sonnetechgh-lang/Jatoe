import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/ui/status-badge";
import { ButtonLink } from "@/components/ui/button-link";
import { projects } from "@/content/projects";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = projects.find((project) => project.slug === slug); return item ? { title: item.name, description: item.summary } : {}; }
export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound(); return <section className="detail section"><div className="detail__grid container"><div className={`detail__image${project.imageFit === "contain" ? " detail__image--contain" : ""}`}><Image fill priority sizes="(max-width: 800px) 100vw, 50vw" src={project.image} alt={project.imageAlt} /></div><div className="detail__copy"><p className="eyebrow">{project.category}</p><StatusBadge status={project.status} /><h1>{project.name}</h1><p className="detail__lead">{project.description}</p><div className="notice"><strong>Work in progress</strong><p>This project is not finished or publicly available yet. We are using representative images until we can share our own project photography.</p></div><ButtonLink href="/contact">Work with us</ButtonLink></div></div></section> }
