interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  inverse?: boolean;
  className?: string;
  compact?: boolean;
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  inverse = false,
  className,
  compact = false,
  eyebrowClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  const headingSize = compact ? "text-3xl lg:text-4xl" : "text-4xl";
  const titleTone = inverse ? "text-alabaster-25" : "text-bunker-800";
  const subtitleTone = inverse ? "text-alabaster-150" : "text-bunker-325";
  const eyebrowTone = inverse ? "text-alabaster-150" : "text-bunker-550";
  const copyTone = inverse ? "text-alabaster-25" : "text-bunker-675";

  return (
    <div className={`space-y-3 ${className ?? ""}`.trim()}>
      {eyebrow ? (
        <p
          className={`font-sans text-xs font-medium leading-[1.3333333333] tracking-[0.5px] ${eyebrowTone} ${eyebrowClassName ?? ""}`.trim()}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display ${headingSize} font-light leading-[1.1111111111] tracking-[-0.36px] ${titleTone} ${titleClassName ?? ""}`.trim()}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`font-display ${headingSize} font-light leading-[1.1111111111] tracking-[-0.36px] ${subtitleTone} ${subtitleClassName ?? ""}`.trim()}
        >
          {subtitle}
        </p>
      ) : null}
      {description ? (
        <p
          className={`max-w-[566px] font-sans text-xl font-normal leading-[1.4] tracking-[-0.2px] ${copyTone} ${descriptionClassName ?? ""}`.trim()}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
