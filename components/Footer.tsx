import Link from "next/link";
import { getSettings } from "@/lib/cms";

export function Footer() {
  const settings = getSettings();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="border-b border-white/10 bg-navy-950 px-5 py-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.14em] text-steel-300">
          <span>Custom spring engineering for industrial buyers</span>
          <span className="text-signal">RFQ support: {settings.email}</span>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 text-steel-300 md:grid-cols-[1.4fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <strong className="text-xl text-white">{settings.companyName}</strong>
          <p className="mt-4 max-w-xl leading-7">
            B2B spring manufacturing for automotive starters, alternator regulators, one-way clutches, shock absorbers,
            steering systems, home appliances and power tools.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Pages</h2>
          <div className="mt-4 grid gap-2">
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/factory">Factory</Link>
            <Link href="/production">Production</Link>
            <Link href="/quality">Quality</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Contact</h2>
          <a className="mt-4 block text-signal" href={`mailto:${settings.email}`}>
            {settings.email}
          </a>
          {settings.whatsapp ? <p className="mt-2 text-steel-300">WhatsApp: {settings.whatsapp}</p> : null}
          {settings.address ? <p className="mt-2 text-steel-300">{settings.address}</p> : null}
        </div>
      </div>
    </footer>
  );
}
