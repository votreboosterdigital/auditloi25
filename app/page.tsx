"use client";

import { FormEvent, useState } from "react";
import { ShieldIcon } from "@/components/shield-icon";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormState = {
  name: string;
  email: string;
  siteUrl: string;
  mainPages: string;
};

export default function HomePage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    siteUrl: "",
    mainPages: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(false);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        console.error("Erreur envoi lead:", data);
        alert(
          "Une erreur est survenue lors de l'envoi du formulaire. Merci de réessayer."
        );
        return;
      }

      setSubmitted(true);
      router.push("/merci");
    } catch (error) {
      console.error("Erreur réseau lead:", error);
      alert(
        "Impossible de joindre le serveur. Vérifiez votre connexion et réessayez."
      );
    }
  };

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col overflow-hidden px-4 py-10 sm:px-6 lg:px-10">
        {/* Fond décoratif */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-[-40%] top-[-25%] h-[360px] bg-gradient-to-br from-sky-500/25 via-emerald-500/15 to-transparent blur-3xl" />
          <div className="absolute bottom-[-35%] left-[-10%] h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute bottom-[-25%] right-[-10%] h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
        </div>

        {/* Hero */}
        <header className="mb-12 mt-2 grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] md:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 text-[11px] font-medium text-slate-100 ring-1 ring-sky-500/50">
                <ShieldIcon
                  size={20}
                  className="shrink-0 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                />
                Audit ciblé de votre site web
              </span>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Aligné sur les exigences clés de la CAI
              </span>
            </div>

            <div className="space-y-3">
  <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
    Votre site web parle déjà de vous.
    Assurez-vous qu&apos;il ne parle pas contre vous avec la Loi 25.
  </h1>
  <p className="max-w-xl text-sm text-slate-300 sm:text-base">
    Vous avez ajouté une bannière de cookies, mis en ligne une politique de
    confidentialité… mais vous n&apos;êtes pas certain que tout se tient vraiment.
    Et vous n&apos;avez ni le temps ni l&apos;équipe interne pour décortiquer chaque
    exigence de la Loi 25.
  </p>
  <p className="max-w-xl text-sm text-slate-300 sm:text-base">
    L&apos;audit part de votre réalité&nbsp;: votre site, vos formulaires, vos outils.
    L&apos;objectif est simple&nbsp;: transformer un flou juridique en plan d&apos;action
    clair, priorisé et réaliste pour votre organisation.
  </p>
  <p className="mt-3">
    <Link
      href="/ressources/checklist-loi-25-site-web"
      className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 hover:text-sky-200"
    >
      <span>Préparer votre site : voir la checklist Loi 25</span>
      <span className="text-[10px]">→</span>
    </Link>
  </p>
</div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 sm:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 ring-1 ring-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Service privé indépendant – non affilié au gouvernement du
                Québec
              </span>
              <span className="rounded-full bg-slate-950/70 px-3 py-1 ring-1 ring-slate-700">
                Pré‑audit gratuit à partir de ce formulaire
              </span>
            </div>
          </div>

          {/* Card pricing */}
          <div className="relative rounded-2xl border border-slate-800/80 bg-slate-950/85 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.9)]">
            <div className="pointer-events-none absolute inset-[-1px] -z-10 rounded-2xl bg-gradient-to-br from-sky-500/30 via-emerald-500/20 to-transparent opacity-70" />
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Forfait d&apos;audit
            </p>
            <h2 className="mt-2 text-sm font-semibold text-slate-50">
              Audit Loi 25 – présence web
            </h2>
            <div className="mt-4 flex items-baseline gap-2">
              <p className="text-3xl font-semibold text-sky-400">
                450&nbsp;$+
              </p>
              <p className="text-xs text-slate-400">
                pour un site vitrine typique (prix ajusté selon la taille et la
                complexité)
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-xs text-slate-200 list-disc list-inside">
              <li>Pré‑audit gratuit à partir du formulaire de cette page.</li>
              <li>
                Cartographie des cookies, scripts tiers et outils de suivi.
              </li>
              <li>
                Analyse des formulaires, contenus légaux et parcours de
                consentement.
              </li>
              <li>
                Rapport synthèse (PDF) avec score de risque par zone du site.
              </li>
              <li>
                Liste de correctifs concrets, classés par priorité et par type.
              </li>
            </ul>
            <p className="mt-4 text-[11px] text-slate-500">
              À l&apos;issue du pré‑audit, vous recevez une proposition détaillée
              (portée, tarif, délais). Vous ne confirmez l&apos;audit complet
              qu&apos;une fois que tout est clair pour vous.
            </p>
            <div className="mt-3 text-[11px]">
              <Link href="/offre" className="text-sky-400 hover:text-sky-300">
                Voir l&apos;offre d&apos;audit détaillée →
              </Link>
            </div>
          </div>
        </header>

        {/* Sanctions chiffrées */}
        <section className="mb-10 grid gap-4 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 md:grid-cols-3">
          <div className="md:col-span-3 mb-2">
            <h2 className="text-lg font-semibold text-slate-50">
              Ce que risquent concrètement les organisations non conformes
            </h2>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              La CAI dispose de pouvoirs d&apos;enquête et de sanction
              progressifs. Les premières sanctions ont été émises en 2024.
            </p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-4 ring-1 ring-slate-800">
            <p className="text-2xl font-semibold text-sky-400">10 M$</p>
            <p className="mt-1 text-xs font-medium text-slate-200">
              Amendes administratives
            </p>
            <p className="mt-1 text-xs text-slate-400">
              ou 2&nbsp;% du chiffre d&apos;affaires mondial, selon le montant
              le plus élevé. Pour des manquements moins graves (registres,
              délais de réponse, etc.).
            </p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-4 ring-1 ring-slate-800">
            <p className="text-2xl font-semibold text-sky-400">25 M$</p>
            <p className="mt-1 text-xs font-medium text-slate-200">
              Amendes pénales
            </p>
            <p className="mt-1 text-xs text-slate-400">
              ou 4&nbsp;% du chiffre d&apos;affaires mondial pour les
              infractions graves (collecte sans consentement, divulgation
              illégale).
            </p>
          </div>
          <div className="rounded-xl bg-slate-950/80 p-4 ring-1 ring-slate-800">
            <p className="text-2xl font-semibold text-emerald-400">
              Dès maintenant
            </p>
            <p className="mt-1 text-xs font-medium text-slate-200">
              Inspections actives
            </p>
            <p className="mt-1 text-xs text-slate-400">
              La CAI a intensifié ses activités depuis 2024. Aucune organisation
              n&apos;est trop petite pour être concernée.
            </p>
          </div>
        </section>

        {/* Formulaire + Comment ça marche */}
        <div
          id="formulaire"
          className="grid flex-1 gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)]"
        >
          {/* Formulaire lead */}
          <section className="rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 ring-slate-800">
            <h2 className="text-lg font-semibold text-slate-50">
              Demander un pré-audit gratuit
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Vous recevez un court retour par courriel avec les principaux
              points à corriger sur votre site, ainsi qu&apos;une estimation du
              temps et du budget pour un audit complet.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-slate-200"
                >
                  Nom complet
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  placeholder="Ex. Marie Tremblay"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs font-medium text-slate-200"
                >
                  Courriel professionnel
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  placeholder="Ex. vous@organisation.ca"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="siteUrl"
                  className="text-xs font-medium text-slate-200"
                >
                  URL du site à auditer
                </label>
                <input
                  id="siteUrl"
                  name="siteUrl"
                  type="url"
                  required
                  value={form.siteUrl}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  placeholder="https://www.votresite.ca"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="mainPages"
                  className="text-xs font-medium text-slate-200"
                >
                  Pages principales à analyser
                </label>
                <textarea
                  id="mainPages"
                  name="mainPages"
                  rows={3}
                  value={form.mainPages}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  placeholder="Ex. Accueil, Services, Formulaire de contact, Donation, Boutique..."
                />
                <p className="text-[11px] text-slate-500">
                  Ajoutez les pages avec formulaires, paiement, inscriptions,
                  infolettre, dons, etc.
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Recevoir mon pré-audit
              </button>

              {submitted && (
                <p className="text-xs text-emerald-300">
                  Merci ! Votre demande a été envoyée. Vous recevrez un retour
                  par courriel sous peu.
                </p>
              )}

              <p className="mt-3 text-[11px] text-slate-500">
                Le pré-audit est gratuit et sans engagement. Vous décidez
                ensuite si vous souhaitez aller plus loin avec un audit complet.
              </p>
            </form>
          </section>
          {/* Comment ça marche */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">
                Comment ça marche
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Un processus simple, pensé pour les organisations sans équipe
                juridique ou TI dédiée.
              </p>
            </div>

            <ol className="space-y-4 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                  1
                </span>
                <div>
                  <p className="font-medium">Vous remplissez le formulaire.</p>
                  <p className="text-slate-400">
                    Vous indiquez votre site, vos pages clés et le type
                    d&apos;organisation (PME, OBNL, municipal, etc.).
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                  2
                </span>
                <div>
                  <p className="font-medium">Pré-audit et retour initial.</p>
                  <p className="text-slate-400">
                    À partir de vos informations, nous réalisons un pré-audit de
                    votre site (témoins, formulaires, pages clés) et vous
                    envoyons un premier retour avec les zones à risque.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                  3
                </span>
                <div>
                  <p className="font-medium">
                    Audit complet et plan d&apos;action (optionnel).
                  </p>
                  <p className="text-slate-400">
                    Si vous le souhaitez, nous réalisons un audit complet avec
                    rapport détaillé, priorisation des correctifs et
                    accompagnement possible avec votre équipe ou vos
                    fournisseurs.
                  </p>
                </div>
              </li>
            </ol>

            <p className="text-xs text-slate-500">
              Cet audit ne remplace pas un avis juridique, mais il vous aide à
              vérifier des obligations clés mises de l&apos;avant par la CAI pour
              les sites web : transparence sur les témoins, consentement éclairé
              et possibilité de refuser aussi facilement que d&apos;accepter, ainsi
              qu&apos;une information plus claire sur l&apos;usage des renseignements
              personnels.
            </p>
          </section>

          {/* Preuves de confiance */}
          <section className="md:col-span-2 mt-4 grid gap-6 rounded-2xl md:rounded-3xl bg-slate-950/60 p-6 ring-1 ring-slate-800 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)]">
            <div className="space-y-3 border-b border-slate-800 pb-4 md:border-b-0 md:border-r md:pr-6">
              <h2 className="text-lg font-semibold text-slate-50">
                Pourquoi nous faire confiance ?
              </h2>
              <p className="text-sm text-slate-300">
                Un service pensé comme un cabinet de conseil : analyse
                rigoureuse, livrables clairs, et adaptation à la réalité des
                petites organisations, sans prétendre remplacer le rôle des
                juristes.
              </p>
              <p className="text-xs text-slate-500">
                L&apos;objectif : vous donner assez de clarté pour prendre de
                bonnes décisions (techniques, organisationnelles, juridiques)
                sans vous noyer dans les détails.
              </p>
            </div>

            <div className="grid gap-5 text-sm md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                  Profil clients
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  PME de services, OBNL, organismes locaux, fédérations et
                  petites municipalités qui doivent se structurer face à la Loi
                  25 avec des ressources limitées.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                  Méthode
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Grille d&apos;audit structurée : cookies, scripts tiers,
                  formulaires, contenus légaux, parcours de consentement,
                  journaux d&apos;événements et cohérence globale du site.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
                  Livrables
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Rapport synthèse, score de risque, priorisation des actions et
                  recommandations formulées pour être comprises par votre
                  direction, vos TI et vos partenaires juridiques.
                </p>
              </div>
            </div>
          </section>

          {/* À propos */}
          <section className="md:col-span-2 mt-6 grid gap-8 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)]">
  <div className="space-y-3">
    <h2 className="text-lg font-semibold text-slate-50">
      Qui se cache derrière l&apos;audit ?
    </h2>
    <p className="text-sm text-slate-300">
      L&apos;audit est réalisé par un praticien basé au Québec, qui travaille
      au quotidien avec des PME, des OBNL et des organisations locales qui
      n&apos;ont ni service juridique ni équipe TI dédiée… mais qui doivent malgré
      tout rendre des comptes sur la protection des renseignements personnels.
    </p>
    <p className="text-xs text-slate-400">
      Je viens du terrain numérique&nbsp;: sites web, formulaires, outils
      d&apos;analyse, automatisation. Mon rôle n&apos;est pas de vous noyer dans le
      jargon juridique, mais de traduire la Loi 25 en conséquences concrètes
      sur votre site web&nbsp;: où ça coince, ce qui est acceptable, et ce qu&apos;il
      est réaliste de corriger en premier avec vos ressources actuelles.
    </p>
    <p className="text-xs text-slate-400">
      Concrètement, je vous aide à répondre à des questions très simples que
      vos équipes se posent déjà&nbsp;: «&nbsp;Est‑ce qu&apos;on peut garder cet outil&nbsp;?&nbsp;»,
      «&nbsp;Qu&apos;est‑ce qu&apos;on doit absolument changer sur le site&nbsp;?&nbsp;», «&nbsp;Comment
      expliquer tout ça à la direction ou au conseil d&apos;administration&nbsp;?&nbsp;».
    </p>
  </div>
  <div className="space-y-3 text-sm text-slate-300">
    <h3 className="text-sm font-semibold text-slate-100">
      Ce que vous pouvez attendre de la collaboration
    </h3>
    <ul className="space-y-2 text-xs sm:text-sm list-disc list-inside">
      <li>Un langage simple, sans jargon inutile.</li>
      <li>Une vision extérieure sur vos pratiques numériques.</li>
      <li>
        Des recommandations priorisées, faciles à transmettre à votre
        équipe ou à votre fournisseur web.
      </li>
      <li>
        Une posture de collaboration avec vos autres partenaires
        (juristes, TI, agence, etc.).
      </li>
    </ul>
  </div>
</section>

          {/* FAQ */}
          <section className="md:col-span-2 mt-6 space-y-4 rounded-2xl bg-slate-950/70 p-6 ring-1 ring-slate-800">
            <h2 className="text-lg font-semibold text-slate-50">
              Questions fréquentes
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="text-sm font-medium text-slate-100">
                  Est-ce que cet audit me rend « conforme Loi 25 » à lui seul ?
                </h3>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Non. L&apos;audit se concentre sur votre site web (cookies,
                  formulaires, contenus) et vous aide à corriger les risques les
                  plus visibles. La conformité globale Loi 25 inclut aussi vos
                  processus internes, vos contrats, votre gouvernance des
                  données et d&apos;autres aspects qui dépassent le seul site web.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-100">
                  Quels sont les risques si on ne fait rien ?
                </h3>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Au‑delà de l&apos;image et de la confiance des clients, la Loi 25
                  prévoit des amendes administratives pouvant aller jusqu&apos;à
                  10&nbsp;M$ (ou 2&nbsp;% du chiffre d&apos;affaires mondial) et des
                  amendes pénales pouvant atteindre 25&nbsp;M$ (ou 4&nbsp;% du
                  chiffre d&apos;affaires) pour les infractions les plus graves.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-100">
                  Combien de temps prend un pré-audit et un audit complet ?
                </h3>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                  Le pré‑audit basé sur ce formulaire permet un premier retour
                  en quelques jours ouvrables pour un site typique de PME ou
                  d&apos;OBNL. Un audit complet se planifie ensuite selon la taille
                  du site et vos échéances.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA bas de page */}
        <section className="mt-10 mb-8 rounded-2xl bg-gradient-to-br from-sky-500/10 via-slate-950/80 to-emerald-500/10 p-8 ring-1 ring-sky-500/30 text-center">
          <h2 className="text-lg font-semibold text-slate-50">
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
            Commencez par le pré‑audit gratuit. En quelques minutes, vous nous
            donnez les informations essentielles sur votre site. Nous faisons le
            reste et revenons vers vous avec un premier portrait clair de votre
            situation.
          </p>
          <a href="#formulaire">
            <span className="mt-4 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 hover:text-white">
              Demander mon pré‑audit gratuit
            </span>
          </a>
        </section>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/70 to-transparent" />

        <footer className="mt-4 border-t border-slate-800/70 pt-4 text-xs text-slate-500">
  <p>© {new Date().getFullYear()} auditloi25.ca – Tous droits réservés.</p>
  <p className="mt-2">
    <a
      href="/ressources/checklist-loi-25-site-web"
      className="text-sky-400 hover:text-sky-300"
    >
      Voir la checklist Loi 25 pour votre site web
    </a>
  </p>
</footer>
      </div>
    </main>
  );
}
