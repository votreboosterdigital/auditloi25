import Link from "next/link";
import { ShieldIcon } from "@/components/shield-icon";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      {/* Micro À propos */}
      <div className="px-4 pb-8 pt-10 text-center">
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

      {/* Separator */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Nav + copyright */}
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo + copyright block */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldIcon
                size={14}
                className="shrink-0 text-sky-400"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold text-slate-200">auditloi25.ca</span>
            </div>
            <p className="text-xs text-slate-500">Service privé indépendant, basé à Montréal, Québec.</p>
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} auditloi25.ca – Tous droits réservés.
            </p>
            <p className="text-xs text-slate-500">
              Responsable de la protection des renseignements personnels&nbsp;:{" "}
              <a href="mailto:votreboosterdigital@outlook.com" className="hover:text-slate-300 transition-colors">
                Belkacem Mehdi
              </a>
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Liens du pied de page" className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/" className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors sm:text-xs">
              Accueil
            </Link>
            <Link href="/offre" className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors sm:text-xs">
              Offre
            </Link>
            <Link href="/ressources" className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors sm:text-xs">
              Ressources
            </Link>
            <Link
              href="/ressources/checklist-loi-25-site-web"
              className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors sm:text-xs"
            >
              Checklist Loi 25
            </Link>
            <Link
              href="/ressources/banniere-cookies-loi-25"
              className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors sm:text-xs"
            >
              Bannière de cookies
            </Link>
            <Link
              href="/ressources/penalites-loi-25-entreprise"
              className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors sm:text-xs"
            >
              Amendes Loi 25
            </Link>
            <Link
              href="/a-propos"
              className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors sm:text-xs"
            >
              À propos
            </Link>
            <Link
              href="/politique-de-confidentialite"
              className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors sm:text-xs"
            >
              Politique de confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
