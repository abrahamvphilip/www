import { BuildingBlocksSection } from "@/components/site/BuildingBlocksSection";
import { CareersSection } from "@/components/site/CareersSection";
import { CtaSection } from "@/components/site/CtaSection";
import { FaqSection } from "@/components/site/FaqSection";
import { Footer } from "@/components/site/Footer";
import { ForgeSection } from "@/components/site/ForgeSection";
import { Hero } from "@/components/site/Hero";
import { IntroStrip } from "@/components/site/IntroStrip";
import { Navbar } from "@/components/site/Navbar";
import { NexusSection } from "@/components/site/NexusSection";
import { ProblemStrip } from "@/components/site/ProblemStrip";
import { ResourcesSection } from "@/components/site/ResourcesSection";
import { SITE_CONTENT } from "@/content/site-content";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#ffffff] text-[#18181b]">
      <Navbar nav={SITE_CONTENT.nav} />
      <Hero hero={SITE_CONTENT.hero} />
      <IntroStrip copy={SITE_CONTENT.introStrip.copy} />
      <ProblemStrip problem={SITE_CONTENT.problemStrip} />
      <ForgeSection forge={SITE_CONTENT.forge} />
      <NexusSection nexus={SITE_CONTENT.nexus} />
      <BuildingBlocksSection blocks={SITE_CONTENT.buildingBlocks} />
      <CareersSection careers={SITE_CONTENT.careers} />
      <ResourcesSection resources={SITE_CONTENT.resources} />
      <FaqSection faq={SITE_CONTENT.faq} />
      <CtaSection cta={SITE_CONTENT.cta} />
      <Footer footer={SITE_CONTENT.footer} />
    </main>
  );
}
