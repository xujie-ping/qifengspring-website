import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group relative overflow-hidden border border-blue-100 bg-white shadow-industrial transition duration-300 hover:-translate-y-1 hover:border-signal/50">
      <div className="absolute left-0 top-0 h-full w-1 bg-signal opacity-80" />
      <div className="relative aspect-[4/3] overflow-hidden bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-5 opacity-100 transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-5 top-5 border border-blue-100 bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-signal shadow-sm">
          {product.category}
        </span>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold leading-tight text-slate-950">
          <Link href={`/products/${product.slug}`} className="transition hover:text-signal">
            {product.name}
          </Link>
        </h2>
        <p className="mt-3 leading-7 text-slate-600">{product.summary}</p>
        <div className="mt-5 grid gap-2">
          {product.applications.slice(0, 3).map((item) => (
            <span key={item} className="border-l border-signal/70 bg-blue-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-700">
              {item}
            </span>
          ))}
        </div>
        <Link href={`/products/${product.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-signal">
          View Technical Details
        </Link>
      </div>
    </article>
  );
}
