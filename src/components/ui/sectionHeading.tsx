import { RevealGroup } from "@/components/ui/reveal/revealGroup";
import { RevealText } from "@/components/ui/reveal/revealText";

import type { RevealProfile } from "@/components/ui/reveal/timings";

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
  animated?: boolean;
  revealProfile?: RevealProfile;
  useParentRevealGroup?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  description,
  inverse = false,
  className,
  eyebrowClassName,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  animated = false,
  revealProfile = "cinematic",
  useParentRevealGroup = false,
}: SectionHeadingProps) {
  const headingSize = "text-4xl";
  const titleTone = inverse ? "text-alabaster-25" : "text-bunker-800";
  const subtitleTone = inverse ? "text-alabaster-150" : "text-bunker-325";
  const eyebrowTone = inverse ? "text-alabaster-150" : "text-bunker-550";
  const copyTone = inverse ? "text-alabaster-25" : "text-bunker-675";
  const rootClassName = `space-y-3 ${className ?? ""}`.trim();

  if (!animated) {
    return (
      <div className={rootClassName}>
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

  const animatedContent = (
    <>
      {eyebrow ? (
        <RevealText
          as="p"
          phase="eyebrow"
          split="none"
          className={`font-sans text-xs font-medium leading-[1.3333333333] tracking-[0.5px] ${eyebrowTone} ${eyebrowClassName ?? ""}`.trim()}
        >
          {eyebrow}
        </RevealText>
      ) : null}
      <RevealText
        as="h2"
        phase="heading"
        split="words"
        className={`font-display ${headingSize} font-light leading-[1.1111111111] tracking-[-0.36px] ${titleTone} ${titleClassName ?? ""}`.trim()}
      >
        {title}
      </RevealText>
      {subtitle ? (
        <RevealText
          as="p"
          phase="subheading"
          split="words"
          className={`font-display ${headingSize} font-light leading-[1.1111111111] tracking-[-0.36px] ${subtitleTone} ${subtitleClassName ?? ""}`.trim()}
        >
          {subtitle}
        </RevealText>
      ) : null}
      {description ? (
        <RevealText
          as="p"
          phase="description"
          split="lines"
          className={`max-w-[566px] font-sans text-xl font-normal leading-[1.4] tracking-[-0.2px] ${copyTone} ${descriptionClassName ?? ""}`.trim()}
        >
          {description}
        </RevealText>
      ) : null}
    </>
  );

  if (useParentRevealGroup) {
    return <div className={rootClassName}>{animatedContent}</div>;
  }

  return (
    <RevealGroup className={rootClassName} profile={revealProfile}>
      {animatedContent}
    </RevealGroup>
  );
}
