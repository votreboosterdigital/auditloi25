import { NextResponse } from "next/server";
import { Resend } from "resend";

const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL ?? "noreply@auditloi25.ca";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "votreboosterdigital@outlook.com";

// ─── Scan automatique du site prospect ───────────────────────────────────────

type ScanResult = {
  https: boolean;
  cookieBanner: boolean;
  googleAnalytics: boolean;
  googleTagManager: boolean;
  metaPixel: boolean;
  linkedinInsight: boolean;
  privacyPolicy: boolean;
  contactForm: boolean;
  error?: string;
};

async function scanSite(rawUrl: string): Promise<ScanResult> {
  const url = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
  const https = url.startsWith("https://");

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; AuditLoi25Bot/1.0; +https://auditloi25.ca)" },
      signal: AbortSignal.timeout(8000),
    });
    const html = await res.text();
    const lower = html.toLowerCase();

    return {
      https,
      cookieBanner: /axeptio|cookiebot|tarteaucitron|onetrust|cookie-consent|cookieconsent|cookiefirst|didomi|usercentrics/.test(lower),
      googleAnalytics: /gtag\s*\(|google-analytics\.com\/analytics|ua-\d{4,}|['"](g-[a-z0-9]{8,})['"]/i.test(html),
      googleTagManager: /gtm-[a-z0-9]+|googletagmanager\.com/i.test(html),
      metaPixel: /fbq\s*\(|connect\.facebook\.net/i.test(html),
      linkedinInsight: /snap\.licdn\.com|linkedin\.com\/px/i.test(html),
      privacyPolicy: /politique de confidentialit|privacy policy|vie priv|mentions.l.gales|protection des donn/i.test(html),
      contactForm: /<form[\s\S]{0,1000}(type=.email|type=.courriel)/i.test(html),
    };
  } catch (err) {
    return {
      https,
      cookieBanner: false,
      googleAnalytics: false,
      googleTagManager: false,
      metaPixel: false,
      linkedinInsight: false,
      privacyPolicy: false,
      contactForm: false,
      error: err instanceof Error ? err.message : "Impossible d'accéder au site",
    };
  }
}

// ─── Handler principal ────────────────────────────────────────────────────────

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, siteUrl, mainPages } = body;

    if (!name || !email || !siteUrl) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      siteUrl,
      mainPages,
      receivedAt: new Date().toISOString(),
      source: "auditloi25.ca",
    };

    // Log sans données personnelles — site uniquement, pas de courriel
    console.info("Nouveau lead reçu — site:", siteUrl, "— à:", payload.receivedAt);

    // 1. Scan automatique du site + webhook en parallèle
    const [scan] = await Promise.all([
      scanSite(siteUrl),
      WEBHOOK_URL
        ? fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(5000),
          }).catch((err) => console.error("Erreur réseau webhook externe:", err))
        : Promise.resolve(console.warn("LEAD_WEBHOOK_URL non défini.")),
    ]);

    // 2. Email de confirmation au prospect + notification enrichie
    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);
      await Promise.allSettled([
        resend.emails.send({
          from: FROM_EMAIL,
          to: email,
          replyTo: NOTIFY_EMAIL,
          subject: "Votre pré-audit Loi 25 est prêt — rapport instantané",
          html: confirmationHtml(name, siteUrl),
        }),
        resend.emails.send({
          from: FROM_EMAIL,
          to: NOTIFY_EMAIL,
          replyTo: NOTIFY_EMAIL,
          subject: `Nouveau lead pré-audit — ${siteUrl}`,
          html: notificationHtml(name, email, siteUrl, mainPages, scan),
        }),
      ]);
    } else {
      console.warn("RESEND_API_KEY non défini — emails non envoyés.");
    }

    return NextResponse.json({ ok: true, message: "Lead reçu." }, { status: 200 });
  } catch (error) {
    console.error("Erreur /api/lead:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}

// ─── Templates email ──────────────────────────────────────────────────────────

function confirmationHtml(name: string, siteUrl: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#020817;font-family:Inter,system-ui,sans-serif;color:#e2e8f0;">
  <div style="max-width:560px;margin:0 auto;padding:40px 24px;">

    <div style="margin-bottom:32px;">
      <span style="font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#38bdf8;">auditloi25.ca</span>
    </div>

    <h1 style="margin:0 0 8px;font-size:24px;font-weight:800;color:#f8fafc;line-height:1.25;">
      C'est reçu, ${name}&nbsp;!
    </h1>
    <p style="margin:0 0 24px;font-size:15px;color:#94a3b8;line-height:1.6;">
      Votre demande de pré-audit pour <strong style="color:#e2e8f0;">${siteUrl}</strong> a bien été reçue.
      Votre rapport a été généré <strong style="color:#e2e8f0;">instantanément</strong>.
    </p>

    <div style="background:#0d1526;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:20px 24px;margin-bottom:24px;">
      <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#38bdf8;text-transform:uppercase;letter-spacing:0.1em;">Votre rapport couvrira</p>
      ${[
        "Bannière de cookies et boutons de consentement",
        "Formulaires et collecte de données",
        "Mentions légales et politique de confidentialité",
        "Traceurs, balises et outils d'analyse",
      ].map(item => `<p style="margin:0 0 8px;font-size:14px;color:#cbd5e1;">✓ ${item}</p>`).join("")}
    </div>

    <p style="margin:0 0 8px;font-size:13px;color:#64748b;line-height:1.6;">
      Une question avant de recevoir votre rapport ? Répondez à ce courriel ou écrivez à
      <a href="mailto:votreboosterdigital@outlook.com" style="color:#38bdf8;">votreboosterdigital@outlook.com</a>.
    </p>
    <p style="margin:0;font-size:13px;color:#475569;">
      — L'équipe auditloi25.ca
    </p>
  </div>
</body>
</html>`;
}

function scanRow(label: string, detected: boolean, okMeans: "detected" | "absent"): string {
  const isOk = okMeans === "detected" ? detected : !detected;
  const icon = isOk ? "✅" : "⚠️";
  const status = detected ? "Détecté" : "Absent";
  return `<tr>
    <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;">${icon} ${label}</td>
    <td style="padding:6px 8px;border-bottom:1px solid #e2e8f0;color:${detected ? "#0f766e" : "#b45309"};">${status}</td>
  </tr>`;
}

function notificationHtml(
  name: string,
  email: string,
  siteUrl: string,
  mainPages: string | undefined,
  scan: ScanResult
): string {
  const priorities: string[] = [];
  if (!scan.cookieBanner) priorities.push("Aucune bannière de consentement cookies");
  if (scan.googleAnalytics && !scan.cookieBanner) priorities.push("Google Analytics sans consentement — infraction directe");
  if (scan.googleTagManager && !scan.cookieBanner) priorities.push("Google Tag Manager actif sans consentement");
  if (scan.metaPixel) priorities.push("Meta Pixel (Facebook) détecté");
  if (scan.linkedinInsight) priorities.push("LinkedIn Insight Tag détecté");
  if (!scan.privacyPolicy) priorities.push("Politique de confidentialité introuvable");
  if (!scan.https) priorities.push("Site non sécurisé (HTTP)");

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:system-ui,sans-serif;padding:24px;color:#1e293b;max-width:600px;">

  <h2 style="margin:0 0 4px;">Nouveau lead pré-audit Loi 25</h2>
  <p style="margin:0 0 20px;color:#64748b;font-size:13px;">Reçu le ${new Date().toLocaleString("fr-CA", { timeZone: "America/Toronto" })}</p>

  <table style="border-collapse:collapse;width:100%;margin-bottom:28px;">
    <tr><td style="padding:6px 0;font-weight:600;width:130px;">Nom</td><td>${name}</td></tr>
    <tr><td style="padding:6px 0;font-weight:600;">Courriel</td><td><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding:6px 0;font-weight:600;">Site</td><td><a href="${siteUrl.startsWith("http") ? siteUrl : "https://" + siteUrl}">${siteUrl}</a></td></tr>
    <tr><td style="padding:6px 0;font-weight:600;">Pages</td><td>${mainPages ?? "—"}</td></tr>
  </table>

  <h3 style="margin:0 0 12px;font-size:15px;border-bottom:2px solid #0f172a;padding-bottom:6px;">Scan automatique</h3>
  ${scan.error ? `<p style="color:#b45309;">⚠️ Scan échoué : ${scan.error}</p>` : `
  <table style="border-collapse:collapse;width:100%;font-size:14px;margin-bottom:20px;">
    ${scanRow("HTTPS", scan.https, "detected")}
    ${scanRow("Bannière de consentement cookies", scan.cookieBanner, "detected")}
    ${scanRow("Google Analytics", scan.googleAnalytics, "absent")}
    ${scanRow("Google Tag Manager", scan.googleTagManager, "absent")}
    ${scanRow("Meta Pixel (Facebook)", scan.metaPixel, "absent")}
    ${scanRow("LinkedIn Insight Tag", scan.linkedinInsight, "absent")}
    ${scanRow("Politique de confidentialité", scan.privacyPolicy, "detected")}
    ${scanRow("Formulaire de contact", scan.contactForm, "detected")}
  </table>`}

  ${priorities.length > 0 ? `
  <h3 style="margin:0 0 10px;font-size:15px;color:#b45309;">Points prioritaires à couvrir dans le rapport</h3>
  <ul style="margin:0 0 24px;padding-left:20px;font-size:14px;">
    ${priorities.map(p => `<li style="margin-bottom:6px;">${p}</li>`).join("")}
  </ul>` : `<p style="color:#0f766e;">✅ Aucune infraction majeure détectée automatiquement — vérification manuelle recommandée.</p>`}

</body>
</html>`;
}
