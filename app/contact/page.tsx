import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { RfqForm } from "@/components/RfqForm";
import { JsonLd } from "@/components/JsonLd";
import { getSettings } from "@/lib/cms";
import { breadcrumbSchema, pageSeo } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  keywords: pageSeo.contact.keywords,
  alternates: { canonical: pageSeo.contact.path }
};

export default function ContactPage() {
  const settings = getSettings();
  const whatsappUrl = buildWhatsAppUrl(settings.whatsapp, "Hello, I would like to request a quotation for custom springs.");

  return (
    <main className="metal-grid bg-navy-950 px-5 py-24 lg:px-8">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-signal">Contact Us</p>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Send your drawing, sample photo or technical requirement.
          </h1>
          <p className="mt-6 text-lg leading-8 text-steel-300">
            Please include application, material, wire diameter or flat wire size, load, dimensions, surface treatment,
            annual quantity and packaging requirements for faster quotation.
          </p>
          <div className="mt-10 grid gap-4">
            <a href={`mailto:${settings.email}`} className="flex items-center gap-4 border border-white/10 bg-black p-5 text-signal">
              <Mail className="h-6 w-6" />
              {settings.email}
            </a>
            <a href={whatsappUrl} className="flex items-center gap-4 border border-white/10 bg-black p-5 text-[#25D366]">
              <MessageCircle className="h-6 w-6" />
              WhatsApp Inquiry
            </a>
          </div>
        </div>
        <RfqForm />
      </div>
    </main>
  );
}
