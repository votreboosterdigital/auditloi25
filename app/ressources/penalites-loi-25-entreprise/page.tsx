import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Amendes et pénalités Loi 25 pour les entreprises québécoises | auditloi25.ca",
  description:
    "Quelles sont les sanctions prévues par la Loi 25 pour les PME et OBNL québécois ? Amendes administratives, pénales, et comment réduire votre exposition au risque.",
};

export default function PenalitesLoi25Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-slate-500">
          <Link href="/" className="transition-colors hover:text-slate-300">Accueil</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <Link href="/ressources/checklist-loi-25-site-web" className="transition-colors hover:text-slate-300">Ressources Loi 25</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-slate-400">Amendes et pénalités</span>
        </nav>

        {/* En-tête */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Guide pratique · Risques et sanctions
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Amendes et pénalités Loi 25 : ce que risquent les entreprises et OBNL québécois
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            La Loi 25 prévoit deux catégories de sanctions financières : des amendes
            administratives décidées par la CAI, et des amendes pénales prononcées par
            les tribunaux. Les montants peuvent sembler intimidants — mais le risque réel
            pour une PME ou un OBNL se situe ailleurs. Voici ce que vous devez savoir.
          </p>
        </header>

        {/* Bloc chiffres clés */}
        <section className="mb-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Amendes administratives</p>
            <p className="mt-2 text-3xl font-extrabold text-sky-400">10 M$</p>
            <p className="mt-1 text-sm text-slate-300">ou 2 % du chiffre d'affaires mondial</p>
            <p className="mt-2 text-xs text-slate-500">Pour les manquements les plus courants (ex. défaut de transparence, consentement non valide)</p>
          </div>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Amendes pénales</p>
            <p className="mt-2 text-3xl font-extrabold text-sky-400">25 M$</p>
            <p className="mt-1 text-sm text-slate-300">ou 4 % du chiffre d'affaires mondial</p>
            <p className="mt-2 text-xs text-slate-500">Pour les infractions les plus graves (ex. utilisation à des fins non consenties)</p>
          </div>
          <p className="col-span-full text-[11px] text-slate-500">
            Source : Loi modernisant des dispositions législatives en matière de protection des renseignements personnels (L.Q. 2021, c. 25), art. 90 et 92.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-50">
            Deux types de sanctions, deux processus différents
          </h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="rounded-xl bg-slate-900/70 p-5 ring-1 ring-slate-700/50">
              <p className="font-semibold text-slate-100">Amendes administratives — décidées par la CAI</p>
              <p className="mt-2 leading-relaxed">
                La Commission d'accès à l'information peut imposer des sanctions pécuniaires
                administratives directement, sans passer par les tribunaux. Elles visent
                notamment le défaut de désigner un responsable de la protection des
                renseignements personnels, le manque de transparence sur l'usage des données,
                ou l'absence de mécanisme de consentement valide.
              </p>
            </div>
            <div className="rounded-xl bg-slate-900/70 p-5 ring-1 ring-slate-700/50">
              <p className="font-semibold text-slate-100">Amendes pénales — prononcées par les tribunaux</p>
              <p className="mt-2 leading-relaxed">
                Les infractions pénales sont plus graves : utilisation de données à des fins
                non consenties, entraves à la surveillance de la CAI, ou récidive après
                sanction administrative. Ces procédures sont intentées par le procureur général
                et nécessitent une décision de justice.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-50">
            Le risque réel pour une PME ou un OBNL
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Les amendes maximales de 10 M$ ou 25 M$ sont réservées aux cas les plus graves
            et aux grandes organisations. Pour une PME ou un OBNL québécois, le risque
            concret est différent — mais bien réel.
          </p>
          <div className="space-y-3 text-sm text-slate-300">
            {[
              {
                titre: "Plainte d'un visiteur ou client",
                desc: "N'importe qui peut déposer une plainte à la CAI. Une plainte peut déclencher une enquête, même si votre organisation est petite.",
              },
              {
                titre: "Enquête proactive de la CAI",
                desc: "La CAI effectue des vérifications de sa propre initiative sur les sites web québécois — notamment sur les bannières de cookies et la politique de confidentialité.",
              },
              {
                titre: "Atteinte à la réputation",
                desc: "Même sans amende, une enquête de la CAI est publique. Pour un OBNL ou une PME, la confiance de vos donateurs, clients ou partenaires peut être fragilisée.",
              },
              {
                titre: "Obligation de corriger à ses frais",
                desc: "La CAI peut exiger des correctifs dans des délais imposés. Si vous n'avez pas de ressources TI internes, les coûts de mise en conformité d'urgence sont souvent plus élevés qu'une démarche planifiée.",
              },
            ].map((item) => (
              <div key={item.titre} className="rounded-xl bg-slate-900/70 p-4 ring-1 ring-slate-700/50">
                <p className="font-medium text-slate-100">{item.titre}</p>
                <p className="mt-1 leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-50">
            Ce que la CAI vérifie en priorité sur les sites web
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Selon les lignes directrices publiées par la CAI, les points les plus souvent
            vérifiés sur les sites web sont :
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              "La présence et la conformité de la bannière de consentement aux cookies.",
              "Le fait que les cookies non essentiels se déclenchent bien après le consentement.",
              "L'accessibilité et le contenu de la politique de confidentialité.",
              "La clarté des mentions sur les formulaires de collecte.",
              "L'identification d'un responsable de la protection des renseignements personnels.",
            ].map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="rounded-lg bg-slate-900/60 px-4 py-3 text-xs leading-relaxed text-slate-400 ring-1 ring-slate-800">
            <span className="font-medium text-slate-300">Bon à savoir :</span>{" "}
            La CAI a publié en 2023 des critères de validité du consentement qui détaillent
            exactement ce qu'elle considère comme un consentement valide pour les cookies.
            Ces critères s'appliquent à toutes les organisations, quelle que soit leur taille.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-50">
            Comment réduire votre exposition maintenant
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            La conformité n'est pas binaire : il s'agit de réduire votre exposition au
            risque de manière progressive et priorisée. Les actions les plus efficaces
            pour une PME ou un OBNL sont généralement :
          </p>
          <ol className="space-y-3 text-sm text-slate-300">
            {[
              "Vérifier que votre bannière de cookies bloque réellement les scripts non essentiels avant le consentement.",
              "S'assurer que le bouton « Refuser » est aussi visible que le bouton « Accepter ».",
              "Publier une politique de confidentialité à jour, accessible depuis le bas de chaque page.",
              "Identifier et nommer un responsable de la protection des renseignements personnels (même s'il s'agit du directeur général ou du responsable des communications).",
              "Ajouter des mentions claires sur vos formulaires de collecte.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="mb-10 rounded-2xl bg-gradient-to-br from-sky-500/10 via-slate-950/80 to-emerald-500/10 p-6 ring-1 ring-sky-500/30">
          <h2 className="text-lg font-semibold text-slate-50">
            Identifiez vos zones d'exposition avant qu'une plainte ne le fasse pour vous
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Un pré-audit Loi 25 de votre site web vous donne un premier portrait clair des
            éléments les plus visibles et les plus vérifiés par la CAI : bannière, formulaires,
            politique, cookies actifs. Gratuit, sans engagement, résultat sous 48&nbsp;h.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/#formulaire"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 hover:text-white"
            >
              Demander un pré-audit gratuit
            </Link>
            <Link
              href="/offre"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
            >
              Voir l'offre d'audit Loi 25
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Liens vers autres ressources */}
        <nav aria-label="Autres ressources" className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">À lire aussi</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/ressources/banniere-cookies-loi-25" className="text-sky-400 underline underline-offset-4 decoration-sky-400/30 hover:text-sky-300">
                Bannière de cookies et Loi 25 : ce que votre site doit respecter
              </Link>
            </li>
            <li>
              <Link href="/ressources/checklist-loi-25-site-web" className="text-sky-400 underline underline-offset-4 decoration-sky-400/30 hover:text-sky-300">
                Checklist Loi 25 pour votre site web
              </Link>
            </li>
            <li>
              <Link href="/ressources/sources-loi-25" className="text-sky-400 underline underline-offset-4 decoration-sky-400/30 hover:text-sky-300">
                Sources légales et références officielles
              </Link>
            </li>
          </ul>
        </nav>

        <footer className="mb-4 border-t border-slate-800/70 pt-4 text-xs text-slate-500">
          <p>
            Ce guide est fourni à titre informatif. Il ne constitue pas un avis juridique
            et doit être adapté à la réalité de votre organisation.
          </p>
        </footer>

        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200">
          <ArrowLeft size={14} aria-hidden="true" />
          Retour à l'accueil
        </Link>

      </div>
    </main>
  );
}
