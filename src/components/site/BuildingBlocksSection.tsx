import type { SiteContent } from "@/types/site";

import { PlaceholderMedia } from "@/components/primitives/PlaceholderMedia";

interface BuildingBlocksSectionProps {
  blocks: SiteContent["buildingBlocks"];
}

export function BuildingBlocksSection({ blocks }: BuildingBlocksSectionProps) {
  return (
    <section data-section-id="oqmDi" className="overflow-hidden bg-[var(--surface-muted)] lg:h-[2150px]">
      <div className="site-shell space-y-[56px] px-0 py-[96px] lg:py-[144px]">
        <div className="grid gap-10 px-4 lg:grid-cols-[565px_565px] lg:justify-between lg:px-10">
          <div className="space-y-3">
            <p className="font-sans text-[12px] font-medium leading-[1.3333333333] tracking-[0.5px] text-[var(--text-subtle)]">
              {blocks.header.eyebrow}
            </p>
            <h2 className="font-display text-[36px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-strong)]">
              {blocks.header.title}
            </h2>
            <p className="font-display text-[36px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-muted)]">
              {blocks.header.subtitle}
            </p>
          </div>
          <div className="pt-10">
            <p className="max-w-[566px] font-sans text-[20px] font-normal leading-[1.4] tracking-[-0.2px] text-[var(--text-body)]">
              {blocks.header.description}
            </p>
          </div>
        </div>

        <div className="px-4 lg:px-10">
          <div className="relative h-auto lg:h-[1169px]">
            <div className="relative mx-auto h-full w-full max-w-[1720px]">
              <div className="absolute left-0 top-[89px] hidden w-[279px] space-y-3 lg:block">
                <h3 className="font-sans text-[16px] leading-[1.5] text-[var(--text-strong)]">{blocks.cards[0].title}</h3>
                <p className="font-sans text-[12px] leading-[1.3333333333] text-[var(--text-subtle)]">{blocks.cards[0].description}</p>
              </div>
              <div className="absolute left-0 top-[542px] hidden w-[279px] space-y-3 lg:block">
                <h3 className="font-sans text-[16px] leading-[1.5] text-[var(--text-strong)]">{blocks.cards[1].title}</h3>
                <p className="font-sans text-[12px] leading-[1.3333333333] text-[var(--text-subtle)]">{blocks.cards[1].description}</p>
              </div>
              <div className="absolute right-0 top-[344px] hidden w-[279px] space-y-3 lg:block">
                <h3 className="font-sans text-[16px] leading-[1.5] text-[var(--text-strong)]">{blocks.cards[2].title}</h3>
                <p className="font-sans text-[12px] leading-[1.3333333333] text-[var(--text-subtle)]">{blocks.cards[2].description}</p>
              </div>
              <div className="absolute right-0 top-[903px] hidden w-[279px] space-y-3 lg:block">
                <h3 className="font-sans text-[16px] leading-[1.5] text-[var(--text-strong)]">{blocks.cards[3].title}</h3>
                <p className="font-sans text-[12px] leading-[1.3333333333] text-[var(--text-subtle)]">{blocks.cards[3].description}</p>
              </div>

              <div className="mx-auto w-full max-w-[1169px]">
                <PlaceholderMedia label="blocks-canvas" ratio="1169 / 1169" className="bg-[var(--surface-primary)]" />
              </div>
              <div className="pointer-events-none absolute inset-x-[30%] bottom-[22%] h-[251px] rounded-full bg-[radial-gradient(circle,#00000066_0%,transparent_72%)] blur-[35px]" />
            </div>
          </div>
        </div>

        <div className="space-y-12 px-4 pb-[56px] pt-[56px] lg:px-10">
          {blocks.timeline.map((entry) => (
            <div key={entry.marker} className="grid gap-8 border-t border-[var(--border-default)] pt-8 lg:grid-cols-[1fr_1548px]">
              <p className="font-sans text-[14px] font-medium leading-[1.6] tracking-[2px] text-[var(--accent)]">{entry.marker}</p>
              <div className="space-y-5">
                <h4 className="font-sans text-[24px] font-normal leading-[1.3333333333] tracking-[-0.24px] text-[var(--text-strong)]">
                  {entry.title}
                </h4>
                <p className="max-w-[1548px] font-sans text-[16px] font-normal leading-[1.5] text-[var(--text-subtle)]">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
