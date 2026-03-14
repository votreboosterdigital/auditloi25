import Link from "next/link";
import { ShieldAlert, Users, Scale, type LucideIcon } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────────
type WhyCard = {
  icon: LucideIcon;
  title: string;
  stat: string;
  statColor: "sky" | "emerald";
  content: string;
  source: string;
};

// ── Données ────────────────────────────────────────────────────────────────────
// BEFORE: stats codées en dur dans le JSX
// AFTER: tableau structuré avec sources reformulées (Loi 25, CAI)
const cards: WhyCard[] = [
  {
    icon: ShieldAlert,
    title: "Amendes réelles",
    stat: "25 M$",
    statColor: "sky",
    content:
      "ou 4 % du chiffre d'affaires mondial pour les infractions les plus graves.",
    source: "Loi 25 (L.Q. 2021, c. 25), art. 90 et 92",
  },
  {
    icon: Users,
    title: "Confiance clients",
    stat: "81 %",
    statColor: "emerald",
    content:
      "des consommateurs québécois se disent préoccupés par l'usage de leurs données personnelles.",
    source: "Sondage sur la vie privée, CAI, 2023",
  },
  {
    icon: Scale,
    title: "Obligation active",
    stat: "Actif",
    statColor: "sky",
    content:
      "La CAI surveille activement les sites web — les PME et OBNL ne sont pas exemptés.",
    source: "Lignes directrices de la CAI sur les témoins, 2023",
  },
];

// ── Composant ──────────────────────────────────────────────────────────────────
export function WhyActNow() {
  return (
    <section
      aria-labelledby="why-act-heading"
      className="mt-16 rounded-3xl bg-slate-950/70 p-6 ring-1 ring-slate-800 md:p-8"
    >
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
          Pourquoi agir maintenant
        </p>
        <h2
          id="why-act-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-slate-50"
        >
          Les risques sont réels pour votre organisation
        </h2>
      </header>

      {/* Grille de cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;
          const statClass =
            card.statColor === "emerald"
              ? "text-emerald-400"
              : "text-sky-400";

          return (
            <div
              key={card.title}
              className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50"
            >
              {/* Icône */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10">
                <Icon size={20} className="text-sky-400" aria-hidden="true" />
              </div>

              {/* Titre */}
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">
                {card.title}
              </h3>

              {/* Stat */}
              <p
                className={`mt-1 text-[28px] font-extrabold tabular-nums leading-none ${statClass}`}
              >
                {card.stat}
              </p>

              {/* Contenu */}
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {card.content}
              </p>

              {/* Source reformulée */}
              <p className="mt-4 text-[11px] text-slate-500">
                <span className="font-medium text-slate-400">Source&nbsp;:</span>{" "}
                {card.source}
              </p>
            </div>
          );
        })}
      </div>

      {/* AFTER: lien "Voir les sources détaillées" ajouté sous les cards */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/ressources/sources-loi-25"
          className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-sky-400 underline underline-offset-4 decoration-sky-400/40 transition-colors duration-150 hover:text-sky-300 hover:decoration-sky-300/60"
        >
          Voir les sources détaillées
          <span className="text-[10px]" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
