import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { runScan } from "@/lib/scanner";
import type { ZoneResult } from "@/lib/scanner";

// Hobby plan — max 10s (maxDuration ignoré sur Hobby, on optimise pour tenir dedans)

type Analyse = {
  resume: string;
  priorites: string[];
  contexte: string;
};

// ─── Analyse déterministe (sans Claude — instantané) ─────────────────────────

function buildAnalyse(siteUrl: string, zones: ZoneResult[], score: number): Analyse {
  const critiques = zones.filter(z => z.status === "critical");
  const warnings = zones.filter(z => z.status === "warning");
  const domain = siteUrl.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];

  // Résumé adapté au score
  let resume: string;
  if (score >= 80) {
    resume = `${domain} affiche un excellent niveau de conformité Loi 25 avec un score de ${score}/100. Les bases sont solides : HTTPS, politique de confidentialité et gestion des cookies sont en place. Quelques ajustements mineurs permettront d'atteindre une conformité optimale.`;
  } else if (score >= 60) {
    const pointsForts = zones.filter(z => z.status === "ok").map(z => z.label.toLowerCase()).slice(0, 2).join(" et ");
    resume = `${domain} obtient ${score}/100 — une base correcte (${pointsForts}) mais ${critiques.length > 0 ? `${critiques.length} zone${critiques.length > 1 ? "s" : ""} critique${critiques.length > 1 ? "s" : ""}` : "des avertissements"} à corriger pour être pleinement conforme à la Loi 25.`;
  } else if (score >= 40) {
    resume = `Avec ${score}/100, ${domain} présente plusieurs lacunes importantes au regard de la Loi 25. ${critiques.length} zone${critiques.length > 1 ? "s" : ""} critique${critiques.length > 1 ? "s" : ""} ont été identifiées — des corrections sont nécessaires avant une éventuelle inspection de la CAI.`;
  } else {
    resume = `${domain} présente un profil de risque élevé avec un score de ${score}/100. ${critiques.length} zone${critiques.length > 1 ? "s non conformes" : " non conforme"} ont été détectées — une action rapide est recommandée pour éviter les sanctions prévues par la Loi 25.`;
  }

  // Priorités issues des zones non conformes (critiques en premier)
  const priorites: string[] = [];
  for (const z of [...critiques, ...warnings].slice(0, 3)) {
    // Prendre le premier détail actionnable (pas les confirmations)
    const action = z.details.find(d => !d.includes("✓")) ?? z.details[0];
    if (action) priorites.push(action);
  }
  if (priorites.length === 0) {
    priorites.push("Documenter les mesures de conformité en place pour préparer un éventuel audit CAI");
  }

  // Contexte d'encouragement
  let contexte: string;
  if (score >= 80) {
    contexte = "Votre site est bien positionné — un audit complet permettra de valider et documenter chaque point pour une conformité sans faille.";
  } else if (score >= 60) {
    contexte = "La plupart des corrections identifiées sont rapides à mettre en place — un audit complet vous donnera un plan d'action priorisé et chiffré.";
  } else {
    contexte = "Ne vous découragez pas : la majorité des non-conformités sur les sites PME et OBNL se corrigent sans refondre le site. Un audit complet clarifiera les priorités.";
  }

  return { resume, priorites, contexte };
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, siteUrl, mainPages } = body;

    if (!name || !email || !siteUrl) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    // 1. Scan technique (fetch + cheerio, ~3-5s)
    const scanResult = await runScan(siteUrl);

    // 2. Analyse déterministe instantanée (remplace Claude)
    const analyse: Analyse = scanResult.error || scanResult.zones.length === 0
      ? {
          resume: `Le scan de ${siteUrl.replace(/^https?:\/\/(www\.)?/, "").split("/")[0]} a rencontré une difficulté d'accès. Notre équipe prend le relais pour analyser votre site.`,
          priorites: ["Vérification manuelle en cours — notre équipe vous contacte rapidement"],
          contexte: "Notre équipe prend le relais pour analyser votre site en détail.",
        }
      : buildAnalyse(scanResult.url, scanResult.zones, scanResult.score);

    // 3. Sauvegarde Supabase (~0.5s)
    const { data, error: dbError } = await getSupabase()
      .from("rapports")
      .insert({
        name,
        email,
        site_url: scanResult.url,
        scanned_at: scanResult.scannedAt,
        score: scanResult.score,
        zones: scanResult.zones,
        raw_signals: scanResult.rawSignals,
        analyse,
        main_pages: mainPages ?? null,
        scan_error: scanResult.error ?? null,
      })
      .select("id")
      .single();

    if (dbError) {
      console.error("Erreur Supabase insert:", dbError);
      return NextResponse.json({ error: "Erreur sauvegarde rapport." }, { status: 500 });
    }

    return NextResponse.json({ id: data.id, score: scanResult.score }, { status: 200 });
  } catch (error) {
    console.error("Erreur /api/scan:", error);
    return NextResponse.json({ error: "Erreur interne du serveur." }, { status: 500 });
  }
}
