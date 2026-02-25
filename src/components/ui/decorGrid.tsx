interface DecorGridProps {
  className?: string;
  tone?: "light" | "dark";
}

export function DecorGrid({ className, tone = "dark" }: DecorGridProps) {
  const stroke = tone === "dark" ? "var(--alabaster-25)" : "var(--bunker-800)";
  const strokeOpacity = tone === "dark" ? 0.24 : 0.15;
  const fill = tone === "dark" ? "var(--eucalyptus-325)" : "var(--chateau-green-325)";
  const fillOpacity = tone === "dark" ? 0.1 : 0.08;
  const mintFill = "var(--eucalyptus-325)";
  const amberFill = "var(--anzac-225)";
  const purpleFill = "var(--purple-heart-325)";

  return (
    <svg viewBox="0 0 520 360" className={className} aria-hidden>
      <defs>
        <linearGradient id="grid-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={fill} stopOpacity={fillOpacity} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="480" height="320" rx="12" fill="url(#grid-grad)" stroke={stroke} strokeOpacity={strokeOpacity} />
      <g stroke={stroke} strokeOpacity={strokeOpacity} strokeWidth="1">
        <path d="M20 100 H500" />
        <path d="M20 180 H500" />
        <path d="M20 260 H500" />
        <path d="M120 20 V340" />
        <path d="M220 20 V340" />
        <path d="M320 20 V340" />
        <path d="M420 20 V340" />
      </g>
      <circle cx="180" cy="130" r="28" fill={mintFill} fillOpacity={0.35} stroke={stroke} strokeOpacity={strokeOpacity} />
      <circle cx="344" cy="200" r="16" fill={amberFill} fillOpacity={0.35} stroke={stroke} strokeOpacity={strokeOpacity} />
      <circle cx="248" cy="264" r="20" fill={purpleFill} fillOpacity={0.35} stroke={stroke} strokeOpacity={strokeOpacity} />
    </svg>
  );
}
