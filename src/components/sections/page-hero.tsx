import Image from "next/image";
import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  graphic?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  graphic,
}: PageHeroProps) {
  const hasBackgroundImage = Boolean(image);

  return (
    <section
      className={`page-hero${hasBackgroundImage ? " page-hero--background" : ""}`}
    >
      {hasBackgroundImage && image ? (
        <>
          <div className="page-hero__background">
            <Image fill priority sizes="100vw" src={image} alt={imageAlt} />
          </div>
          <div className="page-hero__background-shade" aria-hidden="true" />
        </>
      ) : null}
      <div
        className={`page-hero__grid container${hasBackgroundImage ? " page-hero__grid--background" : ""}`}
      >
        <div className="page-hero__copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {!hasBackgroundImage && graphic ? (
          <div className="page-hero__custom-graphic" aria-hidden="true">
            {graphic}
          </div>
        ) : !hasBackgroundImage ? (
          <div className="page-hero__graphic" aria-hidden="true">
            <span>01</span>
            <div />
          </div>
        ) : null}
      </div>
    </section>
  );
}
