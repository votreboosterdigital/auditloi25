import { Navbar } from "@/components/navbar";
import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { WhyActNow } from "@/components/sections/why-act-now";
import { Faq } from "@/components/sections/faq";
import { CtaFinal } from "@/components/sections/cta-final";
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
          <Features />
          <Testimonials />
          <Pricing />
          <WhyActNow />
          <Faq />
          <CtaFinal />
          <Footer />
        </div>
      </main>
    </>
  );
}
