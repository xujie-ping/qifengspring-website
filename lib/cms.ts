import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { defaultProducts, type Product } from "@/data/products";

export type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
};

export type SiteSettings = {
  companyName: string;
  email: string;
  whatsapp: string;
  address: string;
};

export type CmsData = {
  products: Product[];
  news: NewsItem[];
  settings: SiteSettings;
};

const cmsPath = path.join(process.cwd(), "data", "cms.json");

export const defaultSettings: SiteSettings = {
  companyName: "Industrial Spring",
  email: "fatmaachab862@gmail.com",
  whatsapp: "",
  address: "Automotive and industrial spring manufacturing supplier"
};

export const defaultNews: NewsItem[] = [
  {
    slug: "spring-rfq-guide",
    title: "How to Prepare a Spring RFQ for Faster Engineering Review",
    summary: "A practical checklist for drawings, material, load, quantity and application details.",
    content:
      "For faster quotation, provide application, material, wire diameter or flat wire size, free length, working load, surface treatment, annual quantity and drawing files whenever available.",
    image: "/images/factory-forming.jpg",
    date: "2026-05-28"
  }
];

export function getDefaultCms(): CmsData {
  return {
    products: defaultProducts,
    news: defaultNews,
    settings: defaultSettings
  };
}

export function getCms(): CmsData {
  if (!existsSync(cmsPath)) {
    return getDefaultCms();
  }

  try {
    const data = JSON.parse(readFileSync(cmsPath, "utf-8")) as Partial<CmsData>;
    const defaults = getDefaultCms();
    return {
      products: Array.isArray(data.products) ? data.products : defaults.products,
      news: Array.isArray(data.news) ? data.news : defaults.news,
      settings: { ...defaults.settings, ...(data.settings || {}) }
    };
  } catch {
    return getDefaultCms();
  }
}

export function writeCms(data: CmsData) {
  mkdirSync(path.dirname(cmsPath), { recursive: true });
  writeFileSync(cmsPath, `${JSON.stringify(data, null, 2)}\n`, "utf-8");
}

export function getProducts() {
  return getCms().products;
}

export function getNews() {
  return getCms().news;
}

export function getSettings() {
  return getCms().settings;
}
