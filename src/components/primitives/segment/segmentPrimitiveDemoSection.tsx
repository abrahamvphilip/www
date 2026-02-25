import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";

export function SegmentPrimitiveDemoSection() {
  return (
    <section className="bg-bunker-950">
      <Segment>
        <Container>
          <div className="space-y-3 rounded-[10px] border border-bunker-225/40 bg-bunker-800/20 p-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-bunker-325">Segment Primitive</p>
            <h2 className="font-display text-2xl font-semibold leading-[1.2] text-bunker-800">Token-only vertical rhythm wrapper</h2>
            <p className="max-w-3xl font-sans text-sm leading-[1.5] text-bunker-550">
              Mobile uses <code>--segment-padding-mobile</code>. Tablet-to-page-limit uses token interpolation via <code>--page-limit</code>.
              Large viewports use <code>--segment-padding</code>.
            </p>
          </div>
        </Container>
      </Segment>
    </section>
  );
}
