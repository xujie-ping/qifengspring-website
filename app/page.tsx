import { existsSync, statSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, FileCheck2, Gauge, Globe2, PackageCheck, PlayCircle, Settings2, ShieldCheck, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EquipmentGallery } from "@/components/EquipmentGallery";
import { GlobalMap } from "@/components/GlobalMap";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { QualitySystem } from "@/components/QualitySystem";
import { SectionHeading } from "@/components/SectionHeading";
import { brandNames } from "@/data/products";
import { getProducts } from "@/lib/cms";
import { organizationSchema, websiteSchema } from "@/lib/seo";

const heroProducts = ["Starter Springs", "Alternator Regulator Springs", "One-Way Clutch Flat Springs", "Shock Absorber Springs"];

const trustBlocks = [
  {
    icon: ShieldCheck,
    title: "ISO / IATF Quality Mindset",
    copy: "Built around traceability, controlled batches, inspection discipline and automotive documentation requirements."
  },
  {
    icon: Factory,
    title: "Factory Capability",
    copy: "CNC spring forming, flat wire forming, heat treatment, sample development, sorting and export packing."
  },
  {
    icon: Globe2,
    title: "Export Markets",
    copy: "Prepared for Mexico, United States and European automotive component procurement teams."
  },
  {
    icon: Settings2,
    title: "Custom Engineering",
    copy: "Drawing-based and sample-based development for spring force, dimensions, material and surface treatment."
  }
];

const capabilityRows = [
  ["Engineering Input", "Drawings, samples, material requirements, target load and installation space."],
  ["Manufacturing Control", "CNC forming, tooling control, heat treatment, dimensional checks and batch sorting."],
  ["Quality Evidence", "Inspection records, force review, packaging verification and export-ready documentation."],
  ["Program Support", "RFQ response, trial samples, stable repeat orders and English communication."]
];

const supplierAdvantages: Array<{ icon: LucideIcon; title: string; copy: string }> = [
  {
    icon: Factory,
    title: "Manufacturing Depth",
    copy: "Factory-first presentation with equipment, process and production capability."
  },
  {
    icon: Gauge,
    title: "Stable Engineering",
    copy: "Spring force, material, dimensions and assembly requirements reviewed before production."
  },
  {
    icon: FileCheck2,
    title: "Quality Evidence",
    copy: "ISO/IATF language, inspection workflow and traceability cues for supplier audits."
  },
  {
    icon: PackageCheck,
    title: "Export Ready",
    copy: "Packaging, English documentation and purchasing-team communication for global buyers."
  }
];

export default function HomePage() {
  const products = getProducts();
  const heroVideoPath = path.join(process.cwd(), "public", "videos", "factory-banner.mp4");
  const hasHeroVideo = existsSync(heroVideoPath) && statSync(heroVideoPath).size > 1024;
  const factoryIntroVideoPath = path.join(process.cwd(), "public", "videos", "factory-intro-placeholder.mp4");
  const hasFactoryIntroVideo = existsSync(factoryIntroVideoPath) && statSync(factoryIntroVideoPath).size > 1024;

  return (
    <main>
      <JsonLd data={[organizationSchema(), websiteSchema()]} />

      <section className="relative overflow-hidden bg-white">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-factory.jpg"
          aria-label="Automotive spring factory video banner"
        >
          {hasHeroVideo ? <source src="/videos/factory-banner.mp4" type="video/mp4" /> : null}
        </video>
        <Image src="/images/hero-factory.jpg" alt="Automotive parts spring factory background" fill priority className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(11,99,206,0.2),transparent_30%),linear-gradient(90deg,#ffffff_0%,rgba(239,247,255,0.96)_46%,rgba(239,247,255,0.7)_100%)]" />
        <div className="metal-grid absolute inset-0 opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7fbff] to-transparent" />

        <div className="relative mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[minmax(0,1fr)_430px] lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-signal">
                China Automotive Parts Factory
              </span>
              <span className="border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-600 shadow-sm">
                USD 10M-Level Supplier Positioning
              </span>
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 md:text-7xl">
              Precision automotive springs for global component purchasing teams.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700">
              Qifeng manufactures engineered spring components for starter motors, alternator regulators, one-way clutches,
              shock absorbers, steering systems, home appliances and power tools. Built for buyers who expect factory depth,
              quality evidence and reliable export communication.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex min-h-14 items-center gap-2 bg-signal px-7 py-4 font-bold text-white shadow-[0_18px_40px_rgba(11,99,206,0.24)] transition hover:bg-blue-700">
                Request RFQ Now <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/products" className="inline-flex min-h-14 items-center border border-blue-200 bg-white px-7 py-4 font-bold text-slate-900 shadow-sm transition hover:border-signal hover:text-signal">
                View Core Products
              </Link>
            </div>

            <div className="mt-10 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {heroProducts.map((item) => (
                <div key={item} className="border border-blue-100 bg-white/85 p-4 shadow-sm">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-signal" />
                  <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-800">{item}</h2>
                </div>
              ))}
            </div>
          </div>

          <aside className="premium-panel border border-blue-100 p-6 shadow-industrial">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-signal">Supplier Qualification Snapshot</p>
            <div className="industrial-divider mt-5" />
            <div className="mt-6 grid gap-5">
              {[
                ["Annual Sales Scale", "USD 10M-level supplier positioning"],
                ["Main Buyers", "Mexico, United States and Europe"],
                ["Production Scope", "Automotive starter, alternator and chassis springs"],
                ["Service Mode", "Custom RFQ, sample trial and repeat batch supply"]
              ].map(([label, value]) => (
                <div key={label} className="grid gap-1 border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-steel-400">{label}</span>
                  <strong className="text-lg text-white">{value}</strong>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 border border-signal bg-signal px-5 py-4 font-bold text-white transition hover:bg-blue-700">
              Send Drawing or Sample
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Product Programs"
            title="Automotive spring categories engineered for stable assembly."
            copy="The homepage now speaks directly to purchasing managers and supplier-development engineers: product scope, factory capability, quality system and export readiness are visible in the first scroll."
          />
          <div className="mt-10 grid gap-8 border border-blue-100 bg-white p-5 shadow-industrial lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-8">
            <div className="relative aspect-[16/9] overflow-hidden bg-white">
              <Image
                src="/images/custom-portfolio.jpg"
                alt="Automotive spring manufacturing line with starter torsion spring alternator regulator spring and one-way clutch flat spring"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
            <div className="p-2">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-signal">From Prototype Development To Mass Production</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Custom Automotive Spring Manufacturing
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Drawing-based manufacturing, OEM and ODM support, precision spring engineering, global export experience
                and fast sampling service for automotive component purchasing teams.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Factory Video"
              title="Real manufacturing presence before buyers send drawings."
              copy="A factory tour area with a realistic production-line cover helps procurement teams quickly understand equipment scale, spring output and on-site process control."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                ["CNC spring coiling", "Wire feeding, forming and dimensional consistency for automotive spring programs."],
                ["In-process inspection", "Operators check samples, batches and production condition on the workshop floor."],
                ["Batch-ready output", "Organized spring bins and packing flow support stable repeat supply."]
              ].map(([title, copy]) => (
                <div key={title} className="border border-blue-100 bg-[#f7fbff] p-5 shadow-sm">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-signal" />
                  <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
                  <p className="mt-2 leading-7 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border border-blue-100 bg-slate-950 shadow-industrial">
            <div className="relative aspect-video">
              <video
                className="h-full w-full object-cover"
                controls
                preload="metadata"
                poster="/images/factory-intro-poster.jpg"
                aria-label="Automotive spring factory introduction video"
              >
                {hasFactoryIntroVideo ? <source src="/videos/factory-intro-placeholder.mp4" type="video/mp4" /> : null}
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
              {!hasFactoryIntroVideo ? (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-white/90 text-signal shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
                    <PlayCircle className="h-11 w-11" />
                  </div>
                </div>
              ) : null}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 bg-signal px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#f8fbff]">
                    <Video className="h-4 w-4" /> Factory Tour
                  </span>
                  <span className="bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-900">
                    CNC Coiling · Inspection · Batch Output
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Trust Architecture"
            title="The signals global automotive buyers look for before sending drawings."
            copy="Certification language, factory capability, export market focus and custom engineering are presented as hard procurement evidence instead of decoration."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {trustBlocks.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="premium-panel border border-white/10 p-7">
                  <Icon className="h-10 w-10 text-signal" />
                  <h2 className="mt-6 text-xl font-semibold text-white">{item.title}</h2>
                  <p className="mt-4 leading-7 text-steel-300">{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Factory Capability"
              title="Equipment presentation with a serious automotive supplier tone."
              copy="Large, dark, high-contrast factory visuals create the impression of production depth, while short technical captions keep the page credible and easy to scan."
            />
            <div className="mt-10 grid gap-3">
              {capabilityRows.map(([title, copy]) => (
                <div key={title} className="grid gap-2 border-l-2 border-signal bg-white p-5 shadow-sm">
                  <h2 className="text-lg font-semibold text-white">{title}</h2>
                  <p className="leading-7 text-steel-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <EquipmentGallery />
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Quality System"
            title="ISO/IATF-oriented documentation and batch-control language."
            copy="For Mexico, US and European buyers, quality claims must look structured. The site now emphasizes process control, inspection, traceability and supplier qualification readiness."
          />
          <div className="mt-12">
            <QualitySystem />
          </div>
        </div>
      </section>

      <section className="border-y border-blue-100 bg-[#f7fbff] px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Export Markets"
              title="Designed for global procurement teams in Mexico, the United States and Europe."
              copy="The global map and market cards reinforce international supplier confidence without making unsupported claims."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {[
                ["Mexico", "Automotive clusters and regional component sourcing"],
                ["United States", "Aftermarket, remanufacturing and component programs"],
                ["Europe", "Supplier qualification and engineered parts procurement"]
              ].map(([region, copy]) => (
                <div key={region} className="border border-blue-100 bg-white p-5 shadow-sm">
                  <Globe2 className="mb-4 h-7 w-7 text-signal" />
                  <h2 className="text-xl font-semibold text-white">{region}</h2>
                  <p className="mt-2 leading-7 text-steel-300">{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <GlobalMap />
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Supplier Advantages"
            title="Built to feel credible beside global Tier-1 automotive supplier websites."
            copy="The UI uses a restrained automotive palette, clear engineering language, sharp cards, strong factory imagery and measurable supplier signals."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {supplierAdvantages.map(({ icon: Icon, title, copy }) => {
              return (
                <article key={title} className="premium-panel border border-white/10 p-7">
                  <Icon className="h-9 w-9 text-signal" />
                  <h2 className="mt-6 text-xl font-semibold text-white">{title}</h2>
                  <p className="mt-4 leading-7 text-steel-300">{copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eef6ff] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Automotive Supply Chain Positioning" title="A premium digital presence for serious component purchasing conversations." />
          <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {brandNames.map((brand) => (
              <div key={brand} className="bg-white px-6 py-8 text-center text-xl font-bold uppercase tracking-[0.14em] text-slate-700 shadow-sm">
                {brand}
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-steel-300">
            Market labels are used for supply-chain positioning. Replace this section with authorized customer logos when available.
          </p>
        </div>
      </section>
    </main>
  );
}
