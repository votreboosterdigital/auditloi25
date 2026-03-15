import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Loi 25 et OBNL québécois : obligations, audit et conformité de votre site web | auditloi25.ca",
  description:
    "La Loi 25 s'applique aussi aux OBNL québécois. Découvrez les obligations spécifiques à votre site web : formulaires de dons, infolettres, témoins de connexion et politique de confidentialité.",
};

export default function AuditLoi25ObnlPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-slate-500">
          <Link href="/" className="transition-colors hover:text-slate-300">Accueil</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <Link href="/ressources/checklist-loi-25-site-web" className="transition-colors hover:text-slate-300">Ressources Loi 25</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-slate-400">Loi 25 et OBNL</span>
        </nav>

        {/* En-tête */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Guide pratique · OBNL et organismes à but non lucratif
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Loi 25 et OBNL québécois : ce que votre site web doit respecter
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Une idée reçue circule dans le milieu des organismes à but non lucratif : la
            Loi 25 ne s'appliquerait qu'aux grandes entreprises privées. C'est faux. Si
            votre OBNL a un site web avec des formulaires, une infolettre, un module de
            dons ou des outils d'analyse, vous êtes concerné.
          </p>
        </header>

        {/* Section 1 */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-50">
            La Loi 25 s'applique aux OBNL — sans exception de taille
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            La Loi sur la protection des renseignements personnels dans le secteur privé
            (Loi 25) couvre toutes les entreprises et organisations qui collectent,
            utilisent ou communiquent des renseignements personnels dans le cadre de leurs
            activités — y compris les organismes à but non lucratif, les associations, les
            coopératives et les fondations.
          </p>
          <div className="rounded-xl bg-sky-500/5 p-5 ring-1 ring-sky-500/20 text-sm text-slate-300">
            <p className="font-medium text-sky-300">Ce que ça signifie pour votre OBNL :</p>
            <p className="mt-2">
              Dès que votre site web collecte un nom, un courriel ou toute autre information
              permettant d'identifier une personne (via un formulaire de contact, un module
              de dons, une inscription à une activité ou une infolettre), la Loi 25 s'applique.
            </p>
          </div>
        </section>

        {/* Section 2 — Zones à risque spécifiques aux OBNL */}
        <section className="mb-10">
          <h2 className="mb-6 text-xl font-bold text-slate-50">
            Les 5 zones à risque spécifiques aux sites d'OBNL
          </h2>
          <ol className="space-y-4">
            {[
              {
                num: "1",
                titre: "Formulaires de dons et de collecte de fonds",
                desc: "Les pages de dons collectent des informations financières et personnelles (nom, courriel, montant, adresse). Votre politique de confidentialité doit expliquer comment ces données sont utilisées, stockées et, le cas échéant, transmises à votre plateforme de paiement.",
              },
              {
                num: "2",
                titre: "Infolettre et liste de diffusion",
                desc: "L'inscription à une infolettre doit être accompagnée d'une mention claire sur l'usage des données et d'un mécanisme de désabonnement facile. La case d'inscription ne peut pas être précochée.",
              },
              {
                num: "3",
                titre: "Formulaires d'inscription aux activités",
                desc: "Si vos bénévoles, participants ou membres remplissent des formulaires d'inscription en ligne, vous collectez des renseignements personnels. Chaque formulaire doit afficher une mention sur l'usage prévu des données.",
              },
              {
                num: "4",
                titre: "Outils d'analyse et cookies tiers",
                desc: "Google Analytics, Facebook Pixel, widgets de partage social — ces outils sont courants sur les sites d'OBNL et déposent des cookies. Votre bannière de consentement doit couvrir ces outils, et ils ne doivent pas se déclencher avant le consentement.",
              },
              {
                num: "5",
                titre: "Politique de confidentialité absente ou générique",
                desc: "Beaucoup d'OBNL n'ont pas de politique de confidentialité, ou utilisent un modèle générique qui ne correspond pas à leur réalité. La Loi 25 exige une politique accessible, à jour, et qui décrit précisément les pratiques de votre organisation.",
              },
            ].map((item) => (
              <li
                key={item.num}
                className="flex gap-4 rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-700/50"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold text-slate-100">{item.titre}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 3 */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-50">
            Les obligations concrètes pour votre site web
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Voici les actions que la Loi 25 impose directement sur votre site web, quel que
            soit le type ou la taille de votre OBNL :
          </p>
          <ul className="space-y-3 text-sm text-slate-300">
            {[
              {
                titre: "Désigner un responsable",
                desc: "Identifier une personne responsable de la protection des renseignements personnels dans votre organisation — et rendre cette information accessible sur votre site.",
              },
              {
                titre: "Politique de confidentialité à jour",
                desc: "Publier une politique de confidentialité qui décrit les données collectées, les finalités, la durée de conservation et les droits des personnes.",
              },
              {
                titre: "Consentement valide pour les cookies",
                desc: "Mettre en place une bannière de cookies conforme qui bloque les scripts non essentiels avant le consentement.",
              },
              {
                titre: "Mentions sur les formulaires",
                desc: "Chaque formulaire qui collecte des renseignements personnels doit expliquer clairement pourquoi ces informations sont demandées et comment elles seront utilisées.",
              },
              {
                titre: "Droit d'accès et de rectification",
                desc: "Prévoir un mécanisme (courriel dédié ou formulaire) pour que les personnes puissent exercer leurs droits d'accès, de rectification et de retrait du consentement.",
              },
            ].map((item) => (
              <div key={item.titre} className="rounded-xl bg-slate-900/70 p-4 ring-1 ring-slate-700/50">
                <p className="font-medium text-slate-100">{item.titre}</p>
                <p className="mt-1 leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            ))}
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-50">
            « On n'a pas d'équipe TI ni de juriste — par où commencer ? »
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            C'est la réalité de la plupart des OBNL québécois. La bonne nouvelle : les
            obligations les plus importantes et les plus vérifiées par la CAI concernent
            principalement votre site web — et elles sont adressables sans expertise
            juridique ou technique avancée.
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            Un audit Loi 25 de votre site web permet de commencer par l'essentiel :
            identifier les cookies actifs, vérifier la conformité de votre bannière,
            évaluer vos formulaires et vous donner une liste de correctifs priorisés —
            adaptée à vos ressources réelles.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-10 rounded-2xl bg-gradient-to-br from-sky-500/10 via-slate-950/80 to-emerald-500/10 p-6 ring-1 ring-sky-500/30">
          <h2 className="text-lg font-semibold text-slate-50">
            Pré-audit Loi 25 gratuit pour votre OBNL
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Notre service est conçu pour les organisations sans équipe TI ni juridique.
            Vous nous donnez l'URL de votre site et vos pages principales — on s'occupe
            du reste. Résultat sous 48 h, sans engagement.
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

        {/* Liens ressources */}
        <nav aria-label="Autres ressources" className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">À lire aussi</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/ressources/banniere-cookies-loi-25" className="text-sky-400 underline underline-offset-4 decoration-sky-400/30 hover:text-sky-300">
                Bannière de cookies et Loi 25 : ce que votre site doit respecter
              </Link>
            </li>
            <li>
              <Link href="/ressources/penalites-loi-25-entreprise" className="text-sky-400 underline underline-offset-4 decoration-sky-400/30 hover:text-sky-300">
                Amendes et pénalités Loi 25 pour les entreprises québécoises
              </Link>
            </li>
            <li>
              <Link href="/ressources/checklist-loi-25-site-web" className="text-sky-400 underline underline-offset-4 decoration-sky-400/30 hover:text-sky-300">
                Checklist Loi 25 pour votre site web
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
