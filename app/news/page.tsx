import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { getNews } from "@/lib/cms";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "News",
  description: "Industrial spring manufacturing news, RFQ guides, product updates and technical purchasing notes.",
  alternates: { canonical: "/news" }
};

export default function NewsPage() {
  const news = getNews();

  return (
    <main className="metal-grid bg-navy-950 px-5 py-24 lg:px-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "News", path: "/news" }])} />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-signal">News</p>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">Manufacturing updates and RFQ knowledge.</h1>
          <p className="mt-6 text-lg leading-8 text-steel-300">
            Publish purchasing guides, factory updates, product notes and spring engineering articles for B2B visitors.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article key={item.slug} className="overflow-hidden border border-white/10 bg-[linear-gradient(180deg,#18212c,#0b1420)] shadow-industrial">
              <div className="relative aspect-[4/3] bg-black">
                <Image src={item.image || "/images/factory-forming.jpg"} alt={item.title} fill className="object-cover opacity-85" />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-signal">{item.date}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  <Link href={`/news/${item.slug}`} className="transition hover:text-signal">
                    {item.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-7 text-steel-300">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
