"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";
import { siteConfig } from "@/content/site";
import { isNavigationItemActive } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const contactIsActive = isNavigationItemActive(pathname, "/contact");

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.navigation.slice(0, -1).map((item) => {
            const isActive = isNavigationItemActive(pathname, item.href);

            return (
              <Link
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "page" : undefined}
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          className={`header-cta${contactIsActive ? " is-active" : ""}`}
          aria-current={contactIsActive ? "page" : undefined}
          href="/contact"
        >
          Start a conversation
        </Link>
        <MobileNavigation />
      </div>
    </header>
  );
}
