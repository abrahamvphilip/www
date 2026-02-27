import { BuildingBlocks } from "@/components/modules/buildingBlocks";
import { Careers } from "@/components/modules/careers";
import { PageCta } from "@/components/modules/pageCta";
import { Faq } from "@/components/modules/faq";
import { Footer } from "@/components/modules/footer";
import { Forge } from "@/components/modules/forge";
import { ForgeFeatures } from "@/components/modules/forgeFeatures";
import { Hero } from "@/components/modules/hero";
import { IntroStrip } from "@/components/modules/introStrip";
import { Navbar } from "@/components/modules/navbar";
import { Nexus } from "@/components/modules/nexus";
import { NexusFeatures } from "@/components/modules/nexusFeatures";
import { ProblemStrip } from "@/components/modules/problemStrip";
import { Blogs } from "@/components/modules/blogs";
import { PageLoader } from "@/components/ui/pageLoader";

export default function Home() {
	return (
		<PageLoader duration={4000}>
			<main
				id="main-content"
				className="min-h-screen bg-alabaster-25 text-bunker-800"
			>
				<Navbar />
				<Hero />
				<IntroStrip />
				<ProblemStrip />
				<Forge />
				<ForgeFeatures />
				<Nexus />
				<NexusFeatures />
				<BuildingBlocks />
				{/* <Careers /> */}
				{/* <Blogs /> */}
				<Faq />
				<PageCta />
				<Footer />
			</main>
		</PageLoader>
	);
}
