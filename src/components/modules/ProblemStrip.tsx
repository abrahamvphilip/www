import { homeProblemStrip } from "@/data/home";

import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProblemStrip() {
  const problem = homeProblemStrip;

  return (
    <section data-section-id="IYsCw" className="overflow-hidden bg-bunker-950 lg:h-[1093px]">
      <div className="site-shell h-full px-4 pb-20 pt-0 lg:px-10 lg:pb-[120px]">
        <div className="grid gap-8 pb-16 pt-10 lg:grid-cols-[565px_565px] lg:justify-between lg:gap-6 lg:pb-16">
          <div className="w-full max-w-[565px]">
            <SectionHeading eyebrow={problem.eyebrow} title={problem.title} subtitle={problem.subtitle} compact />
          </div>

          <div className="pt-2 lg:pt-10">
            <p className="max-w-[566px] font-sans text-xl font-normal leading-[1.4] tracking-[-0.2px] text-bunker-550">
              {problem.description}
            </p>
          </div>
        </div>

        <div className="grid gap-3 py-0 lg:grid-cols-[minmax(0,1fr)_421px_421px]">
          <PlaceholderMedia label="problem-card-a" ratio="854 / 445" className="rounded-[8px] bg-alabaster-50" />
          <PlaceholderMedia label="problem-card-b" ratio="421 / 445" className="rounded-[8px] bg-alabaster-50" />
          <PlaceholderMedia label="problem-card-c" ratio="421 / 445" className="rounded-[8px] bg-alabaster-50" />
        </div>

        <div className="pb-10 pt-[52px]">
          <p className="max-w-[854px] whitespace-pre-line font-sans text-4xl font-normal leading-[1.1666666667] tracking-[-0.48px] text-alabaster-25 lg:text-5xl">
            {problem.stat}
          </p>
        </div>
      </div>
    </section>
  );
}
