import { homeIntroStrip } from "@/data/home";

export function IntroStrip() {
  const { copy } = homeIntroStrip;

  return (
    <section data-section-id="D2Lup" className="bg-bunker-950">
      <div className="site-shell px-4 py-16 lg:h-[624px] lg:px-10 lg:pb-[144px] lg:pt-[120px]">
        <div className="mx-auto w-full max-w-[1222px] px-0 lg:px-[289px]">
          <p className="whitespace-pre-line text-center font-sans text-3xl font-normal leading-[1.1111111111] tracking-[-0.36px] text-bunker-800 lg:text-4xl">
            {copy}
          </p>
        </div>
      </div>
    </section>
  );
}
