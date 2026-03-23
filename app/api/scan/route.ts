import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { getSupabase } from "@/lib/supabase";
import { runScan } from "@/lib/scanner";
import type { ZoneResult } from "@/lib/scanner";

// Vercel Pro — max 30s
export const maxDuration = 30;

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ─── Analyse Claude ───────────────────────────────────────────────────────────

type ClaudeAnalysis = {
  resume: string;          // 2-3 phrases résumant le profil de risque
  priorites: string[];     // 3 actions prioritaires (concrètes)
  contexte: string;        // Phrase adaptant le discours selon taille/secteur
};

async function analyseWithClaude(
  siteUrl: string,
  zones: ZoneResult[],
  score: number
): Promise<ClaudeAnalysis> {
  const zonesText = zones.map(z =>
    `- ${z.label} [${z.status.toUpperCase()}] : ${z.details.join(" | ")}`
  ).join("\n");

  const response = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 512,
    messages: [
      {
        role: "user",
        content: `Tu es un expert en conformité Loi 25 (Québec). Analyse ce scan de site web et génère un rapport JSON.

Site : ${siteUrl}
Score de conformité : ${score}/100

Zones analysées :
${zonesText}

Réponds UNIQUEMENT avec un objet JSON valide (pas de markdown) :
{
  "resume": "2-3 phrases résumant le profil de risque de ce site spécifiquement",
  "priorites": ["Action prioritaire 1 (concrète)", "Action prioritaire 2", "Action prioritaire 3"],
  "contexte": "Une phrase d'encouragement adaptée au score"
}`,
      },
    ],
  });

  const text = response.content[0].type === "text" ? response.content[0].text : "";

  try {
    // Extrait le JSON même si Claude ajoute du texte autour
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]) as ClaudeAnalysis;
  } catch {
    // fallback ci-dessous
  }

  return {
    resume: `Votre site ${siteUrl} a obtenu un score de conformité de ${score}/100. ${score < 50 ? "Plusieurs zones à risque ont été identifiées et nécessitent une attention immédiate." : "Des améliorations sont possibles pour renforcer votre conformité."}`,
    priorites: zones.filter(z => z.status !== "ok").slice(0, 3).map(z => z.details[0]),
    contexte: score >= 70 ? "Vous êtes sur la bonne voie — quelques ajustements ciblés suffiront." : "Ne vous découragez pas : la plupart des corrections sont rapides à mettre en place.",
  };
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, siteUrl, mainPages } = body;

    if (!name || !email || !siteUrl) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    // 1. Scan technique
    const scanResult = await runScan(siteUrl);

    // 2. Analyse Claude (si pas d'erreur de scan)
    let analyse: ClaudeAnalysis;
    if (scanResult.error || scanResult.zones.length === 0) {
      analyse = {
        resume: `Le scan automatique de ${siteUrl} a rencontré une difficulté technique. Un auditeur Loi 25 analysera votre site manuellement sous 48 h.`,
        priorites: ["Analyse manuelle en cours — résultats sous 48 h"],
        contexte: "Notre équipe prend le relais pour vous fournir un rapport complet.",
      };
    } else {
      analyse = await analyseWithClaude(siteUrl, scanResult.zones, scanResult.score);
    }

    // 3. Sauvegarde Supabase
    const rapport = {
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
    };

    const { data, error: dbError } = await getSupabase()
      .from("rapports")
      .insert(rapport)
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
