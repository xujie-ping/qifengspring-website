import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getNews } from "@/lib/cms";
import { breadcrumbSchema } from "@/lib/seo";

type NewsPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getNews().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: NewsPageProps): Metadata {
  const item = getNews().find((news) => news.slug === params.slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/news/${item.slug}` },
    openGraph: {
      title: item.title,
      description: item.summary,
      images: [item.image || "/images/factory-forming.jpg"]
    }
  };
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  const item = getNews().find((news) => news.slug === params.slug);
  if (!item) notFound();

  return (
    <main className="metal-grid bg-navy-950 px-5 py-24 lg:px-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "News", path: "/news" },
          { name: item.title, path: `/news/${item.slug}` }
        ])}
      />
      <article className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-signal">{item.date}</p>
        <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">{item.title}</h1>
        <p className="mt-6 text-xl leading-8 text-steel-300">{item.summary}</p>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden border border-white/10 bg-black shadow-industrial">
          <Image src={item.image || "/images/factory-forming.jpg"} alt={item.title} fill priority className="object-cover opacity-90" />
        </div>
        <div className="prose prose-invert prose-lg mt-10 max-w-none whitespace-pre-line leading-8 text-steel-200">
          {item.content}
        </div>
      </article>
    </main>
  );
}
