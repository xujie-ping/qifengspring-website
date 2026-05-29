import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { JsonLd } from "@/components/JsonLd";
import { getProducts } from "@/lib/cms";
import { breadcrumbSchema, pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageSeo.products.title,
  description: pageSeo.products.description,
  keywords: pageSeo.products.keywords,
  alternates: { canonical: pageSeo.products.path }
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <main className="metal-grid bg-navy-950 px-5 py-24 lg:px-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }])} />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-signal">Product Center</p>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Custom industrial spring product families.
          </h1>
          <p className="mt-6 text-lg leading-8 text-steel-300">
            White-background product visuals and SEO-focused category pages help global buyers review spring types,
            applications and RFQ fit before sending drawings.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <section className="technical-surface mt-20 border border-white/10 p-8 md:p-10">
          <SectionHeading
            eyebrow="Customization"
            title="Send drawings, samples or operating requirements."
            copy="Available options include spring steel, stainless steel, flat wire, surface treatment, load testing, custom packing and export documentation."
          />
        </section>
      </div>
    </main>
  );
}
