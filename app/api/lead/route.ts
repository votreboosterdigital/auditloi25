import { NextResponse } from "next/server";
import { Resend } from "resend";

const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL ?? "noreply@auditloi25.ca";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "votreboosterdigital@outlook.com";

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

    // Log sans données personnelles
    console.log("Nouveau lead reçu — site:", siteUrl, "— à:", payload.receivedAt);

    // 1. Webhook externe (Make, autre)
    if (WEBHOOK_URL) {
      try {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          console.error("Erreur webhook externe:", res.status, res.statusText);
        }
      } catch (error) {
        console.error("Erreur réseau webhook externe:", error);
      }
    } else {
      console.warn("LEAD_WEBHOOK_URL non défini — lead loggé en local seulement.");
    }

    // 2. Email de confirmation au prospect + notification interne
    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);
      await Promise.allSettled([
        // Confirmation au prospect
        resend.emails.send({
          from: FROM_EMAIL,
          to: email,
          replyTo: NOTIFY_EMAIL,
          subject: "Votre pré-audit Loi 25 est en route — réponse sous 48 h",
          html: confirmationHtml(name, siteUrl),
        }),
        // Notification interne
        resend.emails.send({
          from: FROM_EMAIL,
          to: NOTIFY_EMAIL,
          replyTo: NOTIFY_EMAIL,
          subject: `Nouveau lead pré-audit — ${siteUrl}`,
          html: notificationHtml(name, email, siteUrl, mainPages),
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

// ─── Templates email ─────────────────────────────────────────────────────────

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
      Vous recevrez votre rapport <strong style="color:#e2e8f0;">d'ici 48 heures ouvrables</strong>.
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

function notificationHtml(
  name: string,
  email: string,
  siteUrl: string,
  mainPages: string | undefined
): string {
  return `<!DOCTYPE html>
<html lang="fr">
<body style="font-family:system-ui,sans-serif;padding:24px;color:#1e293b;">
  <h2 style="margin:0 0 16px;">Nouveau lead pré-audit Loi 25</h2>
  <table style="border-collapse:collapse;width:100%;max-width:480px;">
    <tr><td style="padding:6px 0;font-weight:600;width:120px;">Nom</td><td>${name}</td></tr>
    <tr><td style="padding:6px 0;font-weight:600;">Courriel</td><td><a href="mailto:${email}">${email}</a></td></tr>
    <tr><td style="padding:6px 0;font-weight:600;">Site URL</td><td><a href="${siteUrl}">${siteUrl}</a></td></tr>
    <tr><td style="padding:6px 0;font-weight:600;">Pages</td><td>${mainPages ?? "—"}</td></tr>
  </table>
</body>
</html>`;
}
