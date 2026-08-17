import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { SocialMediaIcons } from "@/components/ui/social-media-icons";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Jatoe Systems about products, school programs, engineering projects, partnerships and sponsorship.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with what you want to make or solve."
        description="Tell us what you are working on and where you could use some help. We are open to product enquiries, school programs, engineering projects, sponsorships and partnerships."
        image="/images/contact-smiling-woman-tablet.jpg"
        imageAlt="A smiling Black woman looking at and using a tablet"
      />
      <section className="contact-page section">
        <div className="contact-page__grid container">
          <div className="contact-page__aside">
            <p className="eyebrow">Contact details</p>
            <h2>Let&apos;s find the right next step.</h2>
            <p>
              Email, call or message us on WhatsApp. You can also use the form to
              share what you have in mind.
            </p>
            <a className="contact-method" href={`mailto:${siteConfig.email}`}>
              <Mail aria-hidden="true" />
              <div>
                <strong>Email</strong>
                <span>{siteConfig.email}</span>
              </div>
            </a>
            <a className="contact-method" href={siteConfig.phoneHref}>
              <Phone aria-hidden="true" />
              <div>
                <strong>Phone</strong>
                <span>{siteConfig.phone}</span>
              </div>
            </a>
            <a
              className="contact-method"
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              <div>
                <strong>WhatsApp</strong>
                <span>{siteConfig.phone}</span>
              </div>
            </a>
            <div className="contact-method">
              <MapPin aria-hidden="true" />
              <div>
                <strong>Location</strong>
                <span>Ghana</span>
              </div>
            </div>
            <div className="contact-socials">
              <strong>Follow Jatoe Systems</strong>
              <p>Official social profiles are coming soon.</p>
              <SocialMediaIcons />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
