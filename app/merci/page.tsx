import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Mail, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Merci — Votre pré-audit est en route | auditloi25.ca",
  description:
    "Votre demande de pré-audit Loi 25 a bien été reçue. Votre rapport est généré instantanément.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    label: "Vous recevez votre rapport par email",
    sub: "Instantanément, par email",
  },
  {
    label: "On identifie vos zones à risque prioritaires",
    sub: "Avec des recommandations claires et priorisées",
  },
  {
    label: "Vous décidez de la suite",
    sub: "Aucun engagement. Aucune pression.",
  },
];

const coverageItems = [
  "Bannière de cookies et boutons de consentement",
  "Formulaires et collecte de données",
  "Mentions légales et politique de confidentialité",
  "Traceurs, balises et outils d\u2019analyse",
];

export default async function MerciPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const isPaid = Boolean(session_id);

  return (
    <main className="min-h-screen bg-base">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col gap-10 px-4 py-20 sm:px-6">

        {/* Bloc paiement confirmé */}
        {isPaid && (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30 mb-4">
              <CreditCard size={28} className="text-emerald-400" aria-hidden="true" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white">
              Paiement reçu — merci&nbsp;!
            </h1>
            <p className="mt-2 text-slate-400 text-sm">
              Votre audit complet Loi 25 est confirmé. Vous recevrez votre rapport complet sous 48 heures ouvrables à l&apos;adresse indiquée lors du paiement.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Un reçu vous a été envoyé par Stripe. Des questions ? Écrivez à{" "}
              <a href="mailto:votreboosterdigital@outlook.com" className="text-emerald-400 underline underline-offset-2">
                votreboosterdigital@outlook.com
              </a>
            </p>
          </div>
        )}

        {/* Blocs pré-audit (si pas de paiement) */}
        {!isPaid && (<>
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <CheckCircle size={32} className="text-emerald-400" aria-hidden="true" />
          </div>
          <h1 className="mt-5 text-2xl font-black tracking-tight text-white sm:text-3xl">
            C&apos;est fait&nbsp;! Votre pré-audit est en route.
          </h1>
          <p className="mt-3 text-slate-400">
            Votre rapport a été généré instantanément. Voici ce qu&apos;il couvre&nbsp;:
          </p>
          <ul className="mt-5 space-y-2 text-left text-sm text-slate-300">
            {coverageItems.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle size={16} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc 2 — Prochaines étapes */}
        <div className="rounded-xl border border-white/8 bg-[#0d1526] p-6 ring-1 ring-white/5">
          <h2 className="text-base font-bold text-white">Ce qui arrive ensuite</h2>
          <ol className="mt-5 space-y-5">
            {nextSteps.map((step, i) => (
              <li key={step.label} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-xs font-bold text-sky-400 ring-1 ring-sky-500/30">
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

        {/* Bloc 3 — En attendant (ressources + offre) */}
        <div className="rounded-xl border border-white/8 bg-[#0d1526] p-6 ring-1 ring-white/5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            En attendant
          </p>
          <h2 className="mt-2 text-base font-bold text-white">
            Préparez-vous avec nos ressources gratuites
          </h2>
          <ul className="mt-4 space-y-3">
            {[
              {
                href: "/ressources/checklist-loi-25-site-web",
                label: "Checklist Loi 25 pour votre site",
                desc: "Les 10 points les plus souvent non conformes",
              },
              {
                href: "/ressources/banniere-cookies-loi-25",
                label: "Bannière de cookies : êtes-vous conforme ?",
                desc: "Ce qu'exige la CAI — clairement expliqué",
              },
              {
                href: "/ressources/penalites-loi-25-entreprise",
                label: "Amendes Loi 25 : ce que risque votre organisation",
                desc: "Les vraies sanctions et ce qui déclenche une enquête",
              },
            ].map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group flex items-start justify-between gap-4 rounded-lg border border-white/5 bg-white/3 px-4 py-3 transition-colors hover:border-sky-500/20 hover:bg-white/5"
                >
                  <div>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-white">{r.label}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{r.desc}</p>
                  </div>
                  <ArrowRight size={14} className="mt-0.5 shrink-0 text-slate-500 group-hover:text-sky-400 transition-colors" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc 4 — Aller plus loin */}
        <div className="rounded-xl border border-sky-500/20 bg-sky-500/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Curieux d&apos;aller plus loin ?
          </p>
          <h2 className="mt-2 text-base font-bold text-white">
            Découvrez l&apos;audit complet
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Rapport PDF complet, score de risque par zone, plan d&apos;action priorisé — à partir de 450&nbsp;$.
            Devis précis après votre pré-audit, sans engagement.
          </p>
          <Link
            href="/offre"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
          >
            Voir le détail de l&apos;offre <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        {/* Bloc 5 — Contact direct */}
        <div className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/3 px-4 py-3 text-sm text-slate-400">
          <Mail size={16} className="mt-0.5 shrink-0 text-slate-500" aria-hidden="true" />
          <span>
            Une question urgente avant de recevoir votre rapport ?{" "}
            <a
              href="mailto:votreboosterdigital@outlook.com"
              className="text-slate-300 underline underline-offset-2 hover:text-white transition-colors"
            >
              votreboosterdigital@outlook.com
            </a>
          </span>
        </div>

        {/* Bloc 6 — Retour */}
        <div className="text-center">
          <Link href="/" className="text-sm text-slate-500 transition-colors hover:text-slate-300">
            ← Retour à l&apos;accueil
          </Link>
        </div>
        </>)}

      </div>
    </main>
  );
}
