"use client";

import { FormEvent, useState } from "react";
import { ShieldIcon } from "@/components/shield-icon";

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      console.log("Réponse API lead:", res.status, res.statusText);

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        console.error("Erreur envoi lead:", data);
        alert(
          "Une erreur est survenue lors de l'envoi du formulaire. Merci de réessayer."
        );
        return;
      }

      setSubmitted(true);
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
          <div className="absolute inset-x-[-40%] top-[-20%] h-[340px] bg-gradient-to-br from-emerald-500/20 via-sky-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-[-40%] left-[-10%] h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-[-30%] right-[-10%] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        </div>
                {/* Hero */}
        <header className="mb-12 grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] md:items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-200 ring-1 ring-slate-700">
                <ShieldIcon size={20} className="shrink-0 text-emerald-400" />
                Audit cookies & Loi 25 pour sites web
              </span>
              <span className="inline-flex w-fit rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
                Pensé pour les PME & OBNL du Québec
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                Transformez un flou juridique en plan d&apos;action concret pour
                votre site web.
              </h1>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                Nous analysons vos cookies, formulaires et contenus liés aux
                renseignements personnels pour vous donner une vue claire des
                risques Loi 25 et des correctifs à prioriser, sans jargon.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 sm:text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 ring-1 ring-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Service privé indépendant – non affilié au gouvernement du Québec
              </span>
              <span className="rounded-full bg-slate-900/60 px-3 py-1 ring-1 ring-slate-700">
                Pré‑audit gratuit à partir de ce formulaire
              </span>
            </div>
          </div>

          {/* Card pricing / proposition de valeur */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.8),0_24px_80px_rgba(15,23,42,0.9)]">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
              Offre d&apos;audit
            </p>
            <h2 className="mt-2 text-sm font-semibold text-slate-50">
              Audit Loi 25 pour sites de PME & OBNL
            </h2>

            <div className="mt-4 flex items-baseline gap-2">
              <p className="text-3xl font-semibold text-emerald-400">
                450&nbsp;$+
              </p>
              <p className="text-xs text-slate-400">
                pour un site vitrine typique (prix estimatif, sur devis)
              </p>
            </div>

            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              <li>Pré‑audit gratuit à partir du formulaire ci‑contre.</li>
              <li>Analyse détaillée des cookies, formulaires et contenus clé.</li>
              <li>Rapport synthèse avec score de risque par zone du site.</li>
              <li>Liste de correctifs concrets, classés par priorité.</li>
            </ul>

            <p className="mt-4 text-[11px] text-slate-500">
              Après le pré‑audit, vous recevez une proposition claire (tarif,
              portée, délais). Vous restez libre d&apos;accepter ou non l&apos;audit
              complet.
            </p>
          </div>
        </header>

        <div className="grid flex-1 gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
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
                className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Recevoir mon pré-audit
              </button>

              {submitted && (
                <p className="text-xs text-emerald-300">
                  Merci! Votre demande a été envoyée. Vous recevrez un retour
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
                    d’organisation (PME, OBNL, municipal, etc.).
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
                    À partir de vos informations, nous réalisons un pré-audit
                    de votre site (témoin, formulaires, pages clés) et vous
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
              Cet audit ne remplace pas un avis juridique, mais il vous donne
              une vision claire des enjeux concrets sur votre site web pour
              mieux décider de vos prochaines étapes.
            </p>
          </section>

          {/* Preuves de confiance */}
          <section className="md:col-span-2 mt-4 space-y-6 rounded-2xl bg-slate-950/60 p-6 ring-1 ring-slate-800">
            <h2 className="text-lg font-semibold text-slate-50">
              Pourquoi nous faire confiance ?
            </h2>

            <div className="grid gap-5 md:grid-cols-3 text-sm">
              <div className="space-y-2">
                <h3 className="font-medium text-slate-100">
                  Spécialiste des petites organisations
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Nous travaillons avec des PME, OBNL et organismes locaux qui
                  n&apos;ont pas d&apos;équipe juridique ou TI dédiée. L&apos;objectif
                  est d&apos;adapter les exigences de la Loi 25 à votre réalité
                  terrain, sans jargon inutile.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-slate-100">
                  Méthode d&apos;audit structurée
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Chaque audit suit une grille précise : cartographie des
                  témoins et outils tiers, analyse des formulaires, mentions de
                  consentement, politique de confidentialité et flux de
                  renseignements personnels liés à votre site.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium text-slate-100">
                  Livrable clair et priorisé
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Vous recevez un court rapport avec un score de risque par
                  zone du site, les non‑conformités observées et une liste de
                  correctifs concrets classés par priorité (rapide, à planifier,
                  à valider avec un juriste).
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              Ce service ne remplace pas un avis juridique, mais il vous donne
              une base solide et structurée pour dialoguer avec votre équipe,
              vos partenaires techniques et, au besoin, vos conseillers
              juridiques.
            </p>
          </section>
        </div>

        {/* À propos */}
        <section className="mt-10 grid gap-8 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-800 md:grid-cols-[minmax(0,2fr),minmax(0,3fr)]">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-50">
              Qui se cache derrière l&apos;audit ?
            </h2>
            <p className="text-sm text-slate-300">
              L&apos;audit est réalisé par un praticien basé au Québec, habitué
              à travailler avec des organisations qui doivent composer avec peu
              de temps et de ressources, mais des obligations croissantes en
              matière de protection des renseignements personnels.
            </p>
            <p className="text-xs text-slate-400">
              L&apos;approche est volontairement pragmatique : comprendre votre
              contexte, identifier les risques concrets sur votre site et vous
              proposer des actions réalistes, en respectant vos ressources
              humaines et financières.
            </p>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-slate-100">
              Ce que vous pouvez attendre de la collaboration
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
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

                {/* FAQ courte */}
        <section className="mt-8 space-y-4 rounded-2xl bg-slate-950/70 p-6 ring-1 ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-50">
            Questions fréquentes
          </h2>

          <div className="space-y-3 text-sm">
            <div>
              <h3 className="text-sm font-medium text-slate-100">
                Est-ce que cet audit me rend « conforme Loi 25 » à lui seul ?
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Non. L&apos;audit se concentre sur votre site web (cookies,
                formulaires, contenus) et vous aide à corriger les risques les
                plus visibles. La conformité globale Loi 25 inclut aussi vos
                processus internes, vos contrats, votre gouvernance des données
                et d&apos;autres aspects qui dépassent le seul site web.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-100">
                Quels sont les risques si on ne fait rien ?
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Au‑delà de l&apos;image et de la confiance des clients, la Loi 25
                prévoit des sanctions importantes pour les organisations qui ne
                protègent pas adéquatement les renseignements personnels,
                pouvant aller jusqu&apos;à des montants très élevés ou un
                pourcentage du chiffre d&apos;affaires, selon la gravité et la
                taille de l&apos;organisation.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-100">
                Combien de temps prend un pré-audit et un audit complet ?
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Le pré‑audit basé sur ce formulaire permet un premier retour en
                quelques jours ouvrables pour un site typique de PME ou d&apos;OBNL.
                Un audit complet (analyse plus détaillée, rapport structuré,
                échanges avec votre équipe) se planifie ensuite selon la taille
                du site et vos échéances.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-slate-800 pt-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} auditloi25.ca – Tous droits réservés.</p>
        </footer>
      </div>
    </main>
  );
}