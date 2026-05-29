"use client";

import { useEffect, useMemo, useState } from "react";
import type { CmsData, NewsItem, SiteSettings } from "@/lib/cms";
import type { Product } from "@/data/products";

type Tab = "products" | "news" | "settings";

const emptyProduct: Product = {
  slug: "new-product",
  name: "New Product",
  category: "Custom Springs",
  summary: "Short product summary for product cards.",
  description: "Detailed product description for SEO and product detail pages.",
  keywords: ["custom spring"],
  applications: ["Automotive components"],
  image: "/images/product-starter.jpg"
};

const emptyNews: NewsItem = {
  slug: "new-news",
  title: "New Manufacturing News",
  summary: "Short news summary for listing pages.",
  content: "Write the full article content here.",
  image: "/images/factory-forming.jpg",
  date: new Date().toISOString().slice(0, 10)
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function splitList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<Tab>("products");
  const [cms, setCms] = useState<CmsData | null>(null);
  const [status, setStatus] = useState("");

  const headers = useMemo(() => ({ "x-admin-password": password }), [password]);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin-password");
    if (saved) {
      setPassword(saved);
    }
  }, []);

  async function loadCms(pass = password) {
    setStatus("Loading admin data...");
    const response = await fetch("/api/admin/cms", {
      headers: { "x-admin-password": pass },
      cache: "no-store"
    });

    if (!response.ok) {
      setStatus("Invalid password or admin API unavailable.");
      setAuthed(false);
      return;
    }

    const data = (await response.json()) as CmsData;
    setCms(data);
    setAuthed(true);
    sessionStorage.setItem("admin-password", pass);
    setStatus("Admin data loaded.");
  }

  async function saveCms() {
    if (!cms) return;
    setStatus("Saving...");
    const response = await fetch("/api/admin/cms", {
      method: "PUT",
      headers: {
        ...headers,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cms)
    });

    setStatus(response.ok ? "Saved successfully." : "Save failed.");
  }

  async function uploadImage(file: File, onDone: (url: string) => void) {
    const formData = new FormData();
    formData.append("file", file);
    setStatus("Uploading image...");
    const response = await fetch("/api/admin/upload", {
      method: "POST",
      headers,
      body: formData
    });
    const result = await response.json();
    if (!response.ok) {
      setStatus(result.error || "Upload failed.");
      return;
    }
    onDone(result.url);
    setStatus(`Image uploaded: ${result.url}`);
  }

  function updateProduct(index: number, patch: Partial<Product>) {
    if (!cms) return;
    const products = cms.products.map((product, itemIndex) => (itemIndex === index ? { ...product, ...patch } : product));
    setCms({ ...cms, products });
  }

  function updateNews(index: number, patch: Partial<NewsItem>) {
    if (!cms) return;
    const news = cms.news.map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item));
    setCms({ ...cms, news });
  }

  function updateSettings(patch: Partial<SiteSettings>) {
    if (!cms) return;
    setCms({ ...cms, settings: { ...cms.settings, ...patch } });
  }

  if (!authed || !cms) {
    return (
      <main className="metal-grid min-h-screen bg-navy-950 px-5 py-24 lg:px-8">
        <section className="mx-auto max-w-xl border border-white/10 bg-black p-8 shadow-industrial">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-signal">Admin Login</p>
          <h1 className="text-4xl font-semibold text-white">Website Management</h1>
          <p className="mt-4 leading-7 text-steel-300">
            Enter the admin password to manage products, news, images and contact information.
          </p>
          <input
            className="mt-8 min-h-12 w-full border border-white/10 bg-navy-900 px-4 text-white outline-none focus:border-signal"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Admin password"
          />
          <button className="mt-4 w-full bg-signal px-6 py-4 font-bold text-navy-950 transition hover:bg-white" onClick={() => loadCms()}>
            Login
          </button>
          {status ? <p className="mt-4 text-sm text-steel-300">{status}</p> : null}
        </section>
      </main>
    );
  }

  return (
    <main className="metal-grid min-h-screen bg-navy-950 px-5 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-signal">Admin Panel</p>
            <h1 className="text-4xl font-semibold text-white">Website Management</h1>
          </div>
          <button className="bg-signal px-6 py-3 font-bold text-navy-950 transition hover:bg-white" onClick={saveCms}>
            Save All Changes
          </button>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {(["products", "news", "settings"] as Tab[]).map((item) => (
            <button
              key={item}
              className={item === tab ? "bg-signal px-5 py-3 font-bold text-navy-950" : "border border-white/10 px-5 py-3 font-bold text-white"}
              onClick={() => setTab(item)}
            >
              {item === "products" ? "Product Management" : item === "news" ? "News Management" : "Contact Settings"}
            </button>
          ))}
        </div>

        {status ? <p className="mt-5 border border-white/10 bg-black/40 p-4 text-sm text-steel-200">{status}</p> : null}

        {tab === "products" ? (
          <section className="mt-8 grid gap-6">
            <button
              className="w-fit border border-signal px-5 py-3 font-bold text-signal"
              onClick={() => setCms({ ...cms, products: [...cms.products, { ...emptyProduct, slug: `new-product-${cms.products.length + 1}` }] })}
            >
              Add Product
            </button>
            {cms.products.map((product, index) => (
              <div key={`${product.slug}-${index}`} className="technical-surface grid gap-4 border border-white/10 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-white">{product.name}</h2>
                  <button className="text-red-300" onClick={() => setCms({ ...cms, products: cms.products.filter((_, itemIndex) => itemIndex !== index) })}>
                    Delete
                  </button>
                </div>
                <AdminInput label="Name" value={product.name} onChange={(value) => updateProduct(index, { name: value, slug: slugify(value) || product.slug })} />
                <AdminInput label="Slug" value={product.slug} onChange={(value) => updateProduct(index, { slug: slugify(value) })} />
                <AdminInput label="Category" value={product.category} onChange={(value) => updateProduct(index, { category: value })} />
                <AdminInput label="Summary" value={product.summary} onChange={(value) => updateProduct(index, { summary: value })} />
                <AdminTextarea label="Description" value={product.description} onChange={(value) => updateProduct(index, { description: value })} />
                <AdminInput label="Keywords, comma separated" value={product.keywords.join(", ")} onChange={(value) => updateProduct(index, { keywords: splitList(value) })} />
                <AdminInput label="Applications, comma separated" value={product.applications.join(", ")} onChange={(value) => updateProduct(index, { applications: splitList(value) })} />
                <ImageUpload value={product.image} onTextChange={(value) => updateProduct(index, { image: value })} onUpload={(file) => uploadImage(file, (url) => updateProduct(index, { image: url }))} />
              </div>
            ))}
          </section>
        ) : null}

        {tab === "news" ? (
          <section className="mt-8 grid gap-6">
            <button
              className="w-fit border border-signal px-5 py-3 font-bold text-signal"
              onClick={() => setCms({ ...cms, news: [...cms.news, { ...emptyNews, slug: `new-news-${cms.news.length + 1}` }] })}
            >
              Add News
            </button>
            {cms.news.map((item, index) => (
              <div key={`${item.slug}-${index}`} className="technical-surface grid gap-4 border border-white/10 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                  <button className="text-red-300" onClick={() => setCms({ ...cms, news: cms.news.filter((_, itemIndex) => itemIndex !== index) })}>
                    Delete
                  </button>
                </div>
                <AdminInput label="Title" value={item.title} onChange={(value) => updateNews(index, { title: value, slug: slugify(value) || item.slug })} />
                <AdminInput label="Slug" value={item.slug} onChange={(value) => updateNews(index, { slug: slugify(value) })} />
                <AdminInput label="Date" value={item.date} onChange={(value) => updateNews(index, { date: value })} />
                <AdminInput label="Summary" value={item.summary} onChange={(value) => updateNews(index, { summary: value })} />
                <AdminTextarea label="Content" value={item.content} onChange={(value) => updateNews(index, { content: value })} />
                <ImageUpload value={item.image} onTextChange={(value) => updateNews(index, { image: value })} onUpload={(file) => uploadImage(file, (url) => updateNews(index, { image: url }))} />
              </div>
            ))}
          </section>
        ) : null}

        {tab === "settings" ? (
          <section className="technical-surface mt-8 grid gap-5 border border-white/10 p-6">
            <AdminInput label="Company Name" value={cms.settings.companyName} onChange={(value) => updateSettings({ companyName: value })} />
            <AdminInput label="Email" value={cms.settings.email} onChange={(value) => updateSettings({ email: value })} />
            <AdminInput label="WhatsApp Numbers, comma separated" value={cms.settings.whatsapp} onChange={(value) => updateSettings({ whatsapp: value })} />
            <AdminTextarea label="Address / Short Company Note" value={cms.settings.address} onChange={(value) => updateSettings({ address: value })} />
          </section>
        ) : null}
      </div>
    </main>
  );
}

function AdminInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-steel-300">
      {label}
      <input className="min-h-12 border border-white/10 bg-navy-900 px-4 text-base text-white outline-none focus:border-signal" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function AdminTextarea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-steel-300">
      {label}
      <textarea className="min-h-32 border border-white/10 bg-navy-900 px-4 py-3 text-base text-white outline-none focus:border-signal" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function ImageUpload({ value, onTextChange, onUpload }: { value: string; onTextChange: (value: string) => void; onUpload: (file: File) => void }) {
  return (
    <div className="grid gap-2">
      <AdminInput label="Image URL" value={value} onChange={onTextChange} />
      <input
        className="block w-full border border-white/10 bg-black/40 p-3 text-sm text-steel-200"
        type="file"
        accept="image/jpeg,image/png,image/webp,image/svg+xml"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) onUpload(file);
        }}
      />
    </div>
  );
}
