import type { MetadataRoute } from "next";
import { getNews, getProducts } from "@/lib/cms";
import { absoluteUrl, pageSeo } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const products = getProducts();
  const news = getNews();
  const staticPages = Object.values(pageSeo).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page.path === "/" ? 1 : 0.8
  }));

  const productPages = products.map((product) => ({
    url: absoluteUrl(`/products/${product.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75
  }));
  const newsPages = news.map((item) => ({
    url: absoluteUrl(`/news/${item.slug}`),
    lastModified: item.date ? new Date(item.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticPages, ...productPages, { url: absoluteUrl("/news"), lastModified: now, changeFrequency: "weekly", priority: 0.65 }, ...newsPages];
}
