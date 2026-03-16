"use client";

import { useEffect, useState } from "react";

export function StickyMobileCta() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const target = document.getElementById("formulaire");
    if (!target || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-[#020817]/90 backdrop-blur-md border-t border-white/5 px-4 py-3 md:hidden">
      <a
        href="#formulaire"
        className="w-full inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-colors hover:bg-emerald-400"
      >
        Obtenir mon pré-audit gratuit →
      </a>
    </div>
  );
}
