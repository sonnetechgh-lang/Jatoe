import { ButtonLink } from "@/components/ui/button-link";

export function ContactCta({ title = "Tell us what you want to solve. We’ll help you explore what is possible." }: { title?: string }) {
  return (
    <section className="contact-cta section">
      <div className="container contact-cta__inner">
        <div><p className="eyebrow">Start a conversation</p><h2>{title}</h2></div>
        <ButtonLink href="/contact" variant="light">Contact Jatoe</ButtonLink>
      </div>
    </section>
  );
}
