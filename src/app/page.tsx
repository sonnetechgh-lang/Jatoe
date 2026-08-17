import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Box, CircuitBoard, GraduationCap, Lightbulb, MoveRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { MediaCard } from "@/components/ui/media-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactCta } from "@/components/sections/contact-cta";
import { products } from "@/content/products";
import { projects } from "@/content/projects";

const capabilities = [
  { icon: Box, number: "01", title: "Engineering & product development", text: "We take promising ideas from the first sketch to working physical prototypes." },
  { icon: GraduationCap, number: "02", title: "STEM & robotics education", text: "Children and young people learn technology by building projects of their own." },
  { icon: CircuitBoard, number: "03", title: "Software, embedded systems & IoT", text: "We connect hardware and software to create devices that sense, communicate and respond." },
  { icon: Lightbulb, number: "04", title: "Innovation experiences", text: "Hands-on workshops, challenges and competitions make engineering exciting and memorable." },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__media"><Image fill priority sizes="100vw" src="/images/home/engineering-team-hero.jpg" alt="Black Ghanaian student assembling an electronics project with guidance from an instructor" /></div>
        <div className="home-hero__shade" />
        <div className="container home-hero__content">
          <p className="eyebrow">Engineering · Technology · Innovation</p>
          <h1>Engineering ideas into <span>real-world solutions.</span></h1>
          <p className="home-hero__summary">We build helpful products, teach hands-on engineering and help good ideas find their way into the real world.</p>
          <div className="home-hero__actions"><ButtonLink href="/projects">Explore our work</ButtonLink><ButtonLink href="/contact" variant="light">Contact us</ButtonLink></div>
        </div>
        <a className="home-hero__scroll" href="#capabilities" aria-label="Scroll to our capabilities"><ArrowDown aria-hidden="true" /></a>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="container">
          <div className="split-heading"><SectionHeading eyebrow="What we do" title="One engineering ecosystem. Many ways to build." /><p>We bring teaching, experimentation and product development under one roof. An idea can be learned, tested and shaped into something that works.</p></div>
          <div className="capability-grid">
            {capabilities.map(({ icon: Icon, number, title, text }) => <article className="capability-card" key={number}><div className="capability-card__top"><Icon aria-hidden="true" size={30} strokeWidth={1.5} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container"><SectionHeading eyebrow="Products in development" title="Good technology starts with a clear problem." description="We are working on products for homes, classrooms, workshops and makers. Each listing shows exactly where the work stands." />
          <div className="media-grid">{products.slice(0, 3).map((product) => <MediaCard key={product.slug} href={`/products/${product.slug}`} image={product.image} imageAlt={product.imageAlt} imageFit="contain" title={product.name} summary={product.summary} status={product.status} />)}</div>
          <div className="section-link"><Link className="text-link" href="/products">View all product concepts <MoveRight aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="story section">
        <div className="story__grid container">
          <div className="story__visual"><div className="story__image"><Image fill sizes="(max-width: 800px) 100vw, 50vw" src="/images/home/stem-student-workshop.jpg" alt="Black students building an electronics project together in an Accra workshop" /></div><div className="story__note"><strong>Learn.</strong><strong>Build.</strong><strong>Create.</strong></div></div>
          <div className="story__copy"><SectionHeading eyebrow="Building future problem-solvers" title="Engineering makes sense when you get to try it." /><p>In our STEM and robotics sessions, learners work directly with electronics, Arduino, programming, IoT and design. They learn by making, testing and fixing.</p><ButtonLink href="/stem-robotics">Explore STEM programs</ButtonLink></div>
        </div>
      </section>

      <section className="projects-preview section">
        <div className="container"><SectionHeading eyebrow="Research & innovation" title="Experiments that move ideas forward." description="Here we share prototypes, research and engineering experiments as they develop. You can see what is still an idea, what we are testing and what is ready." inverse />
          <div className="media-grid">{projects.map((project) => <MediaCard key={project.slug} href={`/projects/${project.slug}`} image={project.image} imageAlt={project.imageAlt} imageFit={project.imageFit} eyebrow={project.category} title={project.name} summary={project.summary} status={project.status} />)}</div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
