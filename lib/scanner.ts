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
  rawSignals: Record<string, boolean | string | number>;
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

function extractSignals(html: string, url: string): Record<string, boolean | string | number> {
  const $ = cheerio.load(html);
  const lower = html.toLowerCase();

  // ── Bannière cookies (librairies connues) ──
  const cookieBannerLib = /axeptio|cookiebot|tarteaucitron|onetrust|cookiefirst|didomi|usercentrics|cookie-law-info|complianz|iubenda|termly/i.test(html);

  // ── Bannière cookies (détection manuelle par attributs DOM) ──
  const cookieBannerDom = (() => {
    let found = false;
    $("[id],[class],[aria-label],[role]").each((_, el) => {
      const id = ($(el).attr("id") ?? "").toLowerCase();
      const cls = ($(el).attr("class") ?? "").toLowerCase();
      const aria = ($(el).attr("aria-label") ?? "").toLowerCase();
      const role = ($(el).attr("role") ?? "").toLowerCase();
      if (/cookie|consent|gdpr|rgpd|consentement/.test(id + cls + aria + role)) {
        found = true;
        return false; // break
      }
    });
    return found;
  })();

  const hasBanner = cookieBannerLib || cookieBannerDom;

  // ── Bouton Refuser ──
  const refuseButton = /refuser|tout refuser|decline|reject all|deny|je refuse/i.test(lower);

  // ── Traceurs tiers ──
  const googleAnalytics = /gtag\s*\(|google-analytics\.com\/analytics|['"](g-[a-z0-9]{6,})['"]/i.test(html);
  const googleTagManager = /gtm-[a-z0-9]+|googletagmanager\.com/i.test(html);
  const metaPixel = /fbq\s*\(|connect\.facebook\.net/i.test(html);
  const linkedinInsight = /snap\.licdn\.com|linkedin\.com\/px/i.test(html);
  const hotjar = /hotjar\.com|hjid\s*[:=]/i.test(html);
  const tiktokPixel = /analytics\.tiktok\.com|ttq\s*\./i.test(html);
  const intercom = /intercom\.io|window\.intercomSettings/i.test(html);
  const hubspot = /js\.hs-scripts\.com|_hsq\s*\./i.test(html);
  const hasTrackers = googleAnalytics || googleTagManager || metaPixel || linkedinInsight || hotjar || tiktokPixel || intercom || hubspot;

  // ── Politique de confidentialité ──
  const privacyLinkText = $("a").filter((_, el) => {
    const t = $(el).text().toLowerCase();
    return /politique.*confidentialit|vie priv|privacy|mentions.l.gales|données personnelles|rgpd/i.test(t);
  }).length > 0;

  const privacyInHtml = /politique de confidentialit|privacy policy|protection des donn|vie priv|rgpd|gdpr/i.test(lower);
  const hasPrivacy = privacyLinkText || privacyInHtml;

  // ── Formulaires ──
  // Ignore les formulaires de recherche (search)
  const personalForms = $("form").filter((_, el) => {
    const formHtml = ($(el).html() ?? "").toLowerCase();
    const role = ($(el).attr("role") ?? "").toLowerCase();
    const action = ($(el).attr("action") ?? "").toLowerCase();
    if (role === "search" || action.includes("search")) return false;
    // Doit avoir au moins un champ de données personnelles
    return /type=.email|type=.tel|name=.email|name=.nom|name=.name|name=.phone|name=.prenom|placeholder=.email|placeholder=.nom|placeholder=.courriel/i.test(formHtml)
      || $("input[type=email], input[type=tel], input[name*=email], input[name*=nom], input[name*=name]", el).length > 0;
  });

  const hasPersonalForm = personalForms.length > 0;

  const formWithPrivacyMention = personalForms.filter((_, el) => {
    // Cherche mention vie privée dans le formulaire ou son parent immédiat
    const formHtml = ($(el).html() ?? "").toLowerCase();
    const parentHtml = ($(el).parent().html() ?? "").toLowerCase();
    return /confidentialit|vie priv|données.*utilis|comment.*utilis|rgpd|gdpr/.test(formHtml + parentHtml);
  }).length > 0;

  const newsletter = /newsletter|infolettre|s['']inscrire|abonnez|s['']abonner|subscribe/i.test(lower);
  const newsletterSeparateConsent = $("input[type=checkbox]").filter((_, el) => {
    const label = ($(el).attr("name") ?? "") + ($(el).attr("id") ?? "") + ($(el).closest("label").text() ?? "");
    return /newsletter|infolettre|communications|marketing|abonnement/i.test(label.toLowerCase());
  }).length > 0;

  // ── Responsable protection données ──
  const responsableRpcc = /responsable.*protection|rpcc|d\.?p\.?o\.?|délégué.*données|data protection officer|privacy officer|agent.*protection/i.test(lower);
  // Aussi chercher une adresse de contact dédiée
  const privacyContact = /privacy@|dpo@|rgpd@|confidentialite@|protection@/i.test(html);

  // ── HTTPS ──
  const isHttps = url.startsWith("https://");

  // ── Nombre de formulaires personnels ──
  const personalFormCount = personalForms.length;

  return {
    hasBanner,
    cookieBannerLib,
    cookieBannerDom,
    refuseButton,
    hasTrackers,
    googleAnalytics,
    googleTagManager,
    metaPixel,
    linkedinInsight,
    hotjar,
    tiktokPixel,
    intercom,
    hubspot,
    hasPrivacy,
    privacyLinkText,
    privacyInHtml,
    hasPersonalForm,
    formWithPrivacyMention,
    newsletter,
    newsletterSeparateConsent,
    responsableRpcc,
    privacyContact,
    isHttps,
    personalFormCount,
  };
}

// ─── Évaluation des zones ─────────────────────────────────────────────────────

function evaluateZones(signals: Record<string, boolean | string | number>): ZoneResult[] {
  const zones: ZoneResult[] = [];

  // ── Zone 1 : Cookies ──────────────────────────────────────────────────────
  // Règle clé : si aucun traceur → pas de bannière requise
  {
    const details: string[] = [];
    let status: ZoneResult["status"] = "ok";

    if (!signals.hasTrackers) {
      // Pas de traceurs → bannière non requise
      if (signals.hasBanner) {
        details.push("Bannière de consentement présente");
        details.push("Aucun traceur tiers détecté — bannière en place, excellent");
      } else {
        details.push("Aucun traceur tiers détecté — bannière de cookies non requise");
        details.push("Si vous ajoutez un outil d'analyse à l'avenir, une bannière sera nécessaire");
      }
    } else {
      // Des traceurs existent → bannière obligatoire
      if (!signals.hasBanner) {
        status = "critical";
        details.push("Aucune bannière de consentement détectée");
        details.push("Des traceurs actifs collectent des données sans consentement — infraction directe");
      } else {
        details.push("Bannière de consentement présente");
        if (!signals.refuseButton) {
          status = "warning";
          details.push("Bouton 'Refuser' non détecté — refuser doit être aussi simple qu'accepter (exigence CAI/RGPD)");
        } else {
          details.push("Option de refus disponible ✓");
        }
      }
    }

    zones.push({ zone: "cookies", label: "Bannière de cookies", status, details });
  }

  // ── Zone 2 : Traceurs ─────────────────────────────────────────────────────
  {
    const tracers: string[] = [];
    if (signals.googleAnalytics) tracers.push("Google Analytics");
    if (signals.googleTagManager) tracers.push("Google Tag Manager");
    if (signals.metaPixel) tracers.push("Meta Pixel (Facebook)");
    if (signals.linkedinInsight) tracers.push("LinkedIn Insight Tag");
    if (signals.hotjar) tracers.push("Hotjar");
    if (signals.tiktokPixel) tracers.push("TikTok Pixel");
    if (signals.intercom) tracers.push("Intercom");
    if (signals.hubspot) tracers.push("HubSpot");

    const details: string[] = [];
    let status: ZoneResult["status"] = "ok";

    if (tracers.length === 0) {
      details.push("Aucun traceur tiers détecté ✓");
      details.push("Votre site ne charge pas d'outils de suivi externes");
    } else {
      details.push(`Traceurs détectés : ${tracers.join(", ")}`);
      if (!signals.hasBanner) {
        status = "critical";
        details.push("Ces traceurs collectent des données sans consentement de l'utilisateur");
      } else {
        status = "warning";
        details.push("Vérifier que ces traceurs ne s'activent qu'après le consentement explicite");
      }
    }

    zones.push({ zone: "traceurs", label: "Traceurs et pixels", status, details });
  }

  // ── Zone 3 : Politique de confidentialité ─────────────────────────────────
  {
    const details: string[] = [];
    let status: ZoneResult["status"] = "ok";

    if (!signals.hasPrivacy) {
      status = "critical";
      details.push("Politique de confidentialité introuvable");
      details.push("Obligatoire pour tout site collectant des données personnelles");
    } else {
      details.push("Politique de confidentialité présente ✓");
      if (!signals.privacyLinkText) {
        status = "warning";
        details.push("Lien non détecté dans la navigation — à rendre accessible depuis toutes les pages");
      } else {
        details.push("Lien visible dans la navigation ✓");
      }
    }

    zones.push({ zone: "politique", label: "Politique de confidentialité", status, details });
  }

  // ── Zone 4 : Formulaires ──────────────────────────────────────────────────
  {
    const details: string[] = [];
    let status: ZoneResult["status"] = "ok";

    if (!signals.hasPersonalForm) {
      details.push("Aucun formulaire de collecte de données personnelles détecté");
    } else {
      const count = Number(signals.personalFormCount);
      details.push(`${count} formulaire${count > 1 ? "s" : ""} collectant des données personnelles détecté${count > 1 ? "s" : ""}`);

      if (!signals.formWithPrivacyMention) {
        status = "warning";
        details.push("Aucune mention de l'usage des données visible près du formulaire");
      } else {
        details.push("Mention sur l'usage des données présente ✓");
      }

      if (signals.newsletter) {
        if (!signals.newsletterSeparateConsent) {
          if (status === "ok") status = "warning";
          details.push("Infolettre détectée — vérifier que le consentement est explicite et séparé du formulaire principal");
        } else {
          details.push("Case infolettre distincte détectée ✓");
        }
      }
    }

    zones.push({ zone: "formulaires", label: "Formulaires et collecte", status, details });
  }

  // ── Zone 5 : HTTPS ────────────────────────────────────────────────────────
  {
    const status: ZoneResult["status"] = signals.isHttps ? "ok" : "critical";
    zones.push({
      zone: "https",
      label: "Sécurité HTTPS",
      status,
      details: [signals.isHttps
        ? "Connexion sécurisée HTTPS active ✓"
        : "Site non sécurisé (HTTP) — données transmises en clair, non conforme"],
    });
  }

  // ── Zone 6 : Responsable de la protection ────────────────────────────────
  {
    const details: string[] = [];
    let status: ZoneResult["status"] = "ok";
    const hasResponsable = signals.responsableRpcc || signals.privacyContact;

    if (hasResponsable) {
      details.push("Responsable de la protection des données identifié ✓");
      if (signals.privacyContact) details.push("Adresse de contact dédiée détectée ✓");
    } else {
      status = "warning";
      details.push("Aucune désignation du responsable de la protection trouvée");
      details.push("Obligatoire : publier son nom/titre et un moyen de le contacter (Loi 25, art. 3.1 / RGPD, art. 37)");
    }

    zones.push({ zone: "responsable", label: "Responsable de la protection", status, details });
  }

  return zones;
}

// ─── Score pondéré ────────────────────────────────────────────────────────────
// Les zones critiques pèsent plus que les avertissements

function computeScore(zones: ZoneResult[]): number {
  // Poids par zone (importance relative)
  const zoneWeights: Record<ScanZone, number> = {
    cookies: 25,
    traceurs: 25,
    politique: 20,
    formulaires: 15,
    https: 10,
    responsable: 5,
  };

  const statusMultiplier: Record<ZoneResult["status"], number> = {
    ok: 1,
    warning: 0.5,
    critical: 0,
  };

  let totalWeight = 0;
  let earnedWeight = 0;

  for (const zone of zones) {
    const w = zoneWeights[zone.zone] ?? 10;
    totalWeight += w;
    earnedWeight += w * statusMultiplier[zone.status];
  }

  return totalWeight === 0 ? 0 : Math.round((earnedWeight / totalWeight) * 100);
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
    return { url, scannedAt, score: 0, zones: [], rawSignals: {}, error };
  }
}
