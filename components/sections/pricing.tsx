import Link from "next/link";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  priceNote: string | null;
  badge: string | null;
  highlighted: boolean;
  cta: { label: string; href: string; variant: "emerald" | "sky" | "slate" };
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Pré-audit",
    price: "Gratuit",
    priceNote: "Idéal pour un premier état des lieux",
    badge: null,
    highlighted: false,
    cta: { label: "Commencer gratuitement", href: "#formulaire", variant: "sky" },
    features: [
      "Détection des cookies et scripts tiers actifs sur votre site",
      "Vérification de la présence et du comportement de la bannière de consentement",
      "Premier portrait des zones à risque les plus visibles",
    ],
  },
  {
    name: "Audit complet",
    price: "À partir de 450 $",
    priceNote: "selon la taille du site · devis après pré-audit",
    badge: "Le plus populaire",
    highlighted: true,
    cta: { label: "Démarrer mon audit", href: "#formulaire", variant: "emerald" },
    features: [
      "Tout ce qui est inclus dans le pré-audit",
      "Analyse approfondie de chaque formulaire et du parcours de consentement",
      "Vérification complète des contenus légaux : politique, mentions, droits",
      "Rapport synthèse avec score de risque par zone et par priorité",
      "Plan d'action classé par effort réaliste, adapté à vos ressources",
    ],
  },
  {
    name: "Audit + Accompagnement",
    price: "Sur devis",
    priceNote: "adapté à votre organisation",
    badge: "Sur mesure",
    highlighted: false,
    cta: { label: "Discuter de mon projet", href: "#formulaire", variant: "slate" },
    features: [
      "Tout ce qui est inclus dans l'audit complet",
      "Session de travail avec votre équipe ou votre fournisseur web",
      "Révision des correctifs une fois mis en œuvre",
      "Synthèse claire transmissible à votre direction ou CA",
      "Coordination avec vos partenaires juridiques ou TI",
      "Suivi personnalisé selon vos délais et contraintes",
    ],
  },
];

const ctaClass: Record<Plan["cta"]["variant"], string> = {
  emerald:
    "inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-slate-900",
  sky: "inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-sky-500/50 px-4 py-2.5 text-sm font-semibold text-sky-300 transition-colors hover:border-sky-400 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-slate-900",
  slate:
    "inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-slate-900",
};

export function Pricing() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="mt-16"
    >
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
          Tarifs
        </p>
        <h2
          id="pricing-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-slate-50"
        >
          Commencez gratuitement — avancez à votre rythme
        </h2>
        <p className="mt-2 max-w-xl text-base text-slate-300">
          Le pré-audit Loi&nbsp;25 est gratuit et sans engagement. Vous
          passez à l&apos;étape suivante seulement si vous le souhaitez, sur
          la base d&apos;un devis précis.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3 md:items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={[
              "relative flex flex-col rounded-2xl p-6 ring-1",
              plan.highlighted
                ? "bg-slate-900 ring-sky-500/60 md:scale-105"
                : "bg-slate-900/70 ring-slate-700/50",
            ].join(" ")}
          >
            {/* Badge */}
            {plan.badge && (
              <span className="mb-3 inline-flex w-fit rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                {plan.badge}
              </span>
            )}

            {/* Nom du plan */}
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              {plan.name}
            </p>

            {/* Prix */}
            <p className="mt-2 text-3xl font-extrabold tabular-nums text-slate-50 md:text-[32px]">
              {plan.price}
            </p>
            {plan.priceNote && (
              <p className="mt-0.5 text-xs text-slate-400">{plan.priceNote}</p>
            )}

            {/* Séparateur */}
            <div className="my-5 border-t border-slate-700/50" />

            {/* Liste de features */}
            <ul className="flex-1 space-y-2.5">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <Check
                    size={14}
                    className="mt-0.5 shrink-0 text-emerald-400"
                    aria-hidden="true"
                  />
                  {feat}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-6">
              <a href={plan.cta.href} className={ctaClass[plan.cta.variant]}>
                {plan.cta.label}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Note transparence */}
      <p className="mt-6 text-center text-xs text-slate-500">
        Devis précis fourni après le pré-audit, sans engagement.{" "}
        <Link
          href="/offre"
          className="text-sky-400 underline underline-offset-4 decoration-sky-400/40 hover:text-sky-300"
        >
          Voir le détail de l&apos;offre d&apos;audit →
        </Link>
      </p>
    </section>
  );
}
