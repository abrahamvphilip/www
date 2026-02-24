import { BuildingBlocksSection } from "@/components/modules/BuildingBlocksSection";
import { CareersSection } from "@/components/modules/CareersSection";
import { CtaSection } from "@/components/modules/CtaSection";
import { FaqSection } from "@/components/modules/FaqSection";
import { Footer } from "@/components/modules/Footer";
import { Forge } from "@/components/modules/forge";
import { Hero } from "@/components/modules/Hero";
import { IntroStrip } from "@/components/modules/IntroStrip";
import { Navbar } from "@/components/modules/Navbar";
import { NexusSection } from "@/components/modules/NexusSection";
import { ProblemStrip } from "@/components/modules/ProblemStrip";
import { ResourcesSection } from "@/components/modules/ResourcesSection";

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
