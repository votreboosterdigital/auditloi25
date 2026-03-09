// src/app/merci/page.tsx
import Link from "next/link";

export default function MerciPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 py-10 sm:px-6">
        <div className="w-full rounded-2xl bg-slate-950/80 p-8 text-center ring-1 ring-slate-800">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-400">
            Demande reçue
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Merci pour votre confiance.
          </h1>
          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Votre demande de pré‑audit Loi 25 a bien été enregistrée. Vous
            recevrez un premier retour par courriel dans les prochains jours
            ouvrables, avec un aperçu des zones à risque sur votre site et, si
            vous le souhaitez, une proposition d&apos;audit complet.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Si vous n&apos;avez pas de nouvelles après quelques jours, n&apos;hésitez
            pas à vérifier vos courriels indésirables ou à nous répondre
            directement au message de confirmation.
          </p>

          <div className="mt-6 flex justify-center gap-3 text-sm">
            <Link
              href="/"
            >
              <span className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-slate-200 ring-1 ring-slate-700 transition hover:bg-slate-800">
                Retour à la page d&apos;accueil
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
