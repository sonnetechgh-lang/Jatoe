import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { SocialMediaIcons } from "@/components/ui/social-media-icons";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__lead">
          <div>
            <p className="eyebrow">Let&apos;s build together</p>
            <h2>Is there an engineering idea you want to explore?</h2>
          </div>
          <Link className="button button--light" href="/contact">Talk to our team <ArrowUpRight aria-hidden="true" size={18} /></Link>
        </div>
        <div className="site-footer__grid">
          <div><Logo inverse /><p>{siteConfig.description}</p></div>
          <div><h3>Explore</h3>{siteConfig.navigation.slice(1, 5).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          <div><h3>Company</h3>{siteConfig.navigation.slice(5).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
          <div>
            <h3>Contact</h3>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            <SocialMediaIcons inverse />
          </div>
        </div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Jatoe Systems</span><span>Engineering ideas into real-world solutions.</span></div>
      </div>
    </footer>
  );
}
