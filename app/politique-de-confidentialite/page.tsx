import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Politique de confidentialité – auditloi25.ca",
  description:
    "Comment auditloi25.ca collecte, utilise et protège vos renseignements personnels, conformément à la Loi 25 (Loi sur la protection des renseignements personnels dans le secteur privé).",
  alternates: { canonical: "https://auditloi25.ca/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">

          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-slate-500">
            <Link href="/" className="transition-colors hover:text-slate-300">
              Accueil
            </Link>
            <span className="mx-2" aria-hidden="true">·</span>
            <span className="text-slate-400">Politique de confidentialité</span>
          </nav>

          {/* En-tête */}
          <header className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
              Transparence
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-50">
              Politique de confidentialité
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              Dernière mise à jour : mars 2026
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-300">
              La présente politique explique quels renseignements personnels
              sont collectés sur auditloi25.ca, pourquoi, comment ils sont
              utilisés et quels sont vos droits à leur égard, conformément à
              la Loi sur la protection des renseignements personnels dans le
              secteur privé (Loi&nbsp;25, L.R.Q., c.&nbsp;P-39.1).
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-slate-300">

            {/* 1 */}
            <section aria-labelledby="section-responsable">
              <h2
                id="section-responsable"
                className="mb-3 text-base font-semibold text-slate-100"
              >
                1. Responsable de la protection des renseignements personnels
              </h2>
              <p>
                Le site auditloi25.ca est opéré par un spécialiste en
                conformité numérique basé à Montréal (Québec). Le responsable
                de la protection des renseignements personnels est joignable à
                l&apos;adresse suivante&nbsp;:
              </p>
              <div className="mt-3 rounded-xl bg-slate-900/70 p-4 ring-1 ring-slate-700/50 text-slate-200">
                <p className="font-medium">auditloi25.ca</p>
                <p className="mt-1 text-slate-400">
                  Courriel&nbsp;:{" "}
                  <a
                    href="mailto:votreboosterdigital@outlook.com"
                    className="text-sky-400 hover:text-sky-300 underline underline-offset-4 decoration-sky-400/40"
                  >
                    votreboosterdigital@outlook.com
                  </a>
                </p>
                <p className="text-slate-400">Montréal (Québec), Canada</p>
              </div>
            </section>

            {/* 2 */}
            <section aria-labelledby="section-donnees">
              <h2
                id="section-donnees"
                className="mb-3 text-base font-semibold text-slate-100"
              >
                2. Renseignements collectés
              </h2>
              <p>
                Lorsque vous soumettez le formulaire de demande de pré-audit,
                les renseignements suivants sont collectés&nbsp;:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">Nom complet</span>{" "}
                  — pour personnaliser les communications.
                </li>
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Adresse courriel professionnelle
                  </span>{" "}
                  — pour vous transmettre le résultat du pré-audit et, si vous
                  le souhaitez, une proposition d&apos;audit complet.
                </li>
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    URL du site à auditer
                  </span>{" "}
                  — pour réaliser l&apos;analyse technique de votre site.
                </li>
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Pages principales à analyser
                  </span>{" "}
                  — information facultative pour orienter l&apos;analyse.
                </li>
              </ul>
              <p className="mt-3">
                Aucune donnée de paiement, aucun mot de passe ni aucun
                renseignement sensible au sens de la Loi&nbsp;25 n&apos;est
                collecté via ce site.
              </p>
            </section>

            {/* 3 */}
            <section aria-labelledby="section-finalites">
              <h2
                id="section-finalites"
                className="mb-3 text-base font-semibold text-slate-100"
              >
                3. Finalités de la collecte
              </h2>
              <p>
                Vos renseignements sont collectés et utilisés aux seules fins
                suivantes&nbsp;:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="list-disc list-outside">
                  Réaliser le pré-audit Loi&nbsp;25 de votre site web et vous
                  en communiquer les résultats par courriel.
                </li>
                <li className="list-disc list-outside">
                  Vous adresser, si vous y avez consenti implicitement par la
                  soumission du formulaire, une proposition d&apos;audit complet
                  et les suivis associés.
                </li>
                <li className="list-disc list-outside">
                  Répondre à toute question ou demande soumise par courriel.
                </li>
              </ul>
              <p className="mt-3">
                Vos renseignements ne sont pas utilisés à des fins de
                prospection commerciale non sollicitée, de profilage ni de
                prise de décision automatisée.
              </p>
            </section>

            {/* 4 */}
            <section aria-labelledby="section-communication">
              <h2
                id="section-communication"
                className="mb-3 text-base font-semibold text-slate-100"
              >
                4. Communication à des tiers
              </h2>
              <p>
                Vos renseignements ne sont pas vendus ni loués à des tiers.
                Ils peuvent toutefois être transmis à des prestataires
                techniques dans les situations suivantes&nbsp;:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Plateforme d&apos;automatisation (Make ou Zapier)
                  </span>{" "}
                  — utilisée pour acheminer les demandes de pré-audit vers
                  notre système de gestion interne. Ces plateformes agissent à
                  titre de sous-traitants et ne peuvent utiliser vos données à
                  d&apos;autres fins.
                </li>
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Service d&apos;envoi de courriels
                  </span>{" "}
                  — votre adresse courriel peut être transmise à un prestataire
                  d&apos;envoi (ex.&nbsp;: Brevo, Resend) pour les communications
                  liées à votre demande.
                </li>
              </ul>
              <p className="mt-3">
                Ces prestataires peuvent être situés hors du Québec ou du
                Canada. Dans ce cas, nous nous assurons que des mesures de
                protection adéquates sont en place avant tout transfert,
                conformément à l&apos;article&nbsp;17 de la Loi&nbsp;25.
              </p>
            </section>

            {/* 5 */}
            <section aria-labelledby="section-conservation">
              <h2
                id="section-conservation"
                className="mb-3 text-base font-semibold text-slate-100"
              >
                5. Conservation des renseignements
              </h2>
              <p>
                Vos renseignements sont conservés pour la durée nécessaire à
                l&apos;atteinte des finalités décrites à l&apos;article&nbsp;3,
                soit au maximum{" "}
                <span className="font-medium text-slate-200">12 mois</span>{" "}
                suivant votre dernière interaction avec nos services. Au-delà
                de cette période, ils sont supprimés de façon sécuritaire ou
                rendus anonymes.
              </p>
            </section>

            {/* 6 */}
            <section aria-labelledby="section-droits">
              <h2
                id="section-droits"
                className="mb-3 text-base font-semibold text-slate-100"
              >
                6. Droits des personnes concernées
              </h2>
              <p>
                Conformément à la Loi&nbsp;25, vous disposez des droits
                suivants à l&apos;égard de vos renseignements personnels&nbsp;:
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Droit d&apos;accès
                  </span>{" "}
                  — obtenir confirmation que des renseignements vous concernant
                  sont détenus et en recevoir copie.
                </li>
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Droit de rectification
                  </span>{" "}
                  — faire corriger tout renseignement inexact, incomplet ou
                  équivoque.
                </li>
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Droit à l&apos;effacement
                  </span>{" "}
                  — demander la suppression de vos renseignements lorsque leur
                  conservation n&apos;est plus nécessaire aux fins pour lesquelles
                  ils ont été collectés.
                </li>
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Droit à la portabilité
                  </span>{" "}
                  — recevoir vos renseignements dans un format technologique
                  structuré et couramment utilisé.
                </li>
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Droit de retrait du consentement
                  </span>{" "}
                  — retirer votre consentement à tout moment, sans préjudice
                  aux traitements déjà effectués.
                </li>
              </ul>
              <p className="mt-3">
                Pour exercer l&apos;un de ces droits, écrivez-nous à{" "}
                <a
                  href="mailto:votreboosterdigital@outlook.com"
                  className="text-sky-400 hover:text-sky-300 underline underline-offset-4 decoration-sky-400/40"
                >
                  votreboosterdigital@outlook.com
                </a>
                . Nous répondrons dans un délai de 30 jours.
              </p>
            </section>

            {/* 7 */}
            <section aria-labelledby="section-cookies">
              <h2
                id="section-cookies"
                className="mb-3 text-base font-semibold text-slate-100"
              >
                7. Témoins de connexion (cookies)
              </h2>
              <p>
                Ce site utilise des témoins de connexion gérés par{" "}
                <span className="font-medium text-slate-200">CookieYes</span>,
                un outil de gestion du consentement. Lors de votre première
                visite, une bannière vous permet d&apos;accepter ou de refuser
                les différentes catégories de témoins.
              </p>
              <ul className="mt-3 space-y-2 pl-4">
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Témoins nécessaires
                  </span>{" "}
                  — indispensables au fonctionnement du site (ex.&nbsp;:
                  mémorisation de vos préférences de consentement). Ils ne
                  peuvent pas être refusés.
                </li>
                <li className="list-disc list-outside">
                  <span className="font-medium text-slate-200">
                    Témoins analytiques ou fonctionnels
                  </span>{" "}
                  — le cas échéant, ils sont déposés uniquement après votre
                  consentement explicite.
                </li>
              </ul>
              <p className="mt-3">
                Vous pouvez modifier vos préférences à tout moment en cliquant
                sur le lien «&nbsp;Préférences cookies&nbsp;» présent en bas de
                page.
              </p>
              <div className="mt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Liste des témoins détectés sur ce site
                </p>
                {/* CookieYes génère automatiquement ce tableau à partir des cookies détectés */}
                <div className="cky-audit-table-element" />
              </div>
            </section>

            {/* 8 */}
            <section aria-labelledby="section-securite">
              <h2
                id="section-securite"
                className="mb-3 text-base font-semibold text-slate-100"
              >
                8. Sécurité
              </h2>
              <p>
                Des mesures de sécurité raisonnables sont mises en œuvre pour
                protéger vos renseignements contre l&apos;accès non autorisé, la
                divulgation ou la destruction. Les transmissions de données
                entre votre navigateur et notre site sont chiffrées via
                HTTPS.
              </p>
            </section>

            {/* 9 */}
            <section aria-labelledby="section-modifications">
              <h2
                id="section-modifications"
                className="mb-3 text-base font-semibold text-slate-100"
              >
                9. Modifications à cette politique
              </h2>
              <p>
                Nous nous réservons le droit de modifier cette politique à
                tout moment. La version en vigueur est celle affichée sur
                cette page avec sa date de mise à jour. Toute modification
                substantielle sera signalée sur le site.
              </p>
            </section>

            {/* 10 */}
            <section aria-labelledby="section-contact">
              <h2
                id="section-contact"
                className="mb-3 text-base font-semibold text-slate-100"
              >
                10. Nous joindre
              </h2>
              <p>
                Pour toute question relative à cette politique ou à la gestion
                de vos renseignements personnels, contactez le responsable de
                la protection des renseignements personnels&nbsp;:
              </p>
              <div className="mt-3 rounded-xl bg-slate-900/70 p-4 ring-1 ring-slate-700/50">
                <p className="font-medium text-slate-200">auditloi25.ca</p>
                <p className="mt-1 text-slate-400">
                  <a
                    href="mailto:votreboosterdigital@outlook.com"
                    className="text-sky-400 hover:text-sky-300 underline underline-offset-4 decoration-sky-400/40"
                  >
                    votreboosterdigital@outlook.com
                  </a>
                </p>
              </div>
              <p className="mt-3 text-slate-400">
                Si vous estimez que vos droits n&apos;ont pas été respectés, vous
                pouvez également déposer une plainte auprès de la{" "}
                <a
                  href="https://www.cai.gouv.qc.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 underline underline-offset-4 decoration-sky-400/40"
                >
                  Commission d&apos;accès à l&apos;information du Québec (CAI)
                </a>
                .
              </p>
            </section>

          </div>

          {/* Lien retour */}
          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Retour à l&apos;accueil
            </Link>
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}
