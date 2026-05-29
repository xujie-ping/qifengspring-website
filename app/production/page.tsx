import type { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbSchema, pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageSeo.production.title,
  description: pageSeo.production.description,
  keywords: pageSeo.production.keywords,
  alternates: { canonical: pageSeo.production.path }
};

const productionSteps = [
  {
    src: "/images/spring-forming-process.jpg",
    title: "Spring Forming Process",
    alt: "CNC spring forming process for precision automotive springs",
    copy: "CNC coiling and forming cells support compression, torsion, flat and formed wire spring programs."
  },
  {
    src: "/images/heat-treatment.jpg",
    title: "Heat Treatment",
    alt: "Heat treatment line for precision automotive springs in a clean factory",
    copy: "Thermal process presentation supports stable force, stress relief and repeatable batch performance."
  },
  {
    src: "/images/surface-treatment.jpg",
    title: "Surface Treatment",
    alt: "Surface treatment process for automotive precision springs",
    copy: "Surface protection and finishing options can be specified according to application and drawing requirements."
  },
  {
    src: "/images/export-packaging.jpg",
    title: "Packaging",
    alt: "Export packaging area for automotive spring batch shipments",
    copy: "Organized packing visuals help overseas buyers understand shipment readiness and batch control."
  }
];

export default function ProductionPage() {
  return (
    <main className="bg-white px-5 py-24 lg:px-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Production", path: "/production" }])} />
      <div className="mx-auto max-w-7xl">
        <h1 className="sr-only">Custom Spring Production Process</h1>
        <SectionHeading
          eyebrow="Production Process"
          title="From forming to export packaging, every step looks supplier-audit ready."
          copy="The production page uses realistic manufacturing visuals to show process capability without relying on copied reference-site images or third-party branding."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {productionSteps.map((item, index) => (
            <article key={item.src} className="grid overflow-hidden border border-blue-100 bg-[#f7fbff] shadow-industrial lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="p-7">
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-signal">Step {index + 1}</span>
                <h2 className="mt-4 text-2xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
