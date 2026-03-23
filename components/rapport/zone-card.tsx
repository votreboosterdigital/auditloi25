import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import type { ZoneResult } from "@/lib/scanner";

const statusConfig = {
  ok: {
    icon: CheckCircle2,
    color: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    ring: "rgba(16,185,129,0.2)",
    label: "Conforme",
  },
  warning: {
    icon: AlertTriangle,
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    ring: "rgba(245,158,11,0.2)",
    label: "À vérifier",
  },
  critical: {
    icon: XCircle,
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    ring: "rgba(239,68,68,0.2)",
    label: "Non conforme",
  },
};

type Props = {
  zone: ZoneResult;
};

export function ZoneCard({ zone }: Props) {
  const cfg = statusConfig[zone.status];
  const Icon = cfg.icon;

  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: cfg.bg,
        border: `1px solid ${cfg.ring}`,
      }}
    >
      <div className="flex items-start gap-3">
        <Icon
          size={20}
          className="mt-0.5 shrink-0"
          style={{ color: cfg.color }}
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold text-slate-100">{zone.label}</h3>
            <span
              className="rounded-full px-2 py-px text-[10px] font-semibold uppercase tracking-wide"
              style={{ background: `${cfg.color}22`, color: cfg.color }}
            >
              {cfg.label}
            </span>
          </div>
          <ul className="mt-2 space-y-1">
            {zone.details.map((d, i) => (
              <li key={i} className="text-xs leading-relaxed text-slate-400">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
