"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { fireSubmitConversion } from "@/lib/gtag";
import { motion, useReducedMotion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  siteUrl: string;
  mainPages: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
  const [isScanning, setIsScanning] = useState(false);
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const animProps = prefersReducedMotion
    ? {}
    : { variants: fadeUp, initial: "hidden" as const, whileInView: "visible" as const, viewport: { once: true, margin: "-80px" } };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    try {
      // 1. Scan automatique → rapport immédiat
      const scanRes = await fetch("/api/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (scanRes.ok) {
        const { id } = await scanRes.json();
        // Plausible
        if (typeof window !== "undefined" && typeof (window as Window & { plausible?: (e: string) => void }).plausible === "function") {
          (window as Window & { plausible?: (e: string) => void }).plausible!("form_submitted");
        }
        // Google Ads conversion
        fireSubmitConversion();
        // Envoyer aussi au lead handler (email de confirmation) sans attendre
        fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }).catch(() => null);
        router.push(`/rapport/${id}`);
        return;
      }
    } catch {
      // Si /api/scan échoue, fallback vers /api/lead classique
    }

    // 2. Fallback — lead classique + /merci
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
      if (typeof window !== "undefined" && typeof (window as Window & { plausible?: (e: string) => void }).plausible === "function") {
        (window as Window & { plausible?: (e: string) => void }).plausible!("form_submitted");
      }
      fireSubmitConversion();
      router.push("/merci");
    } catch (error) {
      console.error("Erreur réseau lead:", error);
      alert("Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <section
      id="processus"
      aria-labelledby="process-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div {...animProps}>
          <h2
            id="process-heading"
            className="text-3xl font-black tracking-tight text-white sm:text-4xl"
          >
            Votre pré-audit Loi&nbsp;25 gratuit en 3 étapes — sans équipe TI ni avocat requis
          </h2>
          <p className="mt-3 text-slate-400">
            Conçu pour les PME et OBNL québécois qui veulent un premier audit
            Loi&nbsp;25 de leur site sans se perdre dans des démarches
            complexes. Vous nous donnez les informations, on fait le reste.
          </p>
        </motion.div>

        {/* 3 process steps */}
        <motion.ol
          className="mt-12 grid gap-6 sm:grid-cols-3"
          variants={container}
          initial={prefersReducedMotion ? undefined : "hidden"}
          whileInView={prefersReducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.li key={step.title} variants={fadeUp}>
              <div className="rounded-xl border border-white/8 bg-[#0d1526] p-6 ring-1 ring-white/5 hover:ring-sky-500/20 transition-all">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sm font-bold text-sky-400">
                  {index + 1}
                </div>
                <h3 className="font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        {/* Lead form */}
        <div
          id="formulaire"
          className="mt-16 rounded-2xl border border-white/8 bg-[#0d1526] p-8 ring-1 ring-white/5"
        >
          <h2 className="text-2xl font-bold text-white">
            Recevoir mon pré-audit gratuit
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            En 2 minutes, vous nous donnez les informations essentielles. Nous
            revenons vers vous sous 48 h avec un premier bilan de votre site —
            zones à risque, points prioritaires, estimation pour l&apos;audit complet.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
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
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition-colors"
                placeholder="Ex. Marie Tremblay"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
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
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition-colors"
                placeholder="Ex. vous@organisation.ca"
              />
            </div>

            <div>
              <label htmlFor="siteUrl" className="block text-sm font-medium text-slate-300 mb-1">
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
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition-colors"
                placeholder="https://www.votresite.ca"
              />
            </div>

            <div>
              <label htmlFor="mainPages" className="block text-sm font-medium text-slate-300 mb-1">
                Pages principales à analyser
              </label>
              <textarea
                id="mainPages"
                name="mainPages"
                rows={3}
                value={form.mainPages}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition-colors"
                placeholder="Ex. Accueil, Services, Formulaire de contact, Donation, Boutique..."
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Ajoutez les pages avec formulaires, paiement, inscriptions,
                infolettre, dons, etc.
              </p>
            </div>

            <p className="flex items-center gap-1.5 text-xs text-slate-500">
              <span aria-hidden="true">⚡</span>
              Rapport généré instantanément · Sans engagement · Gratuit
            </p>

            <p className="rounded-lg bg-slate-800/50 px-3 py-2.5 text-[11px] leading-relaxed text-slate-400 ring-1 ring-slate-700/50">
              Vos renseignements (nom, courriel, URL du site) sont collectés
              uniquement pour réaliser votre pré-audit Loi&nbsp;25 et vous
              transmettre le résultat par courriel. Aucune utilisation
              commerciale.{" "}
              <Link
                href="/politique-de-confidentialite"
                className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
              >
                Politique de confidentialité
              </Link>
            </p>

            <button
              type="submit"
              disabled={isScanning}
              className="relative w-full overflow-hidden rounded-lg bg-emerald-500 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isScanning ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Analyse en cours… (~15 secondes)
                </span>
              ) : (
                "Obtenir mon rapport gratuit maintenant"
              )}
            </button>

            <p className="text-xs text-slate-500">
              Votre rapport de conformité Loi 25 est généré automatiquement en quelques secondes.
              Aucun engagement — vous décidez si vous souhaitez aller plus loin.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
