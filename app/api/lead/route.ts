import { NextResponse } from "next/server";

const WEBHOOK_URL = process.env.LEAD_WEBHOOK_URL; // à définir plus tard dans .env.local

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

    // Envoi optionnel vers un webhook externe (Make, autre)
    if (WEBHOOK_URL) {
      try {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          console.error(
            "Erreur envoi vers webhook externe:",
            res.status,
            res.statusText
          );
        }
      } catch (error) {
        console.error("Erreur réseau vers webhook externe:", error);
      }
    } else {
      console.warn(
        "Aucun WEBHOOK_URL défini (LEAD_WEBHOOK_URL). Le lead est seulement loggé en local."
      );
    }

    return NextResponse.json(
      { ok: true, message: "Lead reçu." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur /api/lead:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur." },
      { status: 500 }
    );
  }
}
