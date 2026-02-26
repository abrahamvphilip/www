import { homeNav } from "@/data/home";
import { Container } from "@/components/primitives/container/container";
import { BrandMark } from "@/components/ui/brandMark";
import { ButtonChip } from "@/components/ui/buttonChip";

export function Navbar() {
	const nav = homeNav;

	return (
		<header
			data-section-id="KKTuv"
			className="sticky top-0 z-50 w-full bg-bunker-950"
		>
			<Container>
				<div className="flex items-center justify-between py-4">
					<BrandMark inverse className="h-6" />
					<ButtonChip
						href="/waitlist"
						label={nav.cta}
						variant="light"
						size="md"
						className="max-tablet:h-[38px] max-tablet:px-3 max-tablet:text-sm"
					/>
				</div>
			</Container>
		</header>
	);
}
