import { homeNexus } from "@/data/home";

import { ButtonChip } from "@/components/ui/ButtonChip";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { SectionHeading } from "@/components/ui/SectionHeading";

function NexusFeatureCard({
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

export function NexusSection() {
  const nexus = homeNexus;

  return (
    <section data-section-id="X6Q8j" className="overflow-hidden bg-chateau-green-800 lg:h-[1974px]">
      <div className="site-shell">
        <div className="grid gap-10 px-4 pb-10 pt-20 lg:h-[1014px] lg:grid-cols-[854px_854px] lg:justify-between lg:gap-3 lg:px-10 lg:pb-10 lg:pt-[120px]">
          <div className="relative h-[854px] w-full">
            <PlaceholderMedia label="nexus-diagram" ratio="854 / 854" className="bg-alabaster-25" />
            <div className="absolute left-[194px] top-[328px] w-[113px] rounded-[2px] bg-alabaster-25 px-2 py-1 text-bunker-800">
              <p className="text-xxs leading-[1.3]">{nexus.stackLabels[0]}</p>
            </div>
            <div className="absolute left-[216px] top-[151px] w-[136px] rounded-[2px] bg-alabaster-25 px-2 py-1 text-bunker-800">
              <p className="text-xxs leading-[1.3]">{nexus.stackLabels[1]}</p>
            </div>
          </div>

          <div className="flex min-h-[854px] flex-col justify-between gap-10">
            <div className="w-full">
              <SectionHeading
                eyebrow={nexus.header.eyebrow}
                title={nexus.header.title}
                subtitle={nexus.header.subtitle}
                description={nexus.header.description}
                className="pt-20"
                descriptionClassName="text-bunker-675/80"
              />
            </div>

            <div className="flex flex-wrap items-center gap-6 pb-16">
              <ButtonChip label={nexus.ctas[0]} href="/nexus" badge="2" className="w-[170px]" />
              <div className="flex h-[38px] w-[216px] items-center">
                <ButtonChip label={nexus.ctas[1]} href="/platform" variant="dark" badge="2" className="w-[170px]" />
                <span className="h-[38px] w-[6px] bg-transparent" />
                <ButtonChip label="" href="/platform" variant="dark" badge="2" className="w-[40px] px-0" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-[56px] overflow-hidden px-4 pb-[200px] pt-0 lg:h-[960px] lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <p className="font-display text-3xl font-semibold leading-[1.5] text-bunker-950">
              {"///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////"}
            </p>
            <ButtonChip label="1/4" href="/nexus/step" variant="dark" badge="2" className="w-[47px] px-3" />
          </div>

          <div className="overflow-hidden">
            <div className="flex w-[3160px] gap-6">
              <NexusFeatureCard title={nexus.featureCards[0].title} description={nexus.featureCards[0].description} />
              <NexusFeatureCard title={nexus.featureCards[1].title} description={nexus.featureCards[1].description} />
              <NexusFeatureCard title={nexus.featureCards[2].title} description={nexus.featureCards[2].description} />
              <NexusFeatureCard title={nexus.featureCards[3].title} description={nexus.featureCards[3].description} dense />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
