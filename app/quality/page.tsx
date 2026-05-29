import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbSchema, pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageSeo.quality.title,
  description: pageSeo.quality.description,
  keywords: pageSeo.quality.keywords,
  alternates: { canonical: pageSeo.quality.path }
};

const qualityImages = [
  {
    src: "/images/quality-testing.jpg",
    title: "Spring Testing",
    alt: "Automotive spring testing station with force tester and spring samples",
    copy: "Load, return force and sample verification for custom automotive spring programs."
  },
  {
    src: "/images/dimension-inspection.jpg",
    title: "Dimension Inspection",
    alt: "Dimension inspection of automotive springs with digital caliper and optical measuring equipment",
    copy: "Dimensional checks for wire diameter, free length, formed angle and assembly-critical geometry."
  },
  {
    src: "/images/fatigue-testing.jpg",
    title: "Fatigue Testing",
    alt: "Spring fatigue testing equipment for high cycle automotive component validation",
    copy: "Cycle testing presentation for buyers who need confidence before stable repeat orders."
  }
];

export default function QualityPage() {
  return (
    <main className="bg-[#f7fbff] px-5 py-24 lg:px-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Quality", path: "/quality" }])} />
      <div className="mx-auto max-w-7xl">
        <h1 className="sr-only">Automotive Spring Quality Control</h1>
        <SectionHeading
          eyebrow="Quality Control"
          title="Testing and inspection visuals for automotive supplier confidence."
          copy="Quality pages for global buyers need to show real process discipline: testing benches, measurement workflows, fatigue validation and traceable batch thinking."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {qualityImages.map((item) => (
            <article key={item.src} className="overflow-hidden border border-blue-100 bg-white shadow-industrial">
              <div className="relative aspect-[4/3]">
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
