import type { SiteContent } from "@/types/site";

interface HeroProps {
  hero: SiteContent["hero"];
}

export function Hero({ hero }: HeroProps) {
  return (
    <section data-section-id="YHDHg" className="relative overflow-hidden bg-[var(--surface-dark)]">
      <div className="absolute inset-0 checkerboard" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_98%,#000000b5_0%,#00000066_22%,transparent_55%)]" />

      <div className="site-shell relative min-h-[760px] px-4 pb-10 pt-10 md:min-h-[960px] lg:h-[1169px] lg:min-h-0 lg:px-10 lg:pb-10 lg:pt-[76px]">
        <div className="flex h-full flex-col justify-end gap-10 lg:pt-24">
          <div className="w-full space-y-5 lg:max-w-[998px] lg:space-y-5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex h-7 items-center rounded-[9999px] border border-[#e2e1df] bg-[#ffffff0a] px-3 font-sans text-[12px] font-medium leading-[1.3333333333] tracking-[0.5px] text-[var(--text-light)]">
                {hero.stats[0].label}
              </div>
              <span aria-hidden className="h-[6px] w-[6px] rounded-full bg-[#e2e1df]" />
              <span className="font-sans text-[12px] font-medium leading-[1.3333333333] tracking-[0.5px] text-[var(--text-light)]">
                {hero.stats[1].label}
              </span>
            </div>

            <div className="space-y-0 pt-11">
              <h1 className="font-display text-[42px] font-light leading-[1.1333333333] tracking-[-0.6px] text-[var(--text-light)] md:text-[52px] lg:text-[60px]">
                {hero.heading}
              </h1>
              <p className="font-display text-[42px] font-light leading-[1.1333333333] tracking-[-0.6px] text-[var(--text-light-soft)] md:text-[52px] lg:text-[60px]">
                {hero.subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
