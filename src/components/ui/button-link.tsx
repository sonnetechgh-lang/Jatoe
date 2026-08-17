import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
}

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link className={cn("button", `button--${variant}`, className)} href={href}>
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
    </Link>
  );
}
