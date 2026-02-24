import { Container } from "@/components/primitives/container/Container";
import { Segment } from "@/components/primitives/segment/Segment";

export function ContainerPrimitiveDemoSection() {
  return (
    <section className="bg-gallery-25">
      <Segment>
        <Container>
          <div className="space-y-4 rounded-[10px] border border-bunker-225 bg-alabaster-25 p-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-bunker-425">Container Primitive</p>
            <h2 className="font-display text-2xl font-semibold leading-[1.2] text-bunker-800">Token-driven width and gutter wrapper</h2>
            <p className="max-w-3xl font-sans text-sm leading-[1.5] text-bunker-550">
              Uses only tokens from <code>tokens.css</code>: <code>--page-width</code> and current <code>--container-gutter-*</code>.
            </p>
          </div>
        </Container>
      </Segment>
    </section>
  );
}
