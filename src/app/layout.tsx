import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/content/site";

const lexend = localFont({ src: "../../public/fonts/lexend/lexend-variable.ttf", variable: "--font-heading", display: "swap" });
const sourceSans = localFont({ src: "../../public/fonts/source-sans-3/source-sans-3-variable.ttf", variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.jatoesystems.com"),
  title: { default: "Jatoe Systems | Engineering Ideas Into Real-World Solutions", template: "%s | Jatoe Systems" },
  description: siteConfig.description,
  openGraph: { title: siteConfig.name, description: siteConfig.description, type: "website", locale: "en_GH", siteName: siteConfig.name },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lexend.variable} ${sourceSans.variable}`}>
      <body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body>
    </html>
  );
}
