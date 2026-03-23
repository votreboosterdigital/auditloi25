import * as cheerio from "cheerio";

export type ScanZone =
  | "cookies"
  | "formulaires"
  | "politique"
  | "traceurs"
  | "https"
  | "responsable";

export type ZoneResult = {
  zone: ScanZone;
  label: string;
  status: "ok" | "warning" | "critical";
  details: string[];
};

export type FullScanResult = {
  url: string;
  scannedAt: string;
  score: number; // 0-100
  zones: ZoneResult[];
  rawSignals: Record<string, boolean | string>;
  error?: string;
};

// ─── Fetch HTML ───────────────────────────────────────────────────────────────

async function fetchHtml(rawUrl: string): Promise<{ html: string; finalUrl: string }> {
  const url = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; AuditLoi25Bot/1.0; +https://auditloi25.ca)",
      "Accept-Language": "fr-CA,fr;q=0.9,en;q=0.5",
    },
    signal: AbortSignal.timeout(10000),
    redirect: "follow",
  });
  const html = await res.text();
  return { html, finalUrl: res.url || url };
}

// ─── Signal extraction ────────────────────────────────────────────────────────

function extractSignals(html: string, url: string): Record<string, boolean | string> {
  const $ = cheerio.load(html);
  const lower = html.toLowerCase();

  // Cookies
  const cookieBannerLib = /axeptio|cookiebot|tarteaucitron|onetrust|cookie-consent|cookieconsent|cookiefirst|didomi|usercentrics/i.test(html);
  const cookieBannerManual = /data-cookie|consent-banner|cookie-notice|cookie-bar|consentement|cookie.*accept|accept.*cookie/i.test(lower);
  const refuseButton = /refuser|decline|reject|tout refuser/i.test(lower);
  const cookiesBeforeConsent = !cookieBannerLib && (
    /gtag\s*\(|fbq\s*\(|_ga|analytics\.js/i.test(html)
  );

  // Traceurs
  const googleAnalytics = /gtag\s*\(|google-analytics\.com\/analytics|ua-\d{4,}|['"](g-[a-z0-9]{8,})['"]/i.test(html);
  const googleTagManager = /gtm-[a-z0-9]+|googletagmanager\.com/i.test(html);
  const metaPixel = /fbq\s*\(|connect\.facebook\.net/i.test(html);
  const linkedinInsight = /snap\.licdn\.com|linkedin\.com\/px/i.test(html);
  const hotjar = /hotjar\.com|hj\s*\(|hjid/i.test(html);
  const tiktokPixel = /analytics\.tiktok\.com|ttq\s*\(/i.test(html);

  // Politique de confidentialité
  const privacyLinkText = $("a").filter((_, el) => {
    const t = $(el).text().toLowerCase();
    return /politique.*confidentialit|vie priv|privacy|mentions.l.gales/i.test(t);
  }).length > 0;
  const privacyInHtml = /politique de confidentialit|privacy policy|vie priv|protection des donn/i.test(lower);

  // Formulaires
  const forms = $("form");
  const hasForm = forms.length > 0;
  const formMentions = forms.filter((_, el) => {
    const formHtml = $(el).html()?.toLowerCase() ?? "";
    return /email|courriel|name|nom|téléphone|phone|message/i.test(formHtml);
  }).length > 0;
  const formWithPrivacyMention = forms.filter((_, el) => {
    const surroundingHtml = ($(el).parent().html() ?? "").toLowerCase();
    return /confidentialit|vie priv|données.*utilis|comment.*utilis/i.test(surroundingHtml);
  }).length > 0;

  // Infolettre
  const newsletter = /newsletter|infolettre|s.inscrire|abonnez|s'abonner/i.test(lower);

  // Responsable
  const responsableRpcc = /responsable.*protection|rpcc|dpo|délégué.*données|data protection officer/i.test(lower);

  // HTTPS
  const isHttps = url.startsWith("https://");

  return {
    cookieBannerLib,
    cookieBannerManual,
    refuseButton,
    cookiesBeforeConsent,
    googleAnalytics,
    googleTagManager,
    metaPixel,
    linkedinInsight,
    hotjar,
    tiktokPixel,
    privacyLinkText,
    privacyInHtml,
    hasForm,
    formMentions,
    formWithPrivacyMention,
    newsletter,
    responsableRpcc,
    isHttps,
  };
}

// ─── Scoring ──────────────────────────────────────────────────────────────────

function evaluateZones(signals: Record<string, boolean | string>): ZoneResult[] {
  const zones: ZoneResult[] = [];

  // Zone 1 — Cookies
  const hasBanner = signals.cookieBannerLib || signals.cookieBannerManual;
  const cookieDetails: string[] = [];
  let cookieStatus: ZoneResult["status"] = "ok";

  if (!hasBanner) {
    cookieStatus = "critical";
    cookieDetails.push("Aucune bannière de consentement aux cookies détectée");
  } else {
    cookieDetails.push("Bannière de consentement présente");
    if (!signals.refuseButton) {
      cookieStatus = "warning";
      cookieDetails.push("Bouton 'Refuser' non détecté — requis par la CAI");
    }
  }
  if (signals.cookiesBeforeConsent) {
    cookieStatus = "critical";
    cookieDetails.push("Traceurs actifs avant le consentement (non-conforme CAI)");
  }

  zones.push({ zone: "cookies", label: "Bannière de cookies", status: cookieStatus, details: cookieDetails });

  // Zone 2 — Traceurs
  const tracers: string[] = [];
  if (signals.googleAnalytics) tracers.push("Google Analytics");
  if (signals.googleTagManager) tracers.push("Google Tag Manager");
  if (signals.metaPixel) tracers.push("Meta Pixel (Facebook)");
  if (signals.linkedinInsight) tracers.push("LinkedIn Insight Tag");
  if (signals.hotjar) tracers.push("Hotjar");
  if (signals.tiktokPixel) tracers.push("TikTok Pixel");

  let traceurStatus: ZoneResult["status"] = "ok";
  const traceurDetails: string[] = [];

  if (tracers.length === 0) {
    traceurDetails.push("Aucun traceur tiers détecté");
  } else {
    traceurDetails.push(`Traceurs détectés : ${tracers.join(", ")}`);
    if (!hasBanner) {
      traceurStatus = "critical";
      traceurDetails.push("Ces traceurs collectent des données sans consentement");
    } else {
      traceurStatus = "warning";
      traceurDetails.push("Vérifier que ces traceurs s'activent seulement après consentement");
    }
  }

  zones.push({ zone: "traceurs", label: "Traceurs et pixels", status: traceurStatus, details: traceurDetails });

  // Zone 3 — Politique de confidentialité
  const hasPrivacy = signals.privacyLinkText || signals.privacyInHtml;
  let policyStatus: ZoneResult["status"] = hasPrivacy ? "ok" : "critical";
  const policyDetails: string[] = [];

  if (!hasPrivacy) {
    policyDetails.push("Politique de confidentialité introuvable");
    policyDetails.push("Obligatoire pour tout site collectant des données au Québec");
  } else {
    policyDetails.push("Politique de confidentialité présente");
    if (!signals.privacyLinkText) {
      policyStatus = "warning";
      policyDetails.push("Lien vers la politique non visible — à rendre accessible depuis toutes les pages");
    }
  }

  zones.push({ zone: "politique", label: "Politique de confidentialité", status: policyStatus, details: policyDetails });

  // Zone 4 — Formulaires
  const formulaireDetails: string[] = [];
  let formulaireStatus: ZoneResult["status"] = "ok";

  if (!signals.hasForm) {
    formulaireDetails.push("Aucun formulaire détecté sur cette page");
  } else if (signals.formMentions) {
    formulaireDetails.push("Formulaire collectant des données personnelles détecté");
    if (!signals.formWithPrivacyMention) {
      formulaireStatus = "warning";
      formulaireDetails.push("Aucune mention visible sur l'usage des données près du formulaire");
    } else {
      formulaireDetails.push("Mention sur l'usage des données présente près du formulaire");
    }
    if (signals.newsletter) {
      formulaireDetails.push("Infolettre détectée — vérifier que le consentement est explicite et séparé");
    }
  }

  zones.push({ zone: "formulaires", label: "Formulaires et collecte", status: formulaireStatus, details: formulaireDetails });

  // Zone 5 — HTTPS
  const httpsStatus: ZoneResult["status"] = signals.isHttps ? "ok" : "critical";
  zones.push({
    zone: "https",
    label: "Sécurité HTTPS",
    status: httpsStatus,
    details: [signals.isHttps ? "Site accessible en HTTPS ✓" : "Site non sécurisé (HTTP) — requis par la Loi 25"],
  });

  // Zone 6 — Responsable
  const respStatus: ZoneResult["status"] = signals.responsableRpcc ? "ok" : "warning";
  zones.push({
    zone: "responsable",
    label: "Responsable de la protection",
    status: respStatus,
    details: [signals.responsableRpcc
      ? "Responsable de la protection des renseignements personnels identifié"
      : "Aucune mention du responsable de la protection trouvée — obligatoire (Loi 25, art. 3.1)"],
  });

  return zones;
}

function computeScore(zones: ZoneResult[]): number {
  const weights: Record<ZoneResult["status"], number> = { ok: 1, warning: 0.5, critical: 0 };
  const total = zones.reduce((sum, z) => sum + weights[z.status], 0);
  return Math.round((total / zones.length) * 100);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export async function runScan(rawUrl: string): Promise<FullScanResult> {
  const scannedAt = new Date().toISOString();
  const url = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

  try {
    const { html, finalUrl } = await fetchHtml(url);
    const rawSignals = extractSignals(html, finalUrl);
    const zones = evaluateZones(rawSignals);
    const score = computeScore(zones);

    return { url: finalUrl, scannedAt, score, zones, rawSignals };
  } catch (err) {
    const error = err instanceof Error ? err.message : "Impossible d'accéder au site";
    return {
      url,
      scannedAt,
      score: 0,
      zones: [],
      rawSignals: {},
      error,
    };
  }
}
