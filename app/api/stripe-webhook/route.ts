import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL ?? "noreply@auditloi25.ca";
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "votreboosterdigital@outlook.com";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Signature manquante." }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature invalide:", err);
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const customerEmail = session.customer_details?.email ?? "—";
    const customerName = session.customer_details?.name ?? "—";
    const amount = session.amount_total ? `${(session.amount_total / 100).toFixed(2)} $` : "450 $";

    console.log(`Paiement reçu — ${customerEmail} — ${amount}`);

    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);
      await resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFY_EMAIL,
        replyTo: customerEmail,
        subject: `💳 Nouveau paiement reçu — ${customerEmail} — ${amount}`,
        html: `<!DOCTYPE html>
<html lang="fr">
<body style="font-family:system-ui,sans-serif;padding:24px;color:#1e293b;">
  <h2 style="margin:0 0 16px;">Paiement reçu — Audit Loi 25</h2>
  <table style="border-collapse:collapse;width:100%;max-width:480px;">
    <tr><td style="padding:6px 0;font-weight:600;width:130px;">Client</td><td>${customerName}</td></tr>
    <tr><td style="padding:6px 0;font-weight:600;">Courriel</td><td><a href="mailto:${customerEmail}">${customerEmail}</a></td></tr>
    <tr><td style="padding:6px 0;font-weight:600;">Montant</td><td style="color:#059669;font-weight:700;">${amount} CAD</td></tr>
    <tr><td style="padding:6px 0;font-weight:600;">Session ID</td><td style="font-size:12px;color:#64748b;">${session.id}</td></tr>
  </table>
  <p style="margin-top:20px;font-size:14px;color:#475569;">→ Lancer l'audit et envoyer le rapport sous 48h ouvrables.</p>
</body>
</html>`,
      });
    }
  }

  return NextResponse.json({ received: true });
}
