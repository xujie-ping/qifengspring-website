import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, pageSeo } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  keywords: pageSeo.about.keywords,
  alternates: { canonical: pageSeo.about.path }
};

export default function AboutPage() {
  return (
    <main className="bg-[#f7fbff]">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About Us", path: "/about" }])} />
      <section className="metal-grid bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-signal">About Us</p>
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              A focused spring supplier for automotive and industrial component programs.
            </h1>
            <p className="mt-7 text-lg leading-8 text-slate-600">
              We manufacture custom springs for automotive starter systems, alternator regulators, one-way clutches,
              shock absorbers, steering gear assemblies, home appliances and power tools. Our work is centered on stable
              force, accurate forming and consistent batch delivery.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden border border-blue-100 bg-white shadow-industrial">
            <Image src="/images/factory-exterior.jpg" alt="Modern automotive spring factory exterior for B2B supplier qualification" fill className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">Process driven manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-[#f7fbff] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Manufacturing Philosophy"
            title="Technical review first, controlled production second."
            copy="A good spring is not only a drawing dimension. It is material selection, forming accuracy, heat treatment stability, surface protection and reliable packaging working together."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["/images/factory-exterior.jpg", "Factory Exterior", "Modern automotive spring factory exterior for global supplier review"],
              ["/images/hero-factory.jpg", "Production Workshop", "Automotive spring production workshop with CNC forming equipment"],
              ["/images/engineering-team.jpg", "Engineering Team", "Engineering team reviewing custom spring drawings and product samples"]
            ].map(([src, title, alt]) => (
              <figure key={src} className="overflow-hidden border border-blue-100 bg-white shadow-sm">
                <div className="relative aspect-[4/3]">
                  <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <figcaption className="p-5">
                  <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Engineering Review", "Process Control", "Export Service"].map((item) => (
              <div key={item} className="border border-blue-100 bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-950">{item}</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  We support drawings, samples, material requirements, trial assembly feedback and batch order planning for B2B customers.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-4">
            {["Supplier audit ready", "Batch records", "Technical RFQ support", "Export documentation"].map((item) => (
              <div key={item} className="bg-white px-5 py-6 text-sm font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
