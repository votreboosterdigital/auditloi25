type Props = {
  score: number; // 0-100
};

function getColor(score: number) {
  if (score >= 70) return { fill: "#10b981", glow: "rgba(16,185,129,0.4)", label: "Bon" };
  if (score >= 40) return { fill: "#f59e0b", glow: "rgba(245,158,11,0.4)", label: "À améliorer" };
  return { fill: "#ef4444", glow: "rgba(239,68,68,0.4)", label: "À risque" };
}

export function ScoreGauge({ score }: Props) {
  const { fill, glow, label } = getColor(score);
  // Arc SVG demi-cercle — rayon 54, stroke 10
  const r = 54;
  const circumference = Math.PI * r; // demi-cercle
  const offset = circumference * (1 - score / 100);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ filter: `drop-shadow(0 0 12px ${glow})` }}>
        <svg width={140} height={80} viewBox="0 0 140 80" aria-hidden="true">
          {/* Fond */}
          <path
            d="M 14 70 A 56 56 0 0 1 126 70"
            fill="none"
            stroke="#1e293b"
            strokeWidth={10}
            strokeLinecap="round"
          />
          {/* Arc score */}
          <path
            d="M 14 70 A 56 56 0 0 1 126 70"
            fill="none"
            stroke={fill}
            strokeWidth={10}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.8s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
          <span className="text-3xl font-black text-slate-50" style={{ color: fill }}>
            {score}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            / 100
          </span>
        </div>
      </div>
      <span
        className="rounded-full px-3 py-0.5 text-xs font-semibold"
        style={{ background: `${fill}22`, color: fill, border: `1px solid ${fill}44` }}
      >
        {label}
      </span>
    </div>
  );
}
