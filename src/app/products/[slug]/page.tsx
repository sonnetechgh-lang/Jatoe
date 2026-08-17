import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { StatusBadge } from "@/components/ui/status-badge";
import { ButtonLink } from "@/components/ui/button-link";
import { products } from "@/content/products";

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = products.find((product) => product.slug === slug); return item ? { title: item.name, description: item.summary } : {}; }
export default async function ProductDetail({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const product = products.find((item) => item.slug === slug); if (!product) notFound(); return <section className="detail section"><div className="detail__grid container"><div className="detail__image detail__image--product"><Image fill priority sizes="(max-width: 800px) 100vw, 50vw" src={product.image} alt={product.imageAlt} /></div><div className="detail__copy"><StatusBadge status={product.status} /><h1>{product.name}</h1><p className="detail__lead">{product.description}</p><h2>What we are working towards</h2><ul>{product.features.map((feature) => <li key={feature}><Check aria-hidden="true" size={18} />{feature}</li>)}</ul><div className="notice"><strong>Not currently for sale</strong><p>We are still developing this product, so its final specifications, price and release date have not been confirmed.</p></div><ButtonLink href="/contact">Ask about this product</ButtonLink></div></div></section> }
