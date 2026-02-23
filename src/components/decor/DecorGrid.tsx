interface DecorGridProps {
  className?: string;
  tone?: "light" | "dark";
}

export function DecorGrid({ className, tone = "dark" }: DecorGridProps) {
  const stroke = tone === "dark" ? "rgba(245,245,246,0.24)" : "rgba(20,20,19,0.15)";
  const fill = tone === "dark" ? "rgba(23,211,155,0.1)" : "rgba(7,103,74,0.08)";

  return (
    <svg viewBox="0 0 520 360" className={className} aria-hidden>
      <defs>
        <linearGradient id="grid-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={fill} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="480" height="320" rx="12" fill="url(#grid-grad)" stroke={stroke} />
      <g stroke={stroke} strokeWidth="1">
        <path d="M20 100 H500" />
        <path d="M20 180 H500" />
        <path d="M20 260 H500" />
        <path d="M120 20 V340" />
        <path d="M220 20 V340" />
        <path d="M320 20 V340" />
        <path d="M420 20 V340" />
      </g>
      <circle cx="180" cy="130" r="28" fill="rgba(15,177,130,0.35)" stroke={stroke} />
      <circle cx="344" cy="200" r="16" fill="rgba(246,199,79,0.35)" stroke={stroke} />
      <circle cx="248" cy="264" r="20" fill="rgba(153,131,237,0.35)" stroke={stroke} />
    </svg>
  );
}
