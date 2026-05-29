import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { getProducts } from "@/lib/cms";
import { absoluteUrl, breadcrumbSchema, productSchema } from "@/lib/seo";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const products = getProducts();
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return {};

  return {
    title: `${product.name} Manufacturer`,
    description: product.description,
    keywords: product.keywords,
    alternates: {
      canonical: `/products/${product.slug}`
    },
    openGraph: {
      title: `${product.name} Manufacturer`,
      description: product.description,
      url: absoluteUrl(`/products/${product.slug}`),
      images: [product.image],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} Manufacturer`,
      description: product.description,
      images: [product.image]
    }
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const products = getProducts();
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();

  const schema = productSchema(product.slug);

  return (
    <main className="metal-grid bg-navy-950 px-5 py-24 lg:px-8">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.name, path: `/products/${product.slug}` }
          ]),
          ...(schema ? [schema] : [])
        ]}
      />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden border border-blue-100 bg-white shadow-industrial">
          <Image src={product.image} alt={product.name} fill priority className="object-contain p-8" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-signal">{product.category}</p>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">{product.name}</h1>
          <p className="mt-6 text-lg leading-8 text-steel-300">{product.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {product.keywords.map((keyword) => (
              <span key={keyword} className="border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold text-steel-100">
                {keyword}
              </span>
            ))}
          </div>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-2 bg-signal px-6 py-4 font-bold text-navy-950 transition hover:bg-white">
            Request RFQ <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <section className="mx-auto mt-20 max-w-7xl border border-white/10 bg-black/40 p-8 md:p-10">
        <h2 className="text-3xl font-semibold text-white">Applications and Manufacturing Focus</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {product.applications.map((application) => (
            <div key={application} className="technical-surface border border-white/10 p-6">
              <CheckCircle2 className="h-6 w-6 text-signal" />
              <h2 className="mt-4 text-xl font-semibold text-white">{application}</h2>
              <p className="mt-3 leading-7 text-steel-300">
                Custom dimensions, material selection, load control and packaging can be specified by drawing or sample.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
