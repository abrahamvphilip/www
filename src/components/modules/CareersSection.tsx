import { homeCareers } from "@/data/home";

import { ButtonChip } from "@/components/ui/ButtonChip";
import { SectionHeading } from "@/components/ui/SectionHeading";

function OpeningCard({ title, engagement, location }: (typeof homeCareers.openings)[number]) {
  return (
    <article className="flex w-[421px] shrink-0 flex-col gap-4">
      <div className="flex items-center gap-6">
        <h3 className="font-sans text-base font-normal leading-[1.5] text-bunker-800">{title}</h3>
        <span className="h-px w-10 bg-bunker-800" />
        <span aria-hidden className="text-base text-bunker-800">
          ↗
        </span>
      </div>
      <div className="space-y-0">
        <p className="font-sans text-sm font-normal leading-[1.4285714286] text-bunker-550">{engagement}</p>
        <p className="font-sans text-sm font-normal leading-[1.4285714286] text-bunker-550">{location}</p>
      </div>
    </article>
  );
}

export function CareersSection() {
  const careers = homeCareers;

  return (
    <section data-section-id="gwgPH" className="bg-bunker-950">
      <div className="site-shell space-y-[56px] px-4 py-[96px] lg:px-10 lg:pb-[200px] lg:pt-[144px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={careers.header.eyebrow} title={careers.header.title} subtitle={careers.header.subtitle} />

          <ButtonChip href="/careers" label={careers.cta} badge="2" className="w-fit" />
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
