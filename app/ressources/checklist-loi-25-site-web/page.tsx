import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "Checklist Loi 25 pour votre site web (cookies, formulaires, contenus) | auditloi25.ca",
  description:
    "Vérifiez rapidement si votre site web respecte les exigences clés de la Loi 25 : cookies, formulaires, infolettre, politiques, droits des personnes et sécurité.",
};

export default function ChecklistLoi25Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <BreadcrumbJsonLd items={[
        { name: "Accueil", href: "/" },
        { name: "Ressources", href: "/ressources" },
        { name: "Checklist Loi 25 pour votre site web", href: "/ressources/checklist-loi-25-site-web" },
      ]} />
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Ressource Loi 25 pour sites web
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Checklist Loi 25 pour votre site web (PME, OBNL, municipal)
          </h1>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Cette checklist vous aide à vérifier si votre site web respecte les exigences
            principales de la Loi 25 au Québec&nbsp;: gestion des cookies, formulaires,
            infolettre, transparence et droits des personnes. Elle ne remplace pas un avis
            juridique, mais vous donne une base concrète pour prioriser vos actions.
          </p>
        </header>

        <section className="mb-8 rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            1. Cookies et témoins de connexion
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            La Loi 25 exige un consentement clair avant la collecte de renseignements
            personnels, y compris par l&apos;entremise de cookies non essentiels (statistiques,
            marketing, traçage). Votre site doit être transparent sur les outils utilisés et
            permettre un choix réel (accepter / refuser). 
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc list-inside">
            <li>
              Une bannière de consentement aux cookies est présente sur votre site, en
              français, avec un lien vers une politique de cookies / vie privée à jour.
            </li>
            <li>
              Les cookies non essentiels (analyse, marketing, pixels, etc.) ne se déclenchent
              pas avant le consentement explicite de l&apos;utilisateur.
            </li>
            <li>
              La bannière offre un bouton «&nbsp;Accepter&nbsp;» et un bouton «&nbsp;Refuser&nbsp;»
              visibles de manière équivalente, sans pousser artificiellement à l&apos;acceptation.
            </li>
            <li>
              L&apos;utilisateur peut modifier son choix (consentement) à tout moment depuis le site
              (lien en bas de page ou dans la politique de confidentialité).
            </li>
            <li>
              Vous connaissez la liste des outils de traçage utilisés (Google Analytics,
              Meta Pixel, outils de chat, vidéos intégrées, etc.) et leur catégorie.
            </li>
          </ul>
        </section>

        <section className="mb-8 rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            2. Formulaires, infolettre et collecte de renseignements
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            La Loi 25 encadre la collecte de renseignements personnels via les formulaires
            en ligne, les infolettres, les dons et les inscriptions. Chaque formulaire doit
            expliquer clairement ce qui est collecté, pourquoi et pendant combien de temps.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc list-inside">
            <li>
              Vos formulaires (contact, soumission, inscription, dons, recrutement, etc.)
              affichent des mentions claires sur l&apos;usage des renseignements transmis.
            </li>
            <li>
              Les champs demandés sont proportionnels à l&apos;objectif (vous ne demandez pas plus
              d&apos;information que nécessaire pour rendre le service).
            </li>
            <li>
              Les cases liées à l&apos;infolettre ou aux communications marketing ne sont pas
              précochées, et le texte précise à quoi la personne consent.
            </li>
            <li>
              Vous avez un mécanisme simple pour que la personne se désabonne ou retire son
              consentement (lien de désabonnement, courriel dédié, etc.).
            </li>
            <li>
              Vous savez où les données des formulaires sont stockées (courriel, CRM,
              plateforme de dons, tableur, etc.) et qui y a accès.
            </li>
          </ul>
        </section>

        <section className="mb-8 rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            3. Politiques, avis de confidentialité et transparence
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            La Loi 25 insiste sur la transparence envers les personnes dont vous traitez les
            renseignements personnels. Votre site web est souvent la première porte d&apos;entrée
            pour communiquer ces informations.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc list-inside">
            <li>
              Votre site présente une politique de confidentialité / vie privée à jour,
              accessible en tout temps (lien en bas de page).
            </li>
            <li>
              La politique explique clairement les catégories de renseignements collectés,
              les finalités, la base légale (le cas échéant) et la durée de conservation.
            </li>
            <li>
              Vous indiquez les principaux fournisseurs et partenaires qui reçoivent des
              renseignements via votre site (hébergement, outils de marketing, paiement, etc.).
            </li>
            <li>
              La politique explique comment une personne peut exercer ses droits (accès,
              rectification, retrait du consentement, plainte).
            </li>
            <li>
              Le responsable de la protection des renseignements personnels (ou la personne
              responsable) est identifié, avec un moyen de le joindre.
            </li>
          </ul>
        </section>

        <section className="mb-8 rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            4. Droits des personnes et demandes d&apos;accès
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Au-delà de la bannière de cookies, la Loi 25 renforce les droits des personnes
            concernées (accès, rectification, retrait du consentement, portabilité dans
            certains cas, etc.). Votre site doit faciliter ces démarches.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc list-inside">
            <li>
              Vos mentions sur le site expliquent comment une personne peut demander l&apos;accès
              à ses renseignements ou demander leur rectification.
            </li>
            <li>
              Vous avez un processus interne pour traiter ces demandes dans des délais
              raisonnables (ex. suivi des demandes par courriel, gabarits de réponses).
            </li>
            <li>
              Vous savez où sont stockés les renseignements collectés via le site, ce qui
              facilite la recherche en cas de demande d&apos;accès.
            </li>
            <li>
              Vous avez réfléchi à la façon de documenter les demandes et les réponses, en
              cas de vérification par la Commission d&apos;accès à l&apos;information.
            </li>
          </ul>
        </section>

        <section className="mb-8 rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            5. Sécurité, accès interne et fournisseurs
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Un site web conforme à la Loi 25 ne se limite pas à la bannière de cookies.
            La sécurité de base, la gestion des accès et le choix des fournisseurs jouent un
            rôle important dans la protection des renseignements personnels.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc list-inside">
            <li>
              L&apos;accès au tableau de bord de votre site (CMS, hébergeur, outils tiers) est
              limité aux personnes qui en ont réellement besoin.
            </li>
            <li>
              Les comptes ont des mots de passe robustes et, idéalement, l&apos;authentification
              à deux facteurs est activée.
            </li>
            <li>
              Vous avez fait un minimum de ménage dans les anciens comptes utilisateurs,
              accès d&apos;agences ou fournisseurs qui ne collaborent plus avec vous.
            </li>
            <li>
              Vous avez une vision d&apos;ensemble des outils qui reçoivent des données de votre
              site (hébergement, formulaires, paiement, emailing, CRM, analytics).
            </li>
            <li>
              Vous êtes en mesure d&apos;expliquer, en langage simple, comment ces outils
              contribuent à votre mission sans multiplier les risques inutiles.
            </li>
          </ul>
        </section>

        <section className="mb-10 rounded-2xl bg-gradient-to-br from-sky-500/10 via-slate-950/80 to-emerald-500/10 p-6 ring-1 ring-sky-500/30">
          <h2 className="text-lg font-semibold text-slate-50">
            Et si votre checklist révèle des zones floues&nbsp;?
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Si cette checklist met en lumière des zones d&apos;incertitude sur vos cookies,
            formulaires ou contenus, vous n&apos;êtes pas seul. Beaucoup de PME, d&apos;OBNL et de
            petites organisations au Québec se trouvent dans la même situation face à la Loi 25.
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Un pré-audit ciblé de votre site web permet de transformer ce flou en plan
            d&apos;action concret&nbsp;: cartographie des outils utilisés, identification des risques
            les plus visibles et liste de correctifs priorisés, adaptée à vos ressources.
          </p>
          <div className="mt-4">
            <Link
              href="/#formulaire"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 hover:text-white"
            >
              Demander un pré-audit gratuit de mon site
            </Link>
          </div>
        </section>

        <footer className="mb-4 border-t border-slate-800/70 pt-4 text-xs text-slate-500">
          <p>
            Cette checklist Loi 25 pour sites web est fournie à titre informatif. Elle ne remplace
            pas un avis juridique et doit être adaptée à la réalité de votre organisation.
          </p>
        </footer>
      </div>
    </main>
  );
}
