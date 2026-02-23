interface IntroStripProps {
  copy: string;
}

export function IntroStrip({ copy }: IntroStripProps) {
  return (
    <section data-section-id="D2Lup" className="bg-[var(--surface-dark)]">
      <div className="site-shell px-4 py-16 lg:h-[624px] lg:px-10 lg:pb-[144px] lg:pt-[120px]">
        <div className="mx-auto w-full max-w-[1222px] px-0 lg:px-[289px]">
          <p className="whitespace-pre-line text-center font-sans text-[28px] font-normal leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-strong)] lg:text-[36px]">
            {copy}
          </p>
        </div>
      </div>
    </section>
  );
}
