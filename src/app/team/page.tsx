import type { Metadata } from "next";
import { Logo } from "@/components/layout/logo";
import { ContactCta } from "@/components/sections/contact-cta";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";

const teamPlaceholders = Array.from({ length: 11 }, (_, index) => String(index + 2).padStart(2, "0"));

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the multidisciplinary people building Jatoe Systems.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="Different skills, shared purpose."
        description="Jatoe Systems is being built by people who enjoy solving problems, sharing what they know and making things that matter."
        image="/images/Team/team.jpg"
        imageAlt="Four members of the Jatoe Systems team standing together"
        imageQuality={100}
      />
      <section className="team-profiles section">
        <div className="container">
          <div className="team-profiles__intro">
            <div className="team-profiles__logo">
              <Logo inverse />
            </div>
            <SectionHeading
              eyebrow="Meet the team"
              title="The people behind the work."
              description="We are introducing the team as each member approves their information. Private ownership and shareholder details will remain private."
              align="center"
            />
          </div>
          <div className="team-placeholder-grid">
            {teamPlaceholders.map((number) => (
              <article className="team-placeholder-card" key={number}>
                <div className="team-placeholder-card__visual" aria-hidden="true">
                  <span>{number}</span>
                  <i />
                  <i />
                </div>
                <div className="team-placeholder-card__content">
                  <p>Profile coming soon</p>
                  <h3>Team member {number}</h3>
                  <span>Name, role and portrait to be added.</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCta title="Would you like to help us build something worthwhile?" />
    </>
  );
}
