import type { SiteContent } from "@/types/site";

import { Grid } from "@/components/primitives/Grid";
import { PlaceholderMedia } from "@/components/primitives/PlaceholderMedia";

interface ProblemStripProps {
  problem: SiteContent["problemStrip"];
}

export function ProblemStrip({ problem }: ProblemStripProps) {
  return (
    <section data-section-id="IYsCw" className="overflow-hidden bg-[var(--surface-dark)] lg:h-[1093px]">
      <div className="site-shell h-full px-4 pb-20 pt-0 lg:px-10 lg:pb-[120px]">
        <div className="grid gap-8 pb-16 pt-10 lg:grid-cols-[565px_565px] lg:justify-between lg:gap-6 lg:pb-16">
          <div className="w-full max-w-[565px] space-y-3">
            <p className="font-sans text-[12px] font-medium leading-[1.3333333333] tracking-[0.5px] text-[var(--text-subtle)]">
              {problem.eyebrow}
            </p>
            <h2 className="font-display text-[30px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-strong)] lg:text-[36px]">
              {problem.title}
            </h2>
            <p className="font-display text-[30px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-muted)] lg:text-[36px]">
              {problem.subtitle}
            </p>
          </div>

          <div className="pt-2 lg:pt-10">
            <p className="max-w-[566px] font-sans text-[20px] font-normal leading-[1.4] tracking-[-0.2px] text-[#635e5e]">
              {problem.description}
            </p>
          </div>
        </div>

        <Grid mode="container" className="w-full py-0" gapY={{ mobile: 12 }}>
          <Grid mode="item" span={{ mobile: 12, tablet: 12, desktop: 6 }}>
            <PlaceholderMedia label="problem-card-a" ratio="854 / 445" className="rounded-[8px] bg-[var(--surface-card)]" />
          </Grid>
          <Grid mode="item" span={{ mobile: 12, tablet: 6, desktop: 3 }}>
            <PlaceholderMedia label="problem-card-b" ratio="421 / 445" className="rounded-[8px] bg-[var(--surface-card)]" />
          </Grid>
          <Grid mode="item" span={{ mobile: 12, tablet: 6, desktop: 3 }}>
            <PlaceholderMedia label="problem-card-c" ratio="421 / 445" className="rounded-[8px] bg-[var(--surface-card)]" />
          </Grid>
        </Grid>

        <div className="pb-10 pt-[52px]">
          <p className="max-w-[854px] whitespace-pre-line font-sans text-[36px] font-normal leading-[1.1666666667] tracking-[-0.48px] text-[var(--text-light)] lg:text-[48px]">
            {problem.stat}
          </p>
        </div>
      </div>
    </section>
  );
}
