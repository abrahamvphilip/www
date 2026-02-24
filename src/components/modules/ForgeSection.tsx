import { homeForge } from "@/data/home";

import { Container } from "@/components/primitives/container/Container";
import { Grid } from "@/components/primitives/grid/Grid";
import { Segment } from "@/components/primitives/segment/Segment";
import { ButtonChip } from "@/components/ui/ButtonChip";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ForgeFeatureCard({
  title,
  description,
  dense,
}: {
  title: string;
  description: string;
  dense?: boolean;
}) {
  return (
    <article className="flex h-[526px] w-[772px] flex-col gap-6 p-5">
      <h3 className={`max-w-[473.918px] font-display text-2xl leading-[1.25] text-bunker-800 ${dense ? "font-normal" : "font-light"}`}>
        {title}
      </h3>
      <PlaceholderMedia label={title} ratio="732 / 338" className="bg-alabaster-50" />
      <p className={`font-sans text-bunker-800 ${dense ? "text-xl leading-[1.4] tracking-[-0.2px]" : "text-base leading-[1.5]"}`}>
        {description}
      </p>
    </article>
  );
}

export function ForgeSection() {
  const forge = homeForge;

  return (
    <section data-section-id="jAwkA" className="bg-blue-lagoon-800">
      <Segment>
        <Container>
          <div className="pb-10 pt-20 lg:pb-10 lg:pt-[120px]">
            <div className="flex flex-wrap items-stretch gap-y-10 lg:h-[1014px] lg:gap-y-3">
              <Grid mobile={12} desktop={5}>
                <div className="flex min-h-[854px] flex-col justify-between gap-10">
                  <div className="w-full">
                    <SectionHeading
                      eyebrow={forge.header.eyebrow}
                      title={forge.header.title}
                      subtitle={forge.header.subtitle}
                      description={forge.header.description}
                      className="pt-20"
                      descriptionClassName="text-bunker-675/80"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pb-16">
                    <ButtonChip label={forge.ctas[0]} href="/forge" badge="2" className="w-[170px]" />
                    <div className="flex h-[38px] w-[216px] items-center">
                      <ButtonChip label={forge.ctas[1]} href="/platform" variant="dark" badge="2" className="w-[170px]" />
                      <span className="h-[38px] w-[6px] bg-transparent" />
                      <ButtonChip label="" href="/platform" variant="dark" badge="2" className="w-[40px] px-0" />
                    </div>
                  </div>
                </div>
              </Grid>

              <Grid mobile={12} desktop={7}>
                <div className="relative h-[854px] w-full">
                  <PlaceholderMedia label="forge-diagram" ratio="854 / 854" className="bg-alabaster-25" />
                  <div className="absolute bottom-[307px] left-[376px] w-[122px] rounded-[2px] bg-bunker-800 px-2 py-1 text-alabaster-25">
                    <p className="text-xxs leading-[1.25]">{forge.deckLabels[0]}</p>
                  </div>
                </div>
              </Grid>
            </div>
          </div>
        </Container>

        <Container className="space-y-[56px] overflow-hidden pb-[120px] pt-20 lg:h-[880px]">
          <div className="flex items-center justify-between gap-4">
            <p className="font-display text-3xl font-semibold leading-[1.5] text-bunker-950">
              {"///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"}
            </p>
            <ButtonChip label={forge.dashboardStep} href="/forge/step" variant="dark" badge="2" className="w-[47px] px-3" />
          </div>

          <div className="overflow-hidden">
            <div className="flex w-[3160px] gap-6">
              <ForgeFeatureCard title={forge.featureCards[0].title} description={forge.featureCards[0].description} />
              <ForgeFeatureCard title={forge.featureCards[1].title} description={forge.featureCards[1].description} />
              <ForgeFeatureCard title={forge.featureCards[2].title} description={forge.featureCards[2].description} />
              <ForgeFeatureCard title={forge.featureCards[3].title} description={forge.featureCards[3].description} dense />
            </div>
          </div>
        </Container>
      </Segment>
    </section>
  );
}
