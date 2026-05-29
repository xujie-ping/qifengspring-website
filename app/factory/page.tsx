import type { Metadata } from "next";
import Image from "next/image";
import { EquipmentGallery } from "@/components/EquipmentGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageSeo.factory.title,
  description: pageSeo.factory.description,
  keywords: pageSeo.factory.keywords,
  alternates: { canonical: pageSeo.factory.path }
};

const factoryImages = [
  ["/images/spring-forming-process.jpg", "Spring forming process area"],
  ["/images/heat-treatment.jpg", "Heat treatment line"],
  ["/images/dimension-inspection.jpg", "Sorting and inspection area"],
  ["/images/export-packaging.jpg", "Export packaging area"]
];

export default function FactoryPage() {
  return (
    <main className="metal-grid bg-navy-950 px-5 py-24 lg:px-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Factory", path: "/factory" }])} />
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-signal">Factory Display</p>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Industrial production areas for precision spring manufacturing.
          </h1>
          <p className="mt-6 text-lg leading-8 text-steel-300">
            Production areas are presented with realistic factory visuals for overseas customer audits and supplier qualification review.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {factoryImages.map(([src, alt]) => (
            <div key={src} className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-black shadow-industrial">
              <Image src={src} alt={alt} fill className="object-cover opacity-85" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6">
                <h2 className="text-2xl font-semibold text-white">{alt}</h2>
              </div>
            </div>
          ))}
        </div>
        <section className="mt-20">
          <SectionHeading
            eyebrow="Equipment Matrix"
            title="Manufacturing assets presented for supplier qualification."
            copy="Use this section to show large-scale equipment depth: forming cells, heat treatment, testing, inspection and packaging areas."
          />
          <div className="mt-10">
            <EquipmentGallery />
          </div>
        </section>
        <section className="technical-surface mt-20 border border-white/10 p-8 md:p-10">
          <SectionHeading
            eyebrow="Process Flow"
            title="Material review, forming, heat treatment, inspection and shipment."
            copy="The factory page is designed to show buyers that production capability, inspection workflow and packaging control are part of the same delivery system."
          />
        </section>
      </div>
    </main>
  );
}
