import Link from "next/link";

export function CtaFinal() {
  return (
    <section
      aria-labelledby="cta-bottom-heading"
      className="mb-10 mt-16 rounded-3xl bg-gradient-to-br from-sky-500/10 via-slate-950/90 to-emerald-500/10 p-8 text-center ring-1 ring-sky-500/20"
    >
      <h2
        id="cta-bottom-heading"
        className="text-2xl font-bold tracking-tight text-slate-50"
      >
        Vous ne savez pas par où commencer avec la Loi&nbsp;25&nbsp;?
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-base text-slate-200">
        Commencez par le pré‑audit gratuit. En quelques minutes, vous nous
        donnez les informations essentielles sur votre site. Nous faisons le
        reste et revenons vers vous avec un premier portrait clair de votre
        situation.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#formulaire"
          className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_24px_rgba(16,185,129,0.25)] transition-colors hover:bg-emerald-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Demander mon pré‑audit gratuit
        </a>
        <Link
          href="/ressources/checklist-loi-25-site-web"
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-sky-200 transition-colors hover:text-sky-100"
        >
          Voir la checklist Loi&nbsp;25
          <span className="text-[11px]" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
