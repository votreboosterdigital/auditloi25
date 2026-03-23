import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#020817",
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

        {/* Google Consent Mode v2 — défaut refusé, AVANT le chargement de gtag.js */}
        <Script id="gtag-consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}</Script>

        {/* Google Ads gtag.js */}
        <Script
          id="gtag-lib"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GADS_ID ?? "AW-XXXXXXXXX"}`}
          strategy="afterInteractive"
        />

        {/* gtag config + mise à jour consentement via CookieYes */}
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GADS_ID ?? "AW-XXXXXXXXX"}');

          window.addEventListener('cookieyes_consent_update', function(event) {
            var accepted = (event.detail && event.detail.accepted) || [];
            gtag('consent', 'update', {
              ad_storage: accepted.indexOf('advertisement') !== -1 ? 'granted' : 'denied',
              analytics_storage: accepted.indexOf('analytics') !== -1 ? 'granted' : 'denied',
              ad_user_data: accepted.indexOf('advertisement') !== -1 ? 'granted' : 'denied',
              ad_personalization: accepted.indexOf('advertisement') !== -1 ? 'granted' : 'denied'
            });
          });
        `}</Script>

        {/* Plausible Analytics — cookieless, Loi 25 compliant, pas de consentement requis */}
        <Script
          id="plausible"
          defer
          data-domain="auditloi25.ca"
          src="https://plausible.io/js/script.outbound-links.file-downloads.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">{`
          window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}</Script>
      </head>
      <body className="bg-base text-slate-50">
        {children}
        <StickyMobileCta />
      </body>
    </html>
  );
}
