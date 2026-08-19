import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { MediaCard } from "@/components/ui/media-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projects & Innovation", description: "Discover engineering projects, prototypes, research and innovation experiences from Jatoe Systems." };
export default function ProjectsPage() { return <><PageHero eyebrow="Projects & innovation" title="See what we are exploring and building." description="This is where we share experiments, prototypes and research across robotics, electronics, IoT, fabrication and product development." image="/images/projects/projects-page-hero-image.png" imageAlt="Students collaborating on a robotics project" imageQuality={100} /><section className="section"><div className="container"><div className="media-grid">{projects.map((project) => <MediaCard key={project.slug} href={`/projects/${project.slug}`} image={project.image} imageAlt={project.imageAlt} imageFit={project.imageFit} eyebrow={project.category} title={project.name} summary={project.summary} status={project.status} />)}</div></div></section><ContactCta title="Do you have a technical challenge we could explore together?" /></> }
