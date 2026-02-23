interface FooterArcBackdropProps {
  className?: string;
}

export function FooterArcBackdrop({ className }: FooterArcBackdropProps) {
  return (
    <svg viewBox="0 0 1800 600" className={className} aria-hidden>
      <g fill="none" stroke="rgba(250,250,250,0.55)">
        <path d="M-70 560 Q170 230 410 560" strokeWidth="112" />
        <path d="M280 560 Q520 170 760 560" strokeWidth="112" />
        <path d="M630 560 Q870 250 1110 560" strokeWidth="112" />
        <path d="M980 560 Q1220 190 1460 560" strokeWidth="112" />
        <path d="M1330 560 Q1570 230 1810 560" strokeWidth="112" />
      </g>
      <g fill="none" stroke="rgba(20,20,19,0.28)">
        <path d="M-70 560 Q170 230 410 560" strokeWidth="40" />
        <path d="M280 560 Q520 170 760 560" strokeWidth="40" />
        <path d="M630 560 Q870 250 1110 560" strokeWidth="40" />
        <path d="M980 560 Q1220 190 1460 560" strokeWidth="40" />
        <path d="M1330 560 Q1570 230 1810 560" strokeWidth="40" />
      </g>
    </svg>
  );
}
