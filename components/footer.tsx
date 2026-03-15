import Link from "next/link";
import { ShieldIcon } from "@/components/shield-icon";

export function Footer() {
  return (
    <footer className="mt-16">
      {/* ── Micro À propos — signature discrète ── */}
      {/* AFTER: ajouté AVANT le séparateur, BEFORE: séparateur seul */}
      <div className="px-4 pb-8 text-center">
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-400">
          auditloi25.ca est opéré par un spécialiste en conformité numérique
          basé à Montréal, avec une expertise centrée sur les PME, OBNL et
          organismes locaux québécois qui doivent se conformer à la
          Loi&nbsp;25 sans équipe juridique ou TI dédiée.{" "}
          <span className="text-slate-500">
            Service privé et indépendant — non affilié au gouvernement du
            Québec ni à la CAI.
          </span>
        </p>
      </div>

      {/* Séparateur */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/70 to-transparent" />

      {/* Nav + copyright */}
      <div className="mt-4 flex flex-col gap-4 border-t border-slate-800/70 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldIcon
              size={14}
              className="shrink-0 text-sky-400"
              aria-hidden="true"
            />
            <p className="font-semibold text-slate-200">auditloi25.ca</p>
          </div>
          <p>Service privé indépendant, basé à Montréal, Québec.</p>
          <p>
            © {new Date().getFullYear()} auditloi25.ca – Tous droits réservés.
          </p>
        </div>
        <nav aria-label="Liens du pied de page" className="flex flex-wrap gap-4 text-[11px] sm:text-xs">
          <Link href="/" className="text-slate-400 hover:text-slate-200 transition-colors">
            Accueil
          </Link>
          <Link href="/offre" className="text-slate-400 hover:text-slate-200 transition-colors">
            Offre
          </Link>
          <Link
            href="/ressources/checklist-loi-25-site-web"
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            Checklist Loi 25
          </Link>
          <Link
            href="/ressources/banniere-cookies-loi-25"
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            Bannière de cookies
          </Link>
          <Link
            href="/ressources/penalites-loi-25-entreprise"
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            Amendes Loi 25
          </Link>
          <Link
            href="/politique-de-confidentialite"
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            Politique de confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  );
}
