interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  inverse?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  inverse = false,
  className,
}: SectionHeadingProps) {
  const titleTone = inverse ? "text-[var(--text-inverse)]" : "text-[var(--text-strong)]";
  const copyTone = inverse ? "text-[var(--text-inverse-subtle)]" : "text-[var(--text-subtle)]";

  return (
    <div className={`space-y-3 ${className ?? ""}`.trim()}>
      {eyebrow ? (
        <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-display text-[clamp(1.6rem,2.3vw,2.8rem)] font-light leading-[1.05] tracking-[-0.02em] ${titleTone}`}>
        {title}
      </h2>
      {subtitle ? (
        <p className={`max-w-[46ch] font-sans text-[clamp(1rem,1.25vw,1.45rem)] leading-[1.2] ${titleTone}`}>
          {subtitle}
        </p>
      ) : null}
      {description ? (
        <p className={`max-w-[62ch] font-sans text-sm leading-[1.5] ${copyTone}`}>{description}</p>
      ) : null}
    </div>
  );
}
