import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bannière de cookies et Loi 25 : ce que votre site web doit respecter | auditloi25.ca",
  description:
    "Votre bannière de consentement aux cookies est-elle conforme à la Loi 25 ? Découvrez les 5 exigences clés de la CAI pour les PME et OBNL québécois, et comment les vérifier.",
};

export default function BanniereCookiesLoi25Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">

        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-8 text-xs text-slate-500">
          <Link href="/" className="transition-colors hover:text-slate-300">Accueil</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <Link href="/ressources/checklist-loi-25-site-web" className="transition-colors hover:text-slate-300">Ressources Loi 25</Link>
          <span className="mx-2" aria-hidden="true">·</span>
          <span className="text-slate-400">Bannière de cookies</span>
        </nav>

        {/* En-tête */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Guide pratique · Cookies et consentement
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-50 sm:text-4xl">
            Bannière de cookies et Loi 25 : ce que votre site web doit respecter
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Depuis septembre 2023, la Loi 25 impose des exigences claires sur la façon dont
            les organisations québécoises obtiennent le consentement de leurs visiteurs avant
            de déposer des cookies. La plupart des PME et OBNL ont une bannière — mais peu
            savent si elle est vraiment conforme aux lignes directrices de la CAI.
          </p>
        </header>

        {/* Section 1 */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-50">
            Pourquoi la bannière de cookies est au cœur de la conformité Loi 25
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            La Loi 25 encadre la collecte de renseignements personnels, et les cookies
            — en particulier les cookies analytiques, publicitaires et de traçage tiers —
            permettent souvent de collecter ou de transmettre des données personnelles.
          </p>
          <p className="text-sm leading-relaxed text-slate-300">
            La Commission d'accès à l'information (CAI) a précisé ses attentes dans ses
            critères de validité du consentement : le visiteur doit pouvoir <strong className="text-slate-100">refuser les
            cookies aussi facilement qu'il peut les accepter</strong>. Ce principe a des
            conséquences directes sur la façon dont votre bannière doit être conçue.
          </p>
          <div className="rounded-xl bg-sky-500/5 p-5 ring-1 ring-sky-500/20 text-sm text-slate-300">
            <p className="font-medium text-sky-300">Ce que ça signifie concrètement :</p>
            <p className="mt-2">
              Si votre bannière affiche un gros bouton vert «&nbsp;Tout accepter&nbsp;» et un
              lien discret «&nbsp;gérer mes préférences&nbsp;» en gris pâle, elle ne respecte
              probablement pas les critères de la CAI.
            </p>
          </div>
        </section>

        {/* Section 2 — Les 5 exigences */}
        <section className="mb-10">
          <h2 className="mb-6 text-xl font-bold text-slate-50">
            Les 5 exigences clés d'une bannière conforme à la Loi 25
          </h2>
          <ol className="space-y-5">
            {[
              {
                num: "1",
                title: "Apparaître avant tout dépôt de cookie non essentiel",
                body: "Les cookies analytiques, publicitaires ou de traçage ne doivent se déclencher qu'après le consentement explicite du visiteur. La bannière doit s'afficher avant que ces scripts ne s'exécutent — pas après.",
              },
              {
                num: "2",
                title: "Offrir un choix réel et équitable",
                body: "Le bouton « Refuser » (ou son équivalent) doit être aussi visible et accessible que le bouton « Accepter ». Même taille, même contraste, même niveau d'effort pour l'utilisateur.",
              },
              {
                num: "3",
                title: "Être rédigée en français et dans un langage clair",
                body: "La bannière doit être en français pour les visiteurs québécois, et expliquer simplement quels types de cookies sont utilisés et pourquoi — sans jargon technique.",
              },
              {
                num: "4",
                title: "Inclure un lien vers la politique de confidentialité",
                body: "Le visiteur doit pouvoir accéder facilement à votre politique de confidentialité depuis la bannière pour comprendre l'usage des données collectées.",
              },
              {
                num: "5",
                title: "Permettre de modifier le consentement à tout moment",
                body: "Votre site doit offrir un moyen de changer ses préférences de cookies après la première visite — généralement via un lien permanent en bas de page ou dans la politique.",
              },
            ].map((item) => (
              <li
                key={item.num}
                className="flex gap-4 rounded-2xl bg-slate-900/70 p-5 ring-1 ring-slate-700/50"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-xs font-semibold text-sky-300 ring-1 ring-sky-500/30">
                  {item.num}
                </span>
                <div>
                  <p className="font-semibold text-slate-100">{item.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Section 3 — Erreurs fréquentes */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-50">
            Les 3 erreurs les plus fréquentes sur les sites de PME et OBNL
          </h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="rounded-xl bg-slate-900/70 p-5 ring-1 ring-slate-700/50">
              <p className="font-semibold text-slate-100">
                Erreur 1 — Les cookies se chargent avant la bannière
              </p>
              <p className="mt-2 leading-relaxed">
                C'est le problème le plus répandu. Google Analytics, Meta Pixel ou d'autres
                scripts se déclenchent dès le chargement de la page, avant même que le
                visiteur ait vu la bannière. Techniquement, le consentement n'a jamais été
                obtenu.
              </p>
            </div>
            <div className="rounded-xl bg-slate-900/70 p-5 ring-1 ring-slate-700/50">
              <p className="font-semibold text-slate-100">
                Erreur 2 — Le bouton « Refuser » est introuvable ou secondaire
              </p>
              <p className="mt-2 leading-relaxed">
                Beaucoup de bannières par défaut (WordPress, Wix, etc.) mettent en avant
                « Tout accepter » et cachent le refus derrière plusieurs clics. La CAI
                considère cette pratique comme contraire au principe d'un consentement libre.
              </p>
            </div>
            <div className="rounded-xl bg-slate-900/70 p-5 ring-1 ring-slate-700/50">
              <p className="font-semibold text-slate-100">
                Erreur 3 — La bannière est en anglais ou avec le texte par défaut de l'outil
              </p>
              <p className="mt-2 leading-relaxed">
                Le texte générique de CookieYes, Cookiebot ou OneTrust mentionne souvent
                « advertising cookies » ou d'autres catégories que votre site n'utilise
                pas. Ce décalage entre le texte de la bannière et la réalité des cookies
                est problématique.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 — Comment vérifier */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl font-bold text-slate-50">
            Comment vérifier votre bannière en 5 minutes
          </h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Voici une vérification rapide que vous pouvez faire vous-même sans compétences
            techniques :
          </p>
          <ol className="space-y-3 text-sm text-slate-300">
            {[
              "Ouvrez votre site en navigation privée (pour voir la bannière comme un nouveau visiteur).",
              "Notez si la bannière apparaît avant que la page soit entièrement chargée.",
              "Comparez visuellement le bouton « Accepter » et le bouton « Refuser » : même taille ? même visibilité ?",
              "Vérifiez que la bannière est en français et que le texte correspond aux cookies réels utilisés.",
              "Cliquez sur « Refuser » : est-ce facile à trouver ? Cela prend-il le même nombre de clics que d'accepter ?",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[11px] font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="rounded-lg bg-slate-900/60 px-4 py-3 text-xs leading-relaxed text-slate-400 ring-1 ring-slate-800">
            <span className="font-medium text-slate-300">Note :</span>{" "}
            Cette vérification visuelle ne remplace pas une analyse technique complète.
            Elle peut toutefois vous indiquer si des problèmes évidents sont présents.
          </p>
        </section>

        {/* CTA */}
        <section className="mb-10 rounded-2xl bg-gradient-to-br from-sky-500/10 via-slate-950/80 to-emerald-500/10 p-6 ring-1 ring-sky-500/30">
          <h2 className="text-lg font-semibold text-slate-50">
            Votre bannière est-elle vraiment conforme à la Loi 25 ?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Un pré-audit Loi 25 de votre site web inclut une vérification complète de votre
            bannière de consentement : comportement technique, équité visuelle des choix,
            correspondance avec les cookies réellement actifs, et lien vers votre politique.
            Gratuit, sans engagement, retour sous 48&nbsp;h.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/#formulaire"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 hover:text-white"
            >
              Demander un pré-audit gratuit
            </Link>
            <Link
              href="/ressources/checklist-loi-25-site-web"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
            >
              Voir la checklist Loi 25 complète
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Liens vers autres ressources */}
        <nav aria-label="Autres ressources" className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            À lire aussi
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/ressources/checklist-loi-25-site-web"
                className="text-sky-400 underline underline-offset-4 decoration-sky-400/30 hover:text-sky-300"
              >
                Checklist Loi 25 pour votre site web (PME, OBNL, municipal)
              </Link>
            </li>
            <li>
              <Link
                href="/ressources/sources-loi-25"
                className="text-sky-400 underline underline-offset-4 decoration-sky-400/30 hover:text-sky-300"
              >
                Sources légales et références officielles
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer disclaimer */}
        <footer className="mb-4 border-t border-slate-800/70 pt-4 text-xs text-slate-500">
          <p>
            Ce guide est fourni à titre informatif. Il ne constitue pas un avis juridique
            et doit être adapté à la réalité de votre organisation. Pour toute question de
            conformité spécifique, consultez un professionnel qualifié.
          </p>
        </footer>

        {/* Lien retour */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
        >
          <ArrowLeft size={14} aria-hidden="true" />
          Retour à l'accueil
        </Link>

      </div>
    </main>
  );
}
