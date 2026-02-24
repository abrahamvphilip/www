import { homeResources } from "@/data/home";

import { ButtonChip } from "@/components/ui/ButtonChip";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ResourceCard({ card, index }: { card: (typeof homeResources.cards)[number]; index: number }) {
  return (
    <article className="flex w-[421px] shrink-0 flex-col gap-0.5 rounded-[8px] bg-gallery-25 p-0.5">
      <PlaceholderMedia label={`resource-card-${index + 1}`} ratio="421 / 252" className="rounded-[6px] bg-bunker-950/4" />
      <div className="space-y-1 px-2 pb-3 pt-2">
        <p className="font-sans text-xs font-normal leading-[1.3333333333] text-bunker-800">{card.readTime}</p>
        <h4 className="font-sans text-base font-medium leading-[1.5] text-bunker-800">{card.category}</h4>
        <p className="font-sans text-sm font-normal leading-[1.4285714286] text-bunker-675/80">{card.excerpt}</p>
      </div>
      <ButtonChip href="/resources/read" label={card.cta} badge="2" variant="dark" className="rounded-[6px]" />
    </article>
  );
}

export function ResourcesSection() {
  const resources = homeResources;

  return (
    <section data-section-id="atC3C" className="overflow-hidden bg-bunker-950 lg:h-[1261px]">
      <div className="site-shell space-y-[56px] px-4 py-[56px] lg:px-10 lg:pb-[144px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={resources.header.eyebrow} title={resources.header.title} subtitle={resources.header.subtitle} />

          <ButtonChip href="/resources" label={resources.cta} badge="2" className="w-fit" />
        </div>

        <div className="grid gap-3 lg:grid-cols-[854px_854px]">
          <PlaceholderMedia label="resource-lead" ratio="854 / 445" className="rounded-[8px] bg-alabaster-50" />

          <article className="flex h-[445px] flex-col justify-between gap-1 bg-alabaster-50 p-2">
            <div className="space-y-5 px-2 pt-3">
              <p className="font-sans text-xs font-normal leading-[1.3333333333] text-bunker-800">{resources.lead.readTime}</p>
              <div className="space-y-1">
                <h3 className="font-sans text-2xl font-medium leading-[1.3333333333] tracking-[-0.24px] text-bunker-800">
                  {resources.lead.category}
                </h3>
                <p className="font-sans text-base font-normal leading-[1.5] text-bunker-675/80">{resources.lead.excerpt}</p>
              </div>
            </div>
            <ButtonChip href="/resources/read" label={resources.lead.cta} badge="2" variant="dark" className="rounded-[6px]" />
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
