import { Shield, MapPin, CheckCircle, Zap } from "lucide-react";

const items = [
  { icon: Shield, label: "Service privé indépendant" },
  { icon: MapPin, label: "Basé au Québec" },
  { icon: CheckCircle, label: "Aligné exigences CAI" },
  { icon: Zap, label: "Pré-audit gratuit" },
];

export function TrustStrip() {
  return (
    <div
      aria-label="Indicateurs de confiance"
      className="mt-10 border-y border-slate-800/60 bg-slate-900/50 py-4"
    >
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 sm:px-6 lg:px-10">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="flex items-center gap-2 text-[13px] text-slate-300">
              <Icon size={14} className="shrink-0 text-sky-400" aria-hidden="true" />
              {item.label}
              {index < items.length - 1 && (
                <span className="ml-6 hidden text-slate-700 sm:inline" aria-hidden="true">
                  |
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
