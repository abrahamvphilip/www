import { homeCta } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";
import { ButtonChip } from "@/components/ui/buttonChip";

export function CtaSection() {
  const cta = homeCta;

  return (
    <section data-section-id="QEonC" className="bg-bunker-950">
      <Segment>
        <Container className="flex min-h-[700px] items-center justify-center lg:h-[900px] lg:min-h-0">
        <div className="flex w-full max-w-[854px] flex-col items-center gap-5 py-10 text-center lg:py-16">
          <p className="font-sans text-xs font-medium leading-[1.3333333333] tracking-[0.5px] text-bunker-550">{cta.header.eyebrow}</p>
          <h2 className="whitespace-pre-line font-sans text-4xl font-normal leading-[1.1111111111] tracking-[-0.36px] text-alabaster-25">
            {cta.header.title}
          </h2>
          <p className="max-w-[560px] font-sans text-base font-normal leading-[1.5] text-alabaster-25">{cta.body}</p>

          <div className="flex w-full max-w-[566px] flex-col gap-2 pt-3 sm:flex-row">
            <ButtonChip href="/console" label={cta.buttons[0]} badge="2" variant="accent" className="flex-1" />
            <ButtonChip href="/contact" label={cta.buttons[1]} badge="2" variant="light" className="flex-1" />
          </div>
        </div>
        </Container>
      </Segment>
    </section>
  );
}
