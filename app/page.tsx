import { Navbar } from "@/components/navbar";
import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { CasPratique } from "@/components/sections/cas-pratique";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { WhyActNow } from "@/components/sections/why-act-now";
import { Faq } from "@/components/sections/faq";
import { CtaFinal } from "@/components/sections/cta-final";
import { LatestArticles } from "@/components/sections/latest-articles";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      {/* Sticky navbar — en dehors du flux de padding */}
      <Navbar />
      <JsonLd />

      <main className="relative min-h-screen bg-slate-950 text-slate-50">
        {/* Fond décoratif global */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-x-[-40%] top-[-25%] h-[360px] bg-gradient-to-br from-sky-500/20 via-emerald-500/10 to-transparent blur-3xl" />
          <div className="absolute bottom-[-35%] left-[-10%] h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute bottom-[-25%] right-[-10%] h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        {/* Trust strip — pleine largeur, hors container */}
        <TrustStrip />

        {/* Container centré pour toutes les sections */}
        <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-10">
          <Hero />
          <HowItWorks />

          {/* Section visuelle — Voici ce que vous recevez */}
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <div className="text-center mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">Rapport instantané</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Voici ce que vous recevez — instantanément
                </h2>
                <p className="mt-3 text-slate-400 text-sm">
                  Score de risque · Zones critiques en rouge · Actions prioritaires classées
                </p>
              </div>
              <div className="relative rounded-2xl border border-white/8 bg-slate-900/50 overflow-hidden">
                {/* Placeholder rapport */}
                <div className="aspect-[16/9] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                  <div className="text-center space-y-4 p-8">
                    <div className="mx-auto w-20 h-20 rounded-full bg-red-500/10 ring-1 ring-red-500/30 flex items-center justify-center">
                      <span className="text-3xl font-black text-red-400">42</span>
                    </div>
                    <div className="space-y-2 max-w-sm mx-auto">
                      <div className="h-3 rounded-full bg-red-500/20 ring-1 ring-red-500/20 w-full" />
                      <div className="h-3 rounded-full bg-amber-500/20 ring-1 ring-amber-500/20 w-3/4 mx-auto" />
                      <div className="h-3 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/20 w-1/2 mx-auto" />
                    </div>
                    <p className="text-xs text-slate-500">Exemple de rapport — score et zones de votre site réel</p>
                  </div>
                </div>
                {/* Overlay avec badges */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center">
                  <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400 ring-1 ring-red-500/30">Bannière cookies manquante</span>
                  <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-400 ring-1 ring-amber-500/30">Formulaire sans mention</span>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-500/30">HTTPS actif ✓</span>
                </div>
              </div>
            </div>
          </section>

          <Features />
          <CasPratique />
          <Testimonials />
          <Pricing />
          <WhyActNow />
          <Faq />
          <LatestArticles />
          <CtaFinal />
          <Footer />
        </div>
      </main>
    </>
  );
}
