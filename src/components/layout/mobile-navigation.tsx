"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/content/site";
import { isNavigationItemActive } from "@/lib/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="mobile-nav">
      <button className="icon-button" type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open ? (
        <div className="mobile-nav__panel">
          <nav aria-label="Mobile navigation">
            {siteConfig.navigation.map((item) => {
              const isActive = isNavigationItemActive(pathname, item.href);

              return (
                <Link
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
