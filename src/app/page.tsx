import { BuildingBlocksSection } from "@/components/modules/buildingBlocksSection";
import { Careers } from "@/components/modules/careers";
import { PageCta } from "@/components/modules/pageCta";
import { Faq } from "@/components/modules/faq";
import { Footer } from "@/components/modules/footer";
import { Forge } from "@/components/modules/forge";
import { Hero } from "@/components/modules/hero";
import { IntroStrip } from "@/components/modules/introStrip";
import { Navbar } from "@/components/modules/navbar";
import { Nexus } from "@/components/modules/nexus";
import { ProblemStrip } from "@/components/modules/problemStrip";
import { Blogs } from "@/components/modules/blogs";

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
			<Nexus />
			<BuildingBlocksSection />
			{/* <Careers /> */}
			{/* <Blogs /> */}
			<Faq />
			<PageCta />
			<Footer />
		</main>
	);
}
