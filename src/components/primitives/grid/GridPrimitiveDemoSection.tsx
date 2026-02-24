import { Container } from "@/components/primitives/container/Container";
import { Grid } from "@/components/primitives/grid/Grid";
import { Segment } from "@/components/primitives/segment/Segment";

function DemoTile({
  title,
  detail,
  className,
}: {
  title: string;
  detail: string;
  className?: string;
}) {
  return (
    <article className={`h-full min-h-32 rounded-[10px] border border-bunker-100/70 bg-alabaster-25 p-4 ${className ?? ""}`}>
      <p className="font-sans text-sm font-medium uppercase tracking-[0.08em] text-bunker-550">{title}</p>
      <p className="mt-3 font-sans text-base leading-[1.4] text-bunker-800">{detail}</p>
    </article>
  );
}

export function GridPrimitiveDemoSection() {
  return (
    <section className="bg-gallery-25">
      <Segment>
        <Container>
          <div className="space-y-8">
            <header className="space-y-3 border-b border-bunker-100/70 pb-4">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-bunker-425">Grid Primitive Demo</p>
              <h2 className="font-display text-3xl font-semibold leading-[1.2] text-bunker-800 lg:text-4xl">
                Minimal responsive span primitive
              </h2>
              <p className="max-w-3xl font-sans text-base leading-[1.5] text-bunker-550">
                <code>Grid</code> only sets width span per breakpoint against <code>--grid-column-count</code>. Place Grid items inside a flex row.
              </p>
            </header>

            <div className="space-y-3 rounded-[10px] border border-havelock-blue-150/70 bg-havelock-blue-25/45 p-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-havelock-blue-550">LTR row | mobile=12 tablet=6 desktop=4</p>
              <div className="flex flex-wrap">
                <Grid mobile={12} tablet={6} desktop={4} direction="ltr">
                  <DemoTile title="A" detail="Spans 4 columns at desktop." />
                </Grid>
                <Grid mobile={12} tablet={6} desktop={4} direction="ltr">
                  <DemoTile title="B" detail="Spans 6 columns at tablet." />
                </Grid>
                <Grid mobile={12} tablet={6} desktop={4} direction="ltr">
                  <DemoTile title="C" detail="Spans full width on mobile." />
                </Grid>
              </div>
            </div>

            <div className="space-y-3 rounded-[10px] border border-eucalyptus-150/70 bg-eucalyptus-25/40 p-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-eucalyptus-550">RTL row | same spans</p>
              <div dir="rtl" className="flex flex-wrap">
                <Grid mobile={12} tablet={6} desktop={4} direction="rtl">
                  <DemoTile title="One" detail="RTL content direction enabled." className="bg-eucalyptus-25/55" />
                </Grid>
                <Grid mobile={12} tablet={6} desktop={4} direction="rtl">
                  <DemoTile title="Two" detail="Width math still token-driven." className="bg-havelock-blue-25/55" />
                </Grid>
                <Grid mobile={12} tablet={6} desktop={4} direction="rtl">
                  <DemoTile title="Three" detail="No extra container/item API required." className="bg-anzac-25/55" />
                </Grid>
              </div>
            </div>

            <div className="rounded-[10px] border border-bunker-100/70 bg-alabaster-25 p-5">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-bunker-425">Usage</p>
              <pre className="mt-3 overflow-x-auto whitespace-pre font-mono text-xs leading-[1.6] text-bunker-675">{`<div className="flex flex-wrap">
  <Grid mobile={12} tablet={6} desktop={4} direction="ltr">
    ...
  </Grid>
</div>`}</pre>
            </div>
          </div>
        </Container>
      </Segment>
    </section>
  );
}
