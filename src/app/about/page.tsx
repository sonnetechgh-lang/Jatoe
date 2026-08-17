import type { Metadata } from "next";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = { title: "About", description: "Learn about Jatoe Systems, our vision, mission and approach to engineering innovation." };

const statements = [
  { label: "Vision", text: "To become a globally respected engineering and technology company that turns strong ideas into products that solve real problems." },
  { label: "Mission", text: "To build thoughtful technology, create new products and give future problem-solvers the skills and space to bring their ideas to life." },
  { label: "Aim", text: "To bring engineering education, product development and innovation together in one place where people can learn, build and create." },
];

export default function AboutPage() {
  return <><PageHero eyebrow="About Jatoe Systems" title="Built for ideas that deserve to become real." description="We are building an engineering and technology company with interests across electronics, robotics, embedded systems, fabrication, IoT, software, STEM education and product design." image="/images/home/engineering-workbench.jpg" imageAlt="Black woman engineer soldering an electronics project at a workbench" />
    <section className="section"><div className="container"><SectionHeading eyebrow="Our direction" title="We care about useful work and where it can lead." description="Jatoe Systems brings technical education and product building together. We start with clear problems, share our progress honestly and look for ways to make engineering more accessible." /><div className="statement-grid">{statements.map((item, index) => <article key={item.label}><span>0{index + 1}</span><p className="eyebrow">{item.label}</p><p>{item.text}</p></article>)}</div></div></section>
    <section className="principles section section--soft"><div className="container"><SectionHeading eyebrow="How we work" title="Stay curious. Build with care." /><div className="principle-list"><div><span>01</span><h3>Start with the real problem</h3><p>Before choosing the technology, we make sure we understand who it should help and why.</p></div><div><span>02</span><h3>Build to learn</h3><p>A prototype gives us something real to test, question and improve.</p></div><div><span>03</span><h3>Be honest about progress</h3><p>We say clearly whether something is an early idea, a work in progress or ready to use.</p></div><div><span>04</span><h3>Learn by doing</h3><p>Engineering becomes easier to understand when people can make, test and fix things themselves.</p></div></div></div></section><ContactCta /></>;
}
