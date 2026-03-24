import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ShieldCheck, ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos — Qui est derrière auditloi25.ca | auditloi25.ca",
  description:
    "auditloi25.ca est opéré par un spécialiste en conformité numérique basé à Montréal. Découvrez l'approche, les valeurs et pourquoi ce service a été créé pour les PME et OBNL québécois.",
  alternates: { canonical: "https://auditloi25.ca/a-propos" },
};

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">

        {/* Navbar minimale */}
        <div className="mb-10 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-slate-100 hover:text-white transition-colors">
            auditloi25.ca
          </Link>
        </div>

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-slate-500">
          <Link href="/" className="transition-colors hover:text-slate-300">Accueil</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-slate-400">À propos</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            <MapPin size={11} aria-hidden="true" />
            Montréal, Québec
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Qui est derrière auditloi25.ca&nbsp;?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Un spécialiste en conformité numérique, basé à Montréal, qui a décidé de rendre
            la Loi&nbsp;25 accessible aux organisations qui n&apos;ont ni juriste ni équipe TI.
          </p>
        </header>

        {/* Section — L'origine du service */}
        <section className="mb-12" aria-labelledby="section-origine">
          <h2 id="section-origine" className="mb-4 text-xl font-bold text-slate-50">
            Pourquoi ce service existe
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              Quand la Loi&nbsp;25 a commencé à s&apos;appliquer concrètement aux sites web québécois,
              j&apos;ai observé deux réalités qui ne se rejoignaient pas.
            </p>
            <p>
              D&apos;un côté, des obligations claires : bannières de consentement conformes, formulaires
              transparents, politiques de confidentialité à jour. De l&apos;autre, des centaines de PME
              et d&apos;OBNL qui n&apos;avaient ni le temps, ni le budget, ni les ressources pour naviguer
              dans ce nouveau cadre légal — sans pour autant pouvoir se permettre d&apos;ignorer le
              problème.
            </p>
            <p>
              Les cabinets d&apos;avocats proposent des audits de conformité complets à plusieurs milliers
              de dollars. Utiles pour les grandes organisations, hors de portée pour la plupart des
              autres. Et pourtant, les obligations, elles, s&apos;appliquent à tout le monde.
            </p>
            <p className="font-medium text-slate-200">
              auditloi25.ca est né de cette observation : il manquait un service clair, accessible,
              et ancré dans la réalité des petites organisations québécoises.
            </p>
          </div>
        </section>

        {/* Section — L'approche */}
        <section className="mb-12" aria-labelledby="section-approche">
          <h2 id="section-approche" className="mb-6 text-xl font-bold text-slate-50">
            L&apos;approche
          </h2>
          <div className="space-y-4">
            {[
              {
                titre: "Pas de jargon, pas de rapport de 40 pages",
                texte: "La conformité n'est pas une finalité en soi — c'est un moyen de protéger vos clients, vos donateurs, vos membres. Chaque rapport est rédigé pour être compris par une directrice générale, un coordonnateur marketing ou un responsable bénévole — pas pour impressionner un comité juridique.",
              },
              {
                titre: "Ancré dans les exigences de la CAI",
                texte: "L'audit porte sur les éléments que la Commission d'accès à l'information met explicitement de l'avant pour les sites web : témoins de connexion, bannière de consentement, formulaires, politiques de confidentialité. Pas de zones grises inventées, pas de sur-interprétation.",
              },
              {
                titre: "Honnête sur ce que l'audit couvre",
                texte: "Un audit de site web ne remplace pas un avis juridique complet et ne couvre pas vos processus internes, vos contrats ou votre gouvernance des données. Ce périmètre est clairement délimité dans chaque rapport — pour que vous sachiez exactement ce que vous avez et ce qui reste à faire.",
              },
              {
                titre: "Conçu pour passer à l'action",
                texte: "Chaque rapport se termine par une liste d'actions classées par priorité et par effort réaliste. L'objectif n'est pas que vous compreniez la Loi 25 — c'est que vous sachiez quoi corriger en premier, cette semaine.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 rounded-xl bg-slate-900/60 p-5 ring-1 ring-slate-700/40">
                <ShieldCheck size={18} className="mt-0.5 shrink-0 text-emerald-400" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-slate-100">{item.titre}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section — Pour qui */}
        <section className="mb-12" aria-labelledby="section-pour-qui">
          <h2 id="section-pour-qui" className="mb-4 text-xl font-bold text-slate-50">
            Pour qui ce service est fait
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50">
            <p className="text-sm leading-relaxed text-slate-300 mb-5">
              auditloi25.ca s&apos;adresse aux organisations québécoises qui ont un site web, collectent
              des données personnelles — et n&apos;ont pas d&apos;équipe dédiée à la conformité numérique.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "PME de 5 à 200 employés avec un site vitrine ou transactionnel",
                "OBNL, associations et fondations avec formulaires de dons ou d'inscription",
                "Organismes communautaires avec infolettres et bases de contacts",
                "Coopératives et mutuelles avec collecte de données membres",
                "Municipalités et organismes para-publics locaux",
                "Coordonnateurs marketing ou communication sans ressource TI dédiée",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section — Ce que ce service n'est pas */}
        <section className="mb-12" aria-labelledby="section-pas">
          <h2 id="section-pas" className="mb-4 text-xl font-bold text-slate-50">
            Ce que ce service n&apos;est pas
          </h2>
          <div className="rounded-2xl bg-slate-900/40 p-6 ring-1 ring-slate-800 text-sm leading-relaxed text-slate-400 space-y-3">
            <p>
              <strong className="text-slate-300">Pas un cabinet d&apos;avocats.</strong> auditloi25.ca
              n&apos;offre pas d&apos;avis juridiques et ne peut pas représenter votre organisation devant
              la CAI. Si vous faites face à une enquête ou une plainte, consultez un professionnel
              du droit qualifié.
            </p>
            <p>
              <strong className="text-slate-300">Pas un audit de gouvernance interne.</strong> Le
              service se concentre sur ce qui est visible et vérifiable sur votre site web. Vos
              processus internes de gestion des données, vos contrats avec des tiers, et votre
              gouvernance organisationnelle ne font pas partie du périmètre d&apos;audit.
            </p>
            <p>
              <strong className="text-slate-300">Pas une garantie de conformité totale.</strong>{" "}
              Aucun audit ne peut garantir une conformité absolue — la loi évolue, les pratiques
              aussi. Ce service vous donne un état des lieux clair et un plan d&apos;action concret,
              pas un certificat.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12" aria-labelledby="section-contact">
          <h2 id="section-contact" className="mb-4 text-xl font-bold text-slate-50">
            Contact
          </h2>
          <div className="flex items-start gap-4 rounded-xl bg-slate-900/60 p-5 ring-1 ring-slate-700/40">
            <Mail size={18} className="mt-0.5 shrink-0 text-sky-400" aria-hidden="true" />
            <div>
              <p className="text-sm text-slate-300">Pour toute question sur le service, un audit en cours, ou une demande spécifique :</p>
              <a
                href="mailto:votreboosterdigital@outlook.com"
                className="mt-1 inline-block text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
              >
                votreboosterdigital@outlook.com
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Prêt à faire le point sur votre site&nbsp;?
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Le pré-audit est gratuit, prend 2 minutes à remplir, et vous donne un premier portrait clair instantanément.
          </p>
          <Link
            href="/#formulaire"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white"
          >
            Obtenir mon pré‑audit gratuit
          </Link>
          <p className="mt-3 text-xs text-slate-500">Sans engagement · Aucune carte requise · Rapport instantané</p>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500">
          <Link href="/" className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors font-medium">
            <ArrowLeft size={13} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <Link href="/politique-de-confidentialite" className="text-slate-400 hover:text-slate-200 transition-colors">
            Politique de confidentialité →
          </Link>
        </div>

      </div>
    </main>
  );
}
