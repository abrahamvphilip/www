interface BrandMarkProps {
  inverse?: boolean;
  className?: string;
}

export function BrandMark({ inverse = false, className }: BrandMarkProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className ?? ""}`.trim()} aria-label="aion">
      <svg viewBox="0 0 20 16" className="h-4 w-5" aria-hidden>
        <defs>
          <linearGradient id="aion-brand-grad" x1="0" x2="1" y1="0.2" y2="0.9">
            <stop offset="0%" stopColor="#73e1d0" />
            <stop offset="100%" stopColor="#4ca154" />
          </linearGradient>
        </defs>
        <path d="M1 12.8C1.6 8.6 4.7 5.7 8.8 5.5c1.8-.1 3.4.4 4.8 1.3-.8-3-3.5-5.1-6.8-5.1C3.4 1.7.7 4.3.7 7.8c0 1.8.7 3.5 1.9 4.8h-1.6Z" fill="url(#aion-brand-grad)" />
        <circle cx="12.7" cy="3.7" r="2" fill="url(#aion-brand-grad)" />
      </svg>
      <span
        className={`font-sans text-[14px] font-medium leading-[1.2] tracking-[0.01em] ${
          inverse ? "text-[#73e1d0]" : "text-[#4ca154]"
        }`}
      >
        aion
      </span>
    </div>
  );
}
