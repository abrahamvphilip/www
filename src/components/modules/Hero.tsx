import { homeHero } from "@/data/home";

export function Hero() {
  const hero = homeHero;

  return (
    <section data-section-id="YHDHg" className="relative overflow-hidden bg-bunker-950">
      <div className="absolute inset-0 checkerboard" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_98%,#000000b5_0%,#00000066_22%,transparent_55%)]" />

      <div className="site-shell relative min-h-[760px] px-4 pb-10 pt-10 md:min-h-[960px] lg:h-[1169px] lg:min-h-0 lg:px-10 lg:pb-10 lg:pt-[76px]">
        <div className="flex h-full flex-col justify-end gap-10 lg:pt-24">
          <div className="w-full space-y-5 lg:max-w-[998px] lg:space-y-5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex h-7 items-center rounded-[9999px] bg-alabaster-25/4 px-3 font-sans text-xs font-medium leading-[1.3333333333] tracking-[0.5px] text-alabaster-25">
                {hero.stats[0].label}
              </div>
              <span aria-hidden className="h-[6px] w-[6px] rounded-full bg-gallery-150" />
              <span className="font-sans text-xs font-medium leading-[1.3333333333] tracking-[0.5px] text-alabaster-25">
                {hero.stats[1].label}
              </span>
            </div>

            <div className="space-y-0 pt-11">
              <h1 className="font-display text-4xl font-light leading-[1.1333333333] tracking-[-0.6px] text-alabaster-25 md:text-5xl lg:text-6xl">
                {hero.heading}
              </h1>
              <p className="font-display text-4xl font-light leading-[1.1333333333] tracking-[-0.6px] text-alabaster-150 md:text-5xl lg:text-6xl">
                {hero.subheading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
