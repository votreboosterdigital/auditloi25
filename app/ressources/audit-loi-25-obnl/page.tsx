import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Users, CheckCircle2, AlertTriangle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Loi 25 et OBNL : ce que votre organisme doit vérifier sur son site | auditloi25.ca",
  description:
    "La Loi 25 s'applique aux OBNL québécois autant qu'aux entreprises. Voici ce que votre organisme doit vérifier sur son site web — formulaires de dons, inscriptions, infolettres.",
};

export default function AuditLoi25ObnlPage() {
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
          <Link href="/ressources/checklist-loi-25-site-web" className="transition-colors hover:text-slate-300">Ressources</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-slate-400">Loi 25 et OBNL</span>
        </nav>

        {/* En-tête */}
        <header className="mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
            <Heart size={11} aria-hidden="true" />
            Pour les organismes sans but lucratif
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Loi&nbsp;25 et OBNL : votre organisme est-il vraiment à l&apos;abri&nbsp;?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            Beaucoup de directeurs d&apos;OBNL pensent que la Loi 25, c&apos;est pour les grandes entreprises. C&apos;est une idée reçue qui peut coûter cher — en réputation, en confiance, et en énergie.
          </p>
          <p className="mt-3 text-xs text-slate-500">5 min de lecture</p>
        </header>

        {/* Section 1 — Hook storytelling */}
        <section className="mb-12" aria-labelledby="section-hook">
          <h2 id="section-hook" className="mb-4 text-xl font-bold text-slate-50">
            « On est un OBNL, pas une entreprise — ça ne nous touche pas, non ? »
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-4">
            <p>
              Imaginez une coordonnatrice d&apos;un organisme communautaire de Laval. Son site accepte les dons en ligne depuis trois ans. Elle reçoit un courriel d&apos;un donateur qui lui demande pourquoi son adresse courriel a été ajoutée à la liste d&apos;infolettre de l&apos;organisme sans qu&apos;il l&apos;ait demandé.
            </p>
            <p>
              Elle vérifie le formulaire de don : aucune case à cocher, aucune mention que l&apos;adresse sera utilisée pour les communications. C&apos;était automatique — standard dans l&apos;outil de collecte de dons utilisé. Ce n&apos;était pas malveillant. Juste pas conforme.
            </p>
            <p className="font-medium text-slate-200">
              La Loi 25 s&apos;applique à tous les organismes qui collectent des renseignements personnels au Québec — sans exception de taille, de mission ou de statut légal.
            </p>
          </div>
        </section>

        {/* Section 2 — Ce que dit la loi */}
        <section className="mb-12" aria-labelledby="section-loi">
          <h2 id="section-loi" className="mb-6 text-xl font-bold text-slate-50">
            Ce que la Loi&nbsp;25 dit sur les OBNL
          </h2>
          <div className="space-y-3">
            {[
              {
                texte: "Le mot « organisme » dans la loi inclut les associations, fondations, coopératives et organismes communautaires — pas seulement les entreprises commerciales.",
              },
              {
                texte: "C'est la collecte de renseignements personnels qui déclenche les obligations — nom, courriel, numéro de téléphone, adresse, historique de dons.",
              },
              {
                texte: "Il n'y a pas de seuil de taille. Un organisme de 3 bénévoles avec un formulaire de contact en ligne est concerné.",
              },
              {
                texte: "Vos donateurs, bénévoles et participants ont les mêmes droits que les clients d'une entreprise : savoir quelles données sont collectées, pourquoi, et par qui.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-700/40">
                <Users size={15} className="mt-0.5 shrink-0 text-sky-400" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-slate-300">{item.texte}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — 4 situations typiques */}
        <section className="mb-12" aria-labelledby="section-situations">
          <h2 id="section-situations" className="mb-6 text-xl font-bold text-slate-50">
            Les 4 situations typiques d&apos;un OBNL qui collecte des données
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <Heart size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Formulaire de don en ligne",
                texte: "Vous collectez le nom, le courriel, parfois l'adresse du donateur. Est-ce que vous expliquez clairement comment ces données sont utilisées ? Sont-elles partagées avec votre plateforme de paiement (Stripe, PayPal, Zeffy) sans que le donateur le sache ?",
                question: "À vérifier : y a-t-il une mention visible sur l'usage des données dans votre formulaire de don ?",
              },
              {
                icon: <Users size={18} className="text-sky-400" aria-hidden="true" />,
                titre: "Inscriptions à des activités ou formations",
                texte: "Ces formulaires collectent parfois des informations plus sensibles — situation familiale, condition de santé pour certains services communautaires. Ces données ont-elles une durée de conservation définie ? Sont-elles supprimées après la fin de l'activité ?",
                question: "À vérifier : savez-vous combien de temps ces données sont conservées et où elles sont stockées ?",
              },
              {
                icon: <CheckCircle2 size={18} className="text-emerald-400" aria-hidden="true" />,
                titre: "Infolettre et communications",
                texte: "Vos abonnés savent-ils explicitement qu'ils s'inscrivent à votre liste ? Est-ce que se désabonner est aussi facile que s'abonner — un seul clic, sans démarches supplémentaires ?",
                question: "À vérifier : le consentement à l'infolettre est-il distinct du consentement au formulaire principal ?",
              },
              {
                icon: <AlertTriangle size={18} className="text-amber-400" aria-hidden="true" />,
                titre: "Cookies et outils de suivi",
                texte: "Votre site utilise probablement Google Analytics, un pixel de partage social, ou un outil de formulaire tiers. Ces outils collectent des données sur vos visiteurs. Sont-ils déclarés dans une bannière de consentement conforme — avec la possibilité de refuser ?",
                question: "À vérifier : votre bannière de cookies permet-elle de refuser aussi facilement qu'accepter ?",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50">
                <div className="flex items-center gap-2 mb-3">
                  {item.icon}
                  <h3 className="font-semibold text-slate-100">{item.titre}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">{item.texte}</p>
                <p className="mt-3 rounded-lg bg-slate-800/60 px-3 py-2 text-xs text-slate-400 ring-1 ring-slate-700/30">
                  {item.question}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — Checklist */}
        <section className="mb-12" aria-labelledby="section-checklist">
          <h2 id="section-checklist" className="mb-6 text-xl font-bold text-slate-50">
            Ce que vous devez vérifier en priorité sur votre site
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 space-y-3">
            {[
              "Votre bannière de cookies permet de refuser aussi facilement qu'accepter",
              "Vos formulaires expliquent pourquoi vous collectez les données et comment elles sont utilisées",
              "Vous avez une politique de confidentialité à jour, accessible depuis toutes les pages",
              "Vos donateurs savent que leur courriel sera ajouté à votre liste d'envoi — si c'est le cas",
              "Votre site indique comment contacter le responsable de la protection des renseignements personnels",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-4 shrink-0 rounded border border-slate-600 bg-slate-800" aria-hidden="true" />
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Pour aller plus loin :{" "}
            <Link href="/ressources/checklist-loi-25-site-web" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
              Checklist Loi 25 complète pour votre site
            </Link>
          </p>
        </section>

        {/* Section 5 — Service adapté aux OBNL */}
        <section className="mb-12" aria-labelledby="section-service">
          <h2 id="section-service" className="mb-4 text-xl font-bold text-slate-50">
            Un service pensé pour les organismes sans équipe TI
          </h2>
          <div className="rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50 text-sm leading-relaxed text-slate-300 space-y-3">
            <p>
              Le pré-audit gratuit d&apos;auditloi25.ca a été conçu pour les organisations qui n&apos;ont ni juriste ni équipe technique interne — et les OBNL québécois en font partie.
            </p>
            <p>
              À partir du formulaire, on analyse les pages les plus critiques de votre site — formulaire de don, inscription, contact — et on vous remet un rapport clair sur les zones à risque. Pas de jargon. Pas de rapport de 40 pages. Juste ce que vous devez corriger, dans l&apos;ordre.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="mb-12 rounded-2xl bg-slate-900 p-8 ring-1 ring-slate-700 text-center">
          <p className="text-lg font-bold text-slate-50">
            Votre organisme collecte des données. Vous méritez de savoir si c&apos;est fait dans les règles.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Pré-audit gratuit · Résultats sous 48 h · Aucun engagement, aucune carte requise
          </p>
          <Link
            href="/#formulaire"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white"
          >
            Obtenir mon pré‑audit gratuit
          </Link>
          <div className="mt-3">
            <Link href="/offre" className="text-xs text-sky-400 hover:text-sky-300 transition-colors">
              Voir l&apos;offre d&apos;audit Loi 25 pour OBNL →
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500">
          <Link href="/" className="inline-flex items-center gap-2 text-sky-300 hover:text-sky-200 transition-colors font-medium">
            <ArrowLeft size={13} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <Link href="/ressources/checklist-loi-25-site-web" className="text-slate-400 hover:text-slate-200 transition-colors">
            Checklist Loi 25 pour votre site →
          </Link>
        </div>

      </div>
    </main>
  );
}
