import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audit cookies & Loi 25 – auditloi25.ca",
  description:
    "Audit cookies et conformité Loi 25 pour sites web de PME et OBNL au Québec.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
