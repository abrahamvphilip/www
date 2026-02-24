import { homeIntroStrip } from "@/data/home";
import { Container } from "@/components/primitives/container/Container";
import { Segment } from "@/components/primitives/segment/Segment";

export function IntroStrip() {
  const { copy } = homeIntroStrip;

  return (
    <section data-section-id="D2Lup" className="bg-bunker-950">
      <Segment>
        <Container className="lg:h-[624px]">
          <div className="mx-auto w-full max-w-[1222px] px-0 lg:px-[289px]">
            <p className="whitespace-pre-line text-center font-sans text-4xl font-normal leading-[1.1111111111] tracking-[-0.36px] text-bunker-800">
              {copy}
            </p>
          </div>
        </Container>
      </Segment>
    </section>
  );
}
