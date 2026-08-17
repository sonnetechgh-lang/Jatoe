import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StatusBadge } from "./status-badge";
import type { DevelopmentStatus } from "@/types/content";

interface MediaCardProps {
  href: string;
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  summary: string;
  status: DevelopmentStatus;
  imageFit?: "cover" | "contain";
}

export function MediaCard({ href, image, imageAlt, eyebrow, title, summary, status, imageFit = "cover" }: MediaCardProps) {
  return (
    <article className="media-card">
      <Link className={`media-card__image media-card__image--${imageFit}`} href={href} tabIndex={-1} aria-hidden="true">
        <Image fill sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw" src={image} alt={imageAlt} />
      </Link>
      <div className="media-card__content">
        <div className="media-card__meta">
          {eyebrow ? <span>{eyebrow}</span> : <span>Jatoe Systems</span>}
          <StatusBadge status={status} />
        </div>
        <h3><Link href={href}>{title}</Link></h3>
        <p>{summary}</p>
        <Link className="text-link" href={href}>
          Learn more <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </article>
  );
}
