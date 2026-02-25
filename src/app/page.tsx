import { BuildingBlocksSection } from "@/components/modules/buildingBlocksSection";
import { CareersSection } from "@/components/modules/careersSection";
import { CtaSection } from "@/components/modules/ctaSection";
import { FaqSection } from "@/components/modules/faqSection";
import { Footer } from "@/components/modules/footer";
import { Forge } from "@/components/modules/forge";
import { Hero } from "@/components/modules/hero";
import { IntroStrip } from "@/components/modules/introStrip";
import { Navbar } from "@/components/modules/navbar";
import { NexusSection } from "@/components/modules/nexusSection";
import { ProblemStrip } from "@/components/modules/problemStrip";
import { ResourcesSection } from "@/components/modules/resourcesSection";

export default function Home() {
	return (
		<main
			id="main-content"
			className="min-h-screen bg-alabaster-25 text-bunker-800"
		>
			<Navbar />
			<Hero />
			<IntroStrip />
			<ProblemStrip />
			<Forge />
			<NexusSection />
			<BuildingBlocksSection />
			<CareersSection />
			<ResourcesSection />
			<FaqSection />
			<CtaSection />
			<Footer />
		</main>
	);
}
