import Link from "next/link";

import type { SiteContent } from "@/types/site";

import { PlaceholderMedia } from "@/components/primitives/PlaceholderMedia";

interface ForgeSectionProps {
  forge: SiteContent["forge"];
}

function PillButton({
  label,
  href,
  dark,
  badge,
  className,
}: {
  label: string;
  href: string;
  dark?: boolean;
  badge?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex h-[36px] items-center justify-center gap-2 rounded-[12px] border px-3 text-[14px] font-medium leading-[1.4285714286] ${
        dark
          ? "border-[#18181b] bg-[#18181b] text-[#ffffff]"
          : "border-[#322e2a14] bg-[#f6f5f4] text-[#322e2a]"
      } ${className ?? ""}`.trim()}
    >
      <span>{label}</span>
      {badge ? (
        <span className="inline-flex h-5 min-w-[18px] items-center justify-center rounded-[8px] border border-[#322e2a24] bg-[#edecea] px-1 font-mono text-[10px] font-medium leading-[1.2] text-[#322e2a]">
          {badge}
        </span>
      ) : null}
    </Link>
  );
}

function ForgeFeatureCard({
  title,
  description,
  dense,
}: {
  title: string;
  description: string;
  dense?: boolean;
}) {
  return (
    <article className="flex h-[526px] w-[772px] flex-col gap-6 border border-[var(--border-default)] p-5">
      <h3 className={`max-w-[473.918px] font-display text-[24px] leading-[1.25] text-[var(--text-strong)] ${dense ? "font-normal" : "font-light"}`}>
        {title}
      </h3>
      <PlaceholderMedia label={title} ratio="732 / 338" className="bg-[var(--surface-card)]" />
      <p className={`font-sans text-[var(--text-strong)] ${dense ? "text-[20px] leading-[1.4] tracking-[-0.2px]" : "text-[16px] leading-[1.5]"}`}>
        {description}
      </p>
    </article>
  );
}

export function ForgeSection({ forge }: ForgeSectionProps) {
  return (
    <section data-section-id="jAwkA" className="bg-[var(--surface-dark-emerald)]">
      <div className="site-shell">
        <div className="grid gap-10 px-4 pb-10 pt-20 lg:h-[1014px] lg:grid-cols-[565px_854px] lg:justify-between lg:gap-3 lg:px-10 lg:pb-10 lg:pt-[120px]">
          <div className="flex min-h-[854px] flex-col justify-between gap-10">
            <div className="w-full space-y-6">
              <div className="space-y-3 pt-20">
                <p className="font-sans text-[12px] font-medium leading-[1.3333333333] tracking-[0.5px] text-[var(--text-subtle)]">{forge.header.eyebrow}</p>
                <h2 className="font-display text-[36px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-strong)]">
                  {forge.header.title}
                </h2>
                <p className="font-display text-[36px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-muted)]">
                  {forge.header.subtitle}
                </p>
              </div>
              <p className="max-w-[566px] font-sans text-[20px] font-normal leading-[1.4] tracking-[-0.2px] text-[#635e5e]">
                {forge.header.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 pb-16">
              <PillButton label={forge.ctas[0]} href="/forge" badge="2" className="w-[170px]" />
              <div className="flex h-[38px] w-[216px] items-center">
                <PillButton label={forge.ctas[1]} href="/platform" dark badge="2" className="w-[170px]" />
                <span className="h-[38px] w-[6px] bg-transparent" />
                <PillButton label="" href="/platform" dark badge="2" className="w-[40px] px-0" />
              </div>
            </div>
          </div>

          <div className="relative h-[854px] w-full">
            <PlaceholderMedia label="forge-diagram" ratio="854 / 854" className="bg-[var(--surface-primary)]" />
            <div className="absolute bottom-[307px] left-[376px] w-[122px] rounded-[2px] border border-[#fafafa] bg-[#141413] px-2 py-1 text-[#fafafa]">
              <p className="text-[8.6776px] leading-[1.25]">{forge.deckLabels[0]}</p>
            </div>
          </div>
        </div>

        <div className="space-y-[56px] overflow-hidden px-4 pb-[120px] pt-20 lg:h-[880px] lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <p className="font-display text-[28px] font-semibold leading-[1.5] text-black">
              {"///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"}
            </p>
            <PillButton label={forge.dashboardStep} href="/forge/step" dark badge="2" className="h-[36px] w-[47px] px-3" />
          </div>

          <div className="overflow-hidden">
            <div className="flex w-[3160px] gap-6">
              <ForgeFeatureCard title={forge.featureCards[0].title} description={forge.featureCards[0].description} />
              <ForgeFeatureCard title={forge.featureCards[1].title} description={forge.featureCards[1].description} />
              <ForgeFeatureCard title={forge.featureCards[2].title} description={forge.featureCards[2].description} />
              <ForgeFeatureCard title={forge.featureCards[3].title} description={forge.featureCards[3].description} dense />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
