// src/app/offre/page.tsx
import Link from "next/link";

export default function OffrePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-6 lg:px-10">
        {/* En-tête simple */}
        <header className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-50">
              auditloi25<span className="text-sky-400">.ca</span>
            </p>
            <p className="text-[11px] text-slate-400">
              Audit cookies & Loi 25 pour sites web au Québec
            </p>
          </div>
          <Link href="/">
            <span className="text-xs text-sky-400 hover:text-sky-300">
              ← Retour à la page principale
            </span>
          </Link>
        </header>

        {/* Hero offre */}
        <section className="mb-10 grid gap-8 rounded-2xl bg-slate-950/80 p-6 ring-1 ring-slate-800 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
              Offre détaillée
            </p>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Audit Loi 25 centré sur votre site web et vos parcours en ligne.
            </h1>
            <p className="text-sm text-slate-300 sm:text-base">
  L&apos;objectif : partir de votre site et de vos outils numériques
  pour vous donner une vue claire de vos risques Loi 25, des
  correctifs prioritaires et des conversations à avoir avec vos
  partenaires (TI, agence, juristes).
</p>
<p className="mt-3">
  <Link
    href="/ressources/checklist-loi-25-site-web"
    className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/40 hover:bg-slate-900 hover:text-sky-200"
  >
    <span>Voir la checklist Loi 25 pour votre site web</span>
    <span className="text-[10px]">→</span>
  </Link>
</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Investissement indicatif
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <p className="text-3xl font-semibold text-sky-400">
                450&nbsp;$ à 900&nbsp;$
              </p>
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Pour la majorité des sites vitrines et des OBNL (hors boutiques
              complexes ou écosystèmes d&apos;applications plus larges). Un
              devis précis est fourni après le pré‑audit gratuit.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-slate-200">
              <li>Pré‑audit gratuit à partir du formulaire sur la page d&apos;accueil.</li>
              <li>Audit complet du site et des parcours en ligne définis ensemble.</li>
              <li>Rapport synthèse + session de restitution (à distance).</li>
            </ul>

            <div className="mt-5">
              <Link href="/">
                <span className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-emerald-400">
                  Demander d&apos;abord un pré‑audit gratuit
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Pour qui c'est fait */}
        <section className="mb-10 grid gap-8 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-slate-50">
              Pour qui cette offre est-elle pertinente ?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Vous n&apos;avez pas besoin d&apos;un &laquo; programme de conformité &raquo;
              complet, mais vous voulez cesser de naviguer à vue avec la Loi 25.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-4 text-sm md:grid-cols-2">
            <div className="space-y-1">
              <h3 className="font-medium text-slate-100">
                PME de services et cabinets
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Votre site sert à présenter vos services, générer des demandes
                de soumission ou des prises de rendez‑vous. Vous utilisez des
                outils comme Google Analytics, formulaires, infolettres, etc.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-slate-100">
                OBNL, associations, organismes locaux
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Vous gérez des membres, des bénévoles, des donateurs ou des
                participants à vos activités, et votre site collecte des
                renseignements personnels via divers formulaires.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-slate-100">
                Organisations publiques de petite taille
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Vous devez montrer une exemplarité minimale (municipalités,
                bibliothèques, organismes paramunicipaux, etc.) et souhaitez
                une vue claire de votre présence web.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-slate-100">
                Équipes sans ressources juridiques internes
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Vous voulez comprendre les enjeux avant d&apos;impliquer (au
                besoin) un cabinet d&apos;avocats, pour utiliser au mieux leur
                temps et leurs honoraires.
              </p>
            </div>
          </div>
        </section>

        {/* Contenu du forfait d'audit */}
        <section className="mb-10 rounded-2xl bg-slate-950/80 p-6 ring-1 ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            Ce que comprend l&apos;audit Loi 25 – présence web
          </h2>

          <div className="mt-5 grid gap-6 text-sm md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                1. Cartographie technique
              </h3>
              <ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
                <li>Inventaire des cookies, scripts et outils de suivi.</li>
                <li>Identification des fournisseurs tiers et des transferts potentiels.</li>
                <li>Vérification basique des bannières / préférences cookies.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                2. Parcours formulaires & contenus
              </h3>
              <ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
                <li>Analyse des formulaires (contact, dons, inscriptions, etc.).</li>
                <li>Vérification des mentions d&apos;information et des consentements.</li>
                <li>Revue de la politique de confidentialité liée au site.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                3. Synthèse des risques
              </h3>
              <ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
                <li>Score de risque par zone du site (faible, modéré, élevé).</li>
                <li>Résumé des écarts par rapport aux bonnes pratiques Loi 25.</li>
                <li>Identification des sujets nécessitant un avis juridique formel.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                4. Plan d&apos;action priorisé
              </h3>
              <ul className="space-y-2 text-xs text-slate-300 sm:text-sm">
                <li>Liste des correctifs concrets classés par priorité et par effort.</li>
                <li>Suggestions de formulation pour certaines sections (bannières, formulaires, contenus clés).</li>
                <li>Recommandations sur les prochaines étapes (techniques, organisationnelles, juridiques).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="mb-10 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            Comment se déroule concrètement l&apos;audit ?
          </h2>

          <ol className="mt-4 space-y-4 text-sm text-slate-200">
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/40">
                1
              </span>
              <div>
                <p className="font-medium">Pré‑audit gratuit via le formulaire.</p>
                <p className="text-xs text-slate-400 sm:text-sm">
                  Vous décrivez votre site, vos pages et vos outils. Un premier
                  retour par courriel vous donne une idée des enjeux et du
                  niveau d&apos;effort à prévoir.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/40">
                2
              </span>
              <div>
                <p className="font-medium">Devis et cadrage de l&apos;audit.</p>
                <p className="text-xs text-slate-400 sm:text-sm">
                  Si vous décidez d&apos;aller de l&apos;avant, nous validons ensemble
                  la portée (sites, sous‑domaines, parcours) et les attentes
                  vis‑à‑vis du rapport.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/40">
                3
              </span>
              <div>
                <p className="font-medium">Réalisation de l&apos;audit.</p>
                <p className="text-xs text-slate-400 sm:text-sm">
                  Analyse du site, des scripts, des formulaires et des contenus.
                  Si nécessaire, quelques échanges courts par courriel pour
                  clarifier certains processus internes.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/15 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/40">
                4
              </span>
              <div>
                <p className="font-medium">Remise et explication du rapport.</p>
                <p className="text-xs text-slate-400 sm:text-sm">
                  Envoi du rapport (PDF) et rencontre de restitution à distance
                  pour passer en revue les principaux risques, les priorités et
                  répondre à vos questions.
                </p>
              </div>
            </li>
          </ol>

          <div className="mt-6">
            <Link href="/">
              <span className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-emerald-400">
                Je commence par le pré‑audit gratuit
              </span>
            </Link>
          </div>
        </section>
        {/* Situations typiques */}
        <section className="mb-10 rounded-2xl bg-slate-950/80 p-6 ring-1 ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            Quelques situations où l&apos;audit fait une vraie différence
          </h2>

          <div className="mt-4 grid gap-4 text-sm md:grid-cols-3">
            <div className="space-y-2 rounded-xl bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                PME de services
              </p>
              <p className="text-xs text-slate-300 sm:text-sm">
                Le site a été refondu il y a 2–3 ans avec plusieurs outils
                d&apos;analyse et de formulaires, mais personne n&apos;a pris le
                temps de vérifier si tout est cohérent avec la Loi 25.
              </p>
            </div>

            <div className="space-y-2 rounded-xl bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                OBNL / association
              </p>
              <p className="text-xs text-slate-300 sm:text-sm">
                Vous collectez des données de membres, bénévoles ou donateurs
                via le site (inscriptions, dons, infolettre) et vous voulez
                éviter de mauvaises surprises en cas de question d&apos;un
                membre ou de la CAI.
              </p>
            </div>

            <div className="space-y-2 rounded-xl bg-slate-900/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-400">
                Organisation publique locale
              </p>
              <p className="text-xs text-slate-300 sm:text-sm">
                Vous devez montrer que vous prenez la Loi 25 au sérieux, mais
                vous n&apos;avez pas de ressource dédiée pour faire le tour de
                vos pages, formulaires, cookies et contenus existants.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ courte spécifique à l'offre */}
        <section className="mb-8 rounded-2xl bg-slate-950/80 p-6 ring-1 ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            Questions fréquentes sur l&apos;offre
          </h2>

          <div className="mt-4 space-y-3 text-sm">
            <div>
              <h3 className="text-sm font-medium text-slate-100">
                Est-ce que vous touchez à notre code ou à nos systèmes ?
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Non. L&apos;audit se fait en lecture seule : analyse de votre site,
                de vos scripts et de ce qui est visible côté utilisateur. Les
                correctifs proposés peuvent ensuite être appliqués par votre
                équipe ou votre fournisseur web.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-100">
                Travaillez-vous avec notre cabinet d&apos;avocats si nous en avons un ?
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Oui, l&apos;idéal est souvent que le rapport d&apos;audit serve de base
                à des recommandations juridiques plus fines. Nous pouvons
                adapter le format du livrable pour qu&apos;il soit facilement
                exploitable par vos conseillers juridiques.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-100">
                Et si nous avons déjà une solution de bannière cookies ?
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                L&apos;audit prend en compte les outils que vous utilisez
                déjà. L&apos;objectif est de vérifier leur configuration, leur
                cohérence avec vos textes et la façon dont ils s&apos;intègrent
                dans l&apos;expérience utilisateur globale.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-4 border-t border-slate-800/70 pt-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} auditloi25.ca – Tous droits réservés.</p>
        </footer>
      </div>
    </main>
  );
}
