import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AnalyticsTags } from "@/components/AnalyticsTags";
import { pageSeo, siteKeywords, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageSeo.home.title,
    template: "%s | Industrial Spring Manufacturer"
  },
  description: pageSeo.home.description,
  keywords: siteKeywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    type: "website",
    url: siteUrl,
    siteName,
    images: ["/images/hero-factory.jpg"]
  },
  twitter: {
    card: "summary_large_image",
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    images: ["/images/hero-factory.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsTags />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
