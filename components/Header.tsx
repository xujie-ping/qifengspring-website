import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/factory", label: "Factory" },
  { href: "/production", label: "Production" },
  { href: "/quality", label: "Quality" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-4 lg:flex-nowrap lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center border border-blue-200 bg-[linear-gradient(135deg,#0b63ce,#55a5ff)] text-sm font-black text-white shadow-[0_14px_30px_rgba(11,99,206,0.22)]">
            QF
          </span>
          <span>
            <strong className="block text-lg font-bold text-white">Qifeng Industrial Spring</strong>
            <small className="block text-xs uppercase tracking-[0.16em] text-steel-300">Automotive Components Supplier</small>
          </span>
        </Link>
        <nav className="order-3 flex w-full items-center gap-5 overflow-x-auto text-sm font-semibold text-slate-700 lg:order-none lg:w-auto lg:gap-8 lg:overflow-visible">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap border-b border-transparent py-1 transition hover:border-signal hover:text-signal">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden border border-signal bg-signal px-5 py-3 text-sm font-bold text-white transition hover:border-blue-700 hover:bg-blue-700 md:inline-flex"
        >
          Request RFQ
        </Link>
      </div>
    </header>
  );
}
