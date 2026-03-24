import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { getSupabase } from "@/lib/supabase";
import { ScoreGauge } from "@/components/rapport/score-gauge";
import { ZoneCard } from "@/components/rapport/zone-card";
import type { ZoneResult } from "@/lib/scanner";

export const metadata: Metadata = {
  title: "Votre rapport de conformité Loi 25 | auditloi25.ca",
  robots: { index: false, follow: false },
};

type RapportRow = {
  id: string;
  name: string;
  site_url: string;
  scanned_at: string;
  score: number;
  zones: ZoneResult[];
  analyse: {
    resume: string;
    priorites: string[];
    contexte: string;
  };
  scan_error: string | null;
};

async function getRapport(id: string): Promise<RapportRow | null> {
  const { data, error } = await getSupabase()
    .from("rapports")
    .select("id, name, site_url, scanned_at, score, zones, analyse, scan_error")
    .eq("id", id)
    .single();

  if (error || !data) return null;
  return data as RapportRow;
}

export default async function RapportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rapport = await getRapport(id);

  if (!rapport) notFound();

  const critiques = rapport.zones.filter((z) => z.status === "critical").length;
  const warnings = rapport.zones.filter((z) => z.status === "warning").length;

  // Trier : critical en premier, puis warning, puis ok
  const sortedZones = [...rapport.zones].sort((a, b) => {
    const order = { critical: 0, warning: 1, ok: 2 };
    return order[a.status] - order[b.status];
  });

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">

        {/* Header */}
        <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-100">
          <ShieldCheck size={18} className="text-sky-400" aria-hidden="true" />
          auditloi25.ca
        </div>

        {/* Titre + URL */}
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
            Rapport de conformité Loi 25
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-50 sm:text-3xl">
            {rapport.site_url.replace(/^https?:\/\//, "")}
          </h1>
          <p className="mt-1 text-xs text-slate-500">
            Scanné le{" "}
            {new Date(rapport.scanned_at).toLocaleDateString("fr-CA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        {/* Score + résumé */}
        <div className="mb-10 rounded-2xl bg-slate-900/70 p-6 ring-1 ring-slate-700/50">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <ScoreGauge score={rapport.score} />
            <div className="flex-1 text-center sm:text-left">
              <p className="text-sm leading-relaxed text-slate-300">
                {rapport.analyse.resume}
              </p>
              <p className="mt-3 text-xs italic text-slate-500">
                {rapport.analyse.contexte}
              </p>
              {(critiques > 0 || warnings > 0) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {critiques > 0 && (
                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400 ring-1 ring-red-500/20">
                      {critiques} zone{critiques > 1 ? "s" : ""} critique{critiques > 1 ? "s" : ""}
                    </span>
                  )}
                  {warnings > 0 && (
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-500/20">
                      {warnings} avertissement{warnings > 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Priorités */}
        {rapport.analyse.priorites.length > 0 && rapport.analyse.priorites[0] && (
          <section className="mb-10" aria-labelledby="priorites-heading">
            <h2 id="priorites-heading" className="mb-4 text-lg font-bold text-slate-50">
              Actions prioritaires
            </h2>
            <ol className="space-y-3">
              {rapport.analyse.priorites.map((p, i) => (
                <li key={i} className="flex gap-3 rounded-xl bg-slate-900/60 p-4 ring-1 ring-slate-700/40">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-xs font-bold text-sky-300">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-300">{p}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Zones détaillées */}
        {sortedZones.length > 0 && (
          <section className="mb-10" aria-labelledby="zones-heading">
            <h2 id="zones-heading" className="mb-4 text-lg font-bold text-slate-50">
              Détail par zone
            </h2>
            <div className="space-y-3">
              {sortedZones.map((zone) => (
                <ZoneCard key={zone.zone} zone={zone} />
              ))}
            </div>
          </section>
        )}

        {/* CTA principal */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 via-slate-900 to-emerald-500/10 p-8 ring-1 ring-sky-500/20 text-center">
          <h2 className="text-xl font-bold text-slate-50">
            {rapport.score < 50
              ? "Votre site présente des risques concrets — agissons maintenant."
              : "Renforcez votre conformité avec un audit complet."}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Ce rapport automatique est un premier aperçu. L&apos;audit complet à 450 $ vous donne un
            plan de correction priorisé, zone par zone, avec accompagnement.
          </p>
          <Link
            href="/offre"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white"
          >
            Voir l&apos;audit complet à 450 $
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <p className="mt-3 text-xs text-slate-500">
            Sans engagement · Rapport instantané · Audit complet PDF disponible
          </p>
        </div>

        {/* Footer nav */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <Link href="/" className="text-sky-400 hover:text-sky-300 transition-colors">
            ← Retour à l&apos;accueil
          </Link>
          <Link href="/ressources/checklist-loi-25-site-web" className="hover:text-slate-300 transition-colors">
            Checklist Loi 25 →
          </Link>
        </div>

      </div>
    </main>
  );
}
