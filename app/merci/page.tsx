import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Merci — Votre pré-audit est en route | auditloi25.ca",
  description: "Votre demande de pré-audit Loi 25 a bien été reçue. Vous recevrez votre rapport dans les 48 heures ouvrables.",
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center gap-10 px-4 py-16 sm:px-6">

        {/* Bloc 1 — Confirmation */}
        <div className="w-full text-center">
          <CheckCircle
            size={48}
            className="mx-auto text-emerald-400"
            aria-hidden="true"
          />
          <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
            C&apos;est fait&nbsp;! Votre pré-audit est en route.
          </h1>
          <p className="mt-3 text-base text-slate-300">
            Vous recevrez votre rapport d&apos;ici 48 heures. Voici ce qu&apos;il couvrira&nbsp;:
          </p>
          <ul className="mt-5 space-y-2 text-left text-sm text-slate-300">
            {[
              "Bannière de cookies et boutons de consentement",
              "Formulaires et collecte de données",
              "Mentions légales et politique de confidentialité",
              "Traceurs, balises et outils d\u2019analyse",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-emerald-400"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc 2 — Valeur immédiate */}
        <div className="w-full rounded-xl border border-slate-700 bg-slate-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            En attendant
          </p>
          <h2 className="mt-2 text-lg font-bold text-slate-50">
            Commencez avec notre checklist gratuite
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Identifiez dès maintenant les 10 points les plus fréquemment non conformes sur les sites québécois.
          </p>
          <Link
            href="/ressources/checklist-loi-25-site-web"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors duration-200 hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Voir la checklist Loi&nbsp;25
          </Link>
        </div>

        {/* Bloc 3 — Prochaines étapes */}
        <div className="w-full">
          <h2 className="text-lg font-bold text-slate-50">Ce qui arrive ensuite</h2>
          <ol className="mt-5 space-y-5">
            {[
              {
                label: "Vous recevez votre rapport par email",
                sub: "Dans les 48 heures ouvrables",
              },
              {
                label: "On identifie vos zones à risque prioritaires",
                sub: "Avec des recommandations claires",
              },
              {
                label: "Vous décidez de la suite",
                sub: "Aucun engagement. Aucune pression.",
              },
            ].map((step, i) => (
              <li key={step.label} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-600 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-100">{step.label}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{step.sub}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Bloc 4 — Lien retour */}
        <div className="w-full text-center">
          <Link
            href="/"
            className="text-sm text-slate-400 transition-colors hover:text-slate-200"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>

      </div>
    </main>
  );
}
