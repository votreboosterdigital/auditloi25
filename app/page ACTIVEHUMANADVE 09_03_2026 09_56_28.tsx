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
    <main className="min-h-screen">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/40">
              <ShieldIcon size={22} className="shrink-0" />
              Québec • PME & OBNL
            </span>
            <span className="inline-flex w-fit rounded-full bg-slate-900/70 px-3 py-1 text-[11px] text-slate-300 ring-1 ring-slate-700">
              Service privé indépendant – non affilié au gouvernement du Québec
            </span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Audit cookies & Loi 25
          </h1>

          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            Identifier rapidement les risques liés aux témoins, aux formulaires
            et à la gestion des renseignements personnels de votre site web, en
            langage simple et orienté action.
          </p>
        </header>

        <div className="grid flex-1 gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)]">
          {/* Formulaire lead */}
          <section className="rounded-2xl bg-slate-900/60 p-6 shadow-lg ring-1 ring-slate-800">
            <h2 className="text-lg font-semibold text-slate-50">
              Demander un pré-audit gratuit
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              Vous recevez un court retour par courriel avec les principaux
              points à corriger sur votre site.
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
                  <p className="font-medium">Analyse cookies & Loi 25.</p>
                  <p className="text-slate-400">
                    On cartographie vos témoins, formulaires, outils tiers et
                    points sensibles au regard de la Loi 25.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                  3
                </span>
                <div>
                  <p className="font-medium">Retour concret et options.</p>
                  <p className="text-slate-400">
                    Vous recevez un court rapport avec les principaux risques,
                    des exemples de correctifs et les prochaines étapes
                    possibles (accompagnement ou autonomie).
                  </p>
                </div>
              </li>
            </ol>

            <p className="text-xs text-slate-500">
              Cet audit ne remplace pas un avis juridique, mais il vous donne
              une vision claire des enjeux concrets sur votre site web.
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
                  zone du site, les non‑conformités observées et une liste
                  de correctifs concrets classés par priorité (rapide, à planifier,
                  à valider avec un juriste).
                </p>
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              Ce service ne remplace pas un avis juridique, mais il vous donne
              une base solide et structurée pour décider de vos prochaines
              étapes (correctifs techniques, communication, consultation
              juridique au besoin).
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
              L&apos;audit est réalisé par un praticien basé au Québec, qui
              accompagne des organisations dans la mise en place de pratiques
              numériques plus responsables : cartographie des données,
              organisation des processus internes et vulgarisation des enjeux
              de protection des renseignements personnels.
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
              <li>Des recommandations priorisées, faciles à transmettre à votre équipe ou à votre fournisseur web.</li>
              <li>Une posture de collaboration avec vos autres partenaires (juristes, TI, agence, etc.).</li>
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
                Est-ce que cet audit me rend &laquo; conforme Loi 25 &raquo; à
                lui seul ?
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                L&apos;audit vous donne une vision claire des risques liés à
                votre site web et des actions prioritaires à poser. La
                conformité globale implique aussi vos contrats, vos processus
                internes, votre gestion des accès, etc., que nous pourrons
                aborder ensemble au besoin.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-100">
                Combien de temps prend un pré-audit ?
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Pour un site typique de PME ou d&apos;OBNL, le pré-audit
                réalisé à partir de ce formulaire permet un premier retour en
                quelques jours ouvrables, avec une vue d&apos;ensemble des
                points à corriger sur le site lui-même.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-100">
                Travaillez-vous avec mon fournisseur web ou mon équipe TI ?
              </h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Oui, le rapport est conçu pour être partagé avec votre
                développeur, votre agence ou votre équipe interne afin de
                faciliter la mise en place des correctifs techniques et des
                ajustements de contenu (bannières cookies, formulaires,
                politiques, etc.).
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