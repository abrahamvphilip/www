import Link from "next/link";

import type { SiteContent } from "@/types/site";

interface CareersSectionProps {
  careers: SiteContent["careers"];
}

function OpeningCard({ title, engagement, location }: SiteContent["careers"]["openings"][number]) {
  return (
    <article className="flex w-[421px] shrink-0 flex-col gap-4">
      <div className="flex items-center gap-6">
        <h3 className="font-sans text-[16px] font-normal leading-[1.5] text-[var(--text-strong)]">{title}</h3>
        <span className="h-px w-10 bg-[var(--text-strong)]" />
        <span aria-hidden className="text-[16px] text-[var(--text-strong)]">
          ↗
        </span>
      </div>
      <div className="space-y-0">
        <p className="font-sans text-[14px] font-normal leading-[1.4285714286] text-[var(--text-subtle)]">{engagement}</p>
        <p className="font-sans text-[14px] font-normal leading-[1.4285714286] text-[var(--text-subtle)]">{location}</p>
      </div>
    </article>
  );
}

export function CareersSection({ careers }: CareersSectionProps) {
  return (
    <section data-section-id="gwgPH" className="bg-[var(--surface-dark)]">
      <div className="site-shell space-y-[56px] px-4 py-[96px] lg:px-10 lg:pb-[200px] lg:pt-[144px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="font-sans text-[12px] font-medium leading-[1.3333333333] tracking-[0.5px] text-[var(--text-subtle)]">
              {careers.header.eyebrow}
            </p>
            <h2 className="font-display text-[36px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-strong)]">
              {careers.header.title}
            </h2>
            <p className="font-display text-[36px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-muted)]">
              {careers.header.subtitle}
            </p>
          </div>

          <Link
            href="/careers"
            className="inline-flex h-[36px] items-center justify-center gap-2 rounded-[12px] border border-[#322e2a14] bg-[#f6f5f4] px-3 font-sans text-[14px] font-medium leading-[1.4285714286] text-[#18181b]"
          >
            <span>{careers.cta}</span>
            <span className="inline-flex h-5 min-w-[18px] items-center justify-center rounded-[8px] border border-[#322e2a24] bg-[#edecea] px-1 font-mono text-[10px] font-medium leading-[1.2] text-[#322e2a]">
              2
            </span>
          </Link>
        </div>

        <div className="flex gap-3 overflow-hidden">
          {careers.openings.map((opening, index) => (
            <OpeningCard key={`${opening.title}-${index}`} title={opening.title} engagement={opening.engagement} location={opening.location} />
          ))}
        </div>
      </div>
    </section>
  );
}
