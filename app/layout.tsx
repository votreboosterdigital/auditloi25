import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://auditloi25.ca";
const siteTitle = "Audit Loi 25 pour sites web | Pré-audit gratuit – PME et OBNL québécois";
const siteDescription =
  "Audit de conformité Loi 25 pour votre site web : cookies, formulaires, bannière et contenus légaux. Pré-audit gratuit pour PME et OBNL au Québec. Retour sous 48 h, sans engagement.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: siteUrl,
    siteName: "auditloi25.ca",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}>
      <head>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/d679772db3cc8c691b75a6eb6ee182af/script.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-base text-slate-50">
        {children}
        <StickyMobileCta />
      </body>
    </html>
  );
}
