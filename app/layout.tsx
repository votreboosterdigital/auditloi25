import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Audit Loi 25 pour sites web | Pré-audit gratuit – PME et OBNL québécois",
  description:
    "Audit de conformité Loi 25 pour votre site web : cookies, formulaires, bannière et contenus légaux. Pré-audit gratuit pour PME et OBNL au Québec. Retour sous 48 h, sans engagement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={plusJakarta.variable}>
      <head>
        <Script
          id="cookieyes"
          src="https://cdn-cookieyes.com/client_data/d679772db3cc8c691b75a6eb6ee182af/script.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
