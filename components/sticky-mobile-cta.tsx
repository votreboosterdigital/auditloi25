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
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="#formulaire"
        className="flex h-14 w-full cursor-pointer items-center justify-center bg-sky-600 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-sky-500"
      >
        Obtenir mon pré-audit gratuit →
      </a>
    </div>
  );
}
