import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { ProductConstellationGraphic } from "@/components/sections/product-constellation-graphic";
import { MediaCard } from "@/components/ui/media-card";
import { products } from "@/content/products";

export const metadata: Metadata = { title: "Products", description: "Explore technology products currently in development at Jatoe Systems." };
export default function ProductsPage() { return <><PageHero eyebrow="Products" title="Products designed around everyday needs." description="Take a look at the physical technology we are currently working on. Nothing here is for sale yet, and each card shows how far the work has progressed." graphic={<ProductConstellationGraphic />} /><section className="section section--soft"><div className="container"><div className="notice"><strong>Still in development</strong><p>Specifications, prices and availability may change as we test and improve each product. Get in touch if you would like to discuss a concept or work with us.</p></div><div className="media-grid product-grid">{products.map((product) => <MediaCard key={product.slug} href={`/products/${product.slug}`} image={product.image} imageAlt={product.imageAlt} imageFit="contain" title={product.name} summary={product.summary} status={product.status} />)}</div></div></section><ContactCta title="Would you like to test, support or develop a product with us?" /></> }
