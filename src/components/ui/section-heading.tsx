import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
}

export function SectionHeading({ eyebrow, title, description, align = "left", inverse }: SectionHeadingProps) {
  return (
    <div className={cn("section-heading", align === "center" && "section-heading--center", inverse && "section-heading--inverse")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}
