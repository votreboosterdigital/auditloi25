"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type FormState = {
  name: string;
  email: string;
  siteUrl: string;
  mainPages: string;
};

const steps = [
  {
    title: "Remplissez le formulaire — 2 minutes.",
    description:
      "Indiquez votre site, vos pages clés et le type d'organisation. Pas de jargon, pas de préparation requise.",
  },
  {
    title: "Vous recevez votre pré-audit gratuit.",
    description:
      "Nous réalisons le pré-audit Loi 25 de votre site — cookies, formulaires et pages principales — et vous envoyons un bilan clair des zones à risque sous 48 heures ouvrables.",
  },
  {
    title: "Audit complet sur mesure (si vous le souhaitez).",
    description:
      "Sur la base du pré-audit, nous vous proposons un devis précis. Rapport détaillé, plan d'action priorisé, accompagnement avec votre équipe ou vos fournisseurs — vous choisissez l'étendue.",
  },
];

export function HowItWorks() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    siteUrl: "",
    mainPages: "",
  });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        console.error("Erreur envoi lead:", data);
        alert("Une erreur est survenue lors de l'envoi du formulaire. Merci de réessayer.");
        return;
      }
      router.push("/merci");
    } catch (error) {
      console.error("Erreur réseau lead:", error);
      alert("Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.");
    }
  };

  return (
    <section
      id="processus"
      aria-labelledby="process-heading"
      className="mt-16 grid gap-10 md:grid-cols-[minmax(0,3fr),minmax(0,2.4fr)]"
    >
      {/* Colonne gauche — étapes */}
      <div className="space-y-6">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Comment ça marche
          </p>
          <h2
            id="process-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-slate-50"
          >
            Votre pré-audit Loi&nbsp;25 gratuit en 3 étapes — sans équipe TI ni avocat requis
          </h2>
          <p className="mt-2 max-w-xl text-base text-slate-300">
            Conçu pour les PME et OBNL québécois qui veulent un premier audit
            Loi&nbsp;25 de leur site sans se perdre dans des démarches
            complexes. Vous nous donnez les informations, on fait le reste.
          </p>
        </header>

        <ol className="space-y-4 text-sm text-slate-200">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-3">
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/40">
                {index + 1}
              </span>
              <div>
                <p className="font-medium">{step.title}</p>
                <p className="mt-0.5 text-slate-400">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="text-xs text-slate-500">
          Cet audit ne remplace pas un avis juridique, mais il vous aide à
          vérifier des obligations clés mises de l&apos;avant par la CAI pour
          les sites web : transparence sur les témoins, consentement éclairé et
          possibilité de refuser aussi facilement que d&apos;accepter, ainsi
          qu&apos;une information plus claire sur l&apos;usage des
          renseignements personnels.
        </p>
      </div>

      {/* Colonne droite — Formulaire (ancre #formulaire préservée) */}
      <div
        id="formulaire"
        className="rounded-2xl bg-slate-900/70 p-6 shadow-lg ring-1 ring-slate-800"
      >
        <h2 className="text-lg font-semibold text-slate-50">
          Recevoir mon pré-audit gratuit
        </h2>
        <p className="mt-1 text-xs text-slate-400">
          En 2 minutes, vous nous donnez les informations essentielles. Nous
          revenons vers vous sous 48 h avec un premier bilan de votre site —
          zones à risque, points prioritaires, estimation pour l&apos;audit complet.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div className="space-y-1">
            <label htmlFor="name" className="text-xs font-medium text-slate-200">
              Nom complet
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              placeholder="Ex. Marie Tremblay"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-xs font-medium text-slate-200">
              Courriel professionnel
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              placeholder="Ex. vous@organisation.ca"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="siteUrl" className="text-xs font-medium text-slate-200">
              URL du site à auditer
            </label>
            <input
              id="siteUrl"
              name="siteUrl"
              type="url"
              required
              value={form.siteUrl}
              onChange={handleChange}
              autoComplete="url"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              placeholder="https://www.votresite.ca"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="mainPages" className="text-xs font-medium text-slate-200">
              Pages principales à analyser
            </label>
            <textarea
              id="mainPages"
              name="mainPages"
              rows={3}
              value={form.mainPages}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none placeholder:text-slate-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              placeholder="Ex. Accueil, Services, Formulaire de contact, Donation, Boutique..."
            />
            <p className="text-[11px] text-slate-500">
              Ajoutez les pages avec formulaires, paiement, inscriptions,
              infolettre, dons, etc.
            </p>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            <span aria-hidden="true">⏱</span>
            2 minutes pour remplir · Retour sous 48h · Sans engagement
          </p>

          <button
            type="submit"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_16px_rgba(16,185,129,0.2)] transition-colors duration-200 hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Envoyer ma demande — c&apos;est gratuit
          </button>

          <p className="text-[11px] text-slate-500">
            Aucun engagement. Vous recevez votre pré-audit gratuitement, puis
            vous décidez si vous souhaitez aller plus loin.
          </p>
        </form>
      </div>
    </section>
  );
}
