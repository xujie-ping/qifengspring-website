import { siteKeywords } from "@/data/products";
import { getProducts } from "@/lib/cms";

export const siteUrl = "https://qifengsping.com";
export const siteName = "Industrial Spring";
export const contactEmail = "fatmaachab862@gmail.com";

export const pageSeo = {
  home: {
    title: "China Automotive Parts Factory | Custom Industrial Springs",
    description:
      "USD 10M-level China automotive parts factory manufacturing custom starter springs, alternator regulator springs, one-way clutch flat springs, shock absorber springs, steering gear springs, appliance springs and power tool springs for Mexico, US and Europe buyers.",
    path: "/",
    keywords: siteKeywords
  },
  about: {
    title: "About Industrial Spring Manufacturing",
    description:
      "Learn about our industrial spring manufacturing capability, process control, export service and B2B supply support for automotive component buyers.",
    path: "/about",
    keywords: ["spring factory", "industrial spring manufacturer", "automotive spring supplier", "spring export supplier"]
  },
  products: {
    title: "Product Center | Automotive & Industrial Springs",
    description:
      "Browse custom starter springs, alternator regulator springs, one-way clutch flat springs, shock absorber springs, steering gear springs, appliance springs and power tool springs.",
    path: "/products",
    keywords: siteKeywords
  },
  factory: {
    title: "Factory Display | Spring Forming & Heat Treatment",
    description:
      "View spring forming, heat treatment, sorting, inspection and export packaging areas for automotive and industrial spring production.",
    path: "/factory",
    keywords: ["spring forming factory", "spring heat treatment", "spring inspection", "spring manufacturing process"]
  },
  quality: {
    title: "Quality Control | Automotive Spring Testing",
    description:
      "Review spring testing, dimension inspection and fatigue testing capability for custom automotive and industrial spring programs.",
    path: "/quality",
    keywords: ["spring quality control", "spring testing", "spring dimension inspection", "spring fatigue testing"]
  },
  production: {
    title: "Production Process | Custom Spring Manufacturing",
    description:
      "See spring forming, heat treatment, surface treatment and export packaging steps for custom automotive spring manufacturing.",
    path: "/production",
    keywords: ["spring production process", "spring forming", "spring surface treatment", "spring export packaging"]
  },
  contact: {
    title: "Contact Us | Request Custom Spring RFQ",
    description:
      "Send drawings, PDF or DWG files and technical requirements for custom spring quotation. Contact our B2B industrial spring manufacturing team.",
    path: "/contact",
    keywords: ["spring RFQ", "custom spring quotation", "upload spring drawing", "spring supplier contact"]
  }
};

export function absoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function organizationSchema() {
  const products = getProducts();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    email: contactEmail,
    logo: absoluteUrl("/images/hero-factory.jpg"),
    description: pageSeo.home.description,
    areaServed: ["Mexico", "United States", "Europe"],
    knowsAbout: [
      "Automotive starter springs",
      "Alternator regulator springs",
      "One-way clutch flat springs",
      "Shock absorber springs",
      "Steering gear springs",
      "Automotive quality management",
      "IATF 16949 supplier requirements"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: contactEmail,
      contactType: "sales",
      availableLanguage: ["English"]
    },
    makesOffer: products.map((product) => product.name)
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/products?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function productSchema(slug: string) {
  const products = getProducts();
  const product = products.find((item) => item.slug === slug);
  if (!product) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: absoluteUrl(product.image),
    description: product.description,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: siteName
    },
    manufacturer: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl
    },
    keywords: product.keywords.join(", "),
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/products/${product.slug}`),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        description: "Pricing available by RFQ based on drawing, sample, material, quantity and application."
      }
    }
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
