import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST() {
  // Initialisation lazy de Stripe — évite l'échec au build si la clé est absente
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      currency: "cad",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "cad",
            unit_amount: 45000, // 450.00 $
            product_data: {
              name: "Audit complet Loi 25 — Site web",
              description:
                "Rapport PDF, plan de correction priorisé, modèle de politique de confidentialité, attestation de conformité.",
            },
          },
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://auditloi25.ca"}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://auditloi25.ca"}/offre`,
      locale: "fr",
      payment_method_types: ["card"],
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Erreur Stripe checkout:", error);
    return NextResponse.json(
      { error: "Impossible de créer la session de paiement." },
      { status: 500 }
    );
  }
}
