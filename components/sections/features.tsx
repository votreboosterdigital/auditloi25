import {
  Cookie,
  FileText,
  BookOpen,
  ToggleLeft,
  Activity,
  BarChart2,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Cookie,
    title: "Cookies & scripts tiers",
    description:
      "Identification et catégorisation des cookies et scripts tiers actifs — une obligation centrale de l'audit Loi 25 pour votre site web.",
  },
  {
    icon: FileText,
    title: "Formulaires & consentement",
    description:
      "Analyse de la conformité Loi 25 de vos formulaires de contact, d'inscription et des parcours de collecte de données personnelles.",
  },
  {
    icon: BookOpen,
    title: "Contenus légaux",
    description:
      "Vérification de la politique de confidentialité, des mentions légales et de leur accessibilité.",
  },
  {
    icon: ToggleLeft,
    title: "Bannière de cookies",
    description:
      "Évaluation de la bannière de consentement selon les critères Loi 25 : présence, clarté et facilité de refus équivalente à l'acceptation.",
  },
  {
    icon: Activity,
    title: "Outils de suivi",
    description:
      "Recensement des scripts de mesure d'audience, de publicité et de partage social actifs sur vos pages.",
  },
  {
    icon: BarChart2,
    title: "Rapport priorisé",
    description:
      "Synthèse claire avec score de risque par zone et liste d'actions classées par priorité et par effort.",
  },
];

export function Features() {
  return (
    <section
      aria-labelledby="features-heading"
      className="mt-16"
    >
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
          Ce qu&apos;on analyse
        </p>
        <h2
          id="features-heading"
          className="mt-2 text-2xl font-bold tracking-tight text-slate-50"
        >
          Six zones vérifiées dans chaque audit Loi&nbsp;25 de votre site
        </h2>
        <p className="mt-2 max-w-xl text-base text-slate-300">
          Chaque zone correspond à des exigences clés de la conformité
          Loi&nbsp;25 mises de l&apos;avant par la CAI pour les sites web québécois.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-700/50 motion-safe:transition-shadow motion-safe:duration-200 hover:ring-sky-500/30 hover:shadow-[0_8px_32px_rgba(56,189,248,0.08)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10">
                <Icon size={20} className="text-sky-400" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-slate-100">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
