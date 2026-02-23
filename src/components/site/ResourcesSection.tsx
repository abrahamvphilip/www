import Link from "next/link";

import type { SiteContent } from "@/types/site";

import { PlaceholderMedia } from "@/components/primitives/PlaceholderMedia";

interface ResourcesSectionProps {
  resources: SiteContent["resources"];
}

function ResourceCard({ card, index }: { card: SiteContent["resources"]["cards"][number]; index: number }) {
  return (
    <article className="flex w-[421px] shrink-0 flex-col gap-0.5 rounded-[8px] border border-[var(--border-faint)] bg-[var(--surface-secondary)] p-0.5">
      <PlaceholderMedia label={`resource-card-${index + 1}`} ratio="421 / 252" className="rounded-[6px] bg-[#322e2a0a]" />
      <div className="space-y-1 px-2 pb-3 pt-2">
        <p className="font-sans text-[12px] font-normal leading-[1.3333333333] text-[var(--text-strong)]">{card.readTime}</p>
        <h4 className="font-sans text-[16px] font-medium leading-[1.5] text-[var(--text-strong)]">{card.category}</h4>
        <p className="font-sans text-[14px] font-normal leading-[1.4285714286] text-[#635e5e]">{card.excerpt}</p>
      </div>
      <Link
        href="/resources/read"
        className="inline-flex h-[36px] items-center justify-center gap-2 rounded-[6px] border border-[#18181b] bg-[#18181b] px-3 text-[14px] font-medium leading-[1.4285714286] text-[#f5f5f6]"
      >
        <span>{card.cta}</span>
        <span className="inline-flex h-5 min-w-[18px] items-center justify-center rounded-[8px] border border-[#322e2a24] bg-[#edecea] px-1 font-mono text-[10px] font-medium leading-[1.2] text-[#322e2a]">
          2
        </span>
      </Link>
    </article>
  );
}

export function ResourcesSection({ resources }: ResourcesSectionProps) {
  return (
    <section data-section-id="atC3C" className="overflow-hidden bg-[var(--surface-dark)] lg:h-[1261px]">
      <div className="site-shell space-y-[56px] px-4 py-[56px] lg:px-10 lg:pb-[144px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="font-sans text-[12px] font-medium leading-[1.3333333333] tracking-[0.5px] text-[var(--text-subtle)]">
              {resources.header.eyebrow}
            </p>
            <h2 className="font-display text-[36px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-strong)]">
              {resources.header.title}
            </h2>
            <p className="font-display text-[36px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-muted)]">
              {resources.header.subtitle}
            </p>
          </div>

          <Link
            href="/resources"
            className="inline-flex h-[36px] items-center justify-center gap-2 rounded-[12px] border border-[#322e2a14] bg-[#f6f5f4] px-3 text-[14px] font-medium leading-[1.4285714286] text-[#18181b]"
          >
            <span>{resources.cta}</span>
            <span className="inline-flex h-5 min-w-[18px] items-center justify-center rounded-[8px] border border-[#322e2a24] bg-[#edecea] px-1 font-mono text-[10px] font-medium leading-[1.2] text-[#322e2a]">
              2
            </span>
          </Link>
        </div>

        <div className="grid gap-3 lg:grid-cols-[854px_854px]">
          <PlaceholderMedia label="resource-lead" ratio="854 / 445" className="rounded-[8px] bg-[var(--surface-card)]" />

          <article className="flex h-[445px] flex-col justify-between gap-1 bg-[var(--surface-card)] p-2">
            <div className="space-y-5 px-2 pt-3">
              <p className="font-sans text-[12px] font-normal leading-[1.3333333333] text-[var(--text-strong)]">{resources.lead.readTime}</p>
              <div className="space-y-1">
                <h3 className="font-sans text-[24px] font-medium leading-[1.3333333333] tracking-[-0.24px] text-[var(--text-strong)]">
                  {resources.lead.category}
                </h3>
                <p className="font-sans text-[16px] font-normal leading-[1.5] text-[#635e5e]">{resources.lead.excerpt}</p>
              </div>
            </div>
            <Link
              href="/resources/read"
              className="inline-flex h-[36px] items-center justify-center gap-2 rounded-[6px] border border-[#18181b] bg-[#18181b] px-3 text-[14px] font-medium leading-[1.4285714286] text-[#f5f5f6]"
            >
              <span>{resources.lead.cta}</span>
              <span className="inline-flex h-5 min-w-[18px] items-center justify-center rounded-[8px] border border-[#322e2a24] bg-[#edecea] px-1 font-mono text-[10px] font-medium leading-[1.2] text-[#322e2a]">
                2
              </span>
            </Link>
          </article>
        </div>

        <div className="flex gap-3">
          {resources.cards.map((card, index) => (
            <ResourceCard key={`${card.readTime}-${index}`} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
