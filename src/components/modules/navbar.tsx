import Link from "next/link";

import { homeNav } from "@/data/home";
import { Container } from "@/components/primitives/container/container";
import { AionLogo } from "@/components/ui/aionLogo";

export function Navbar() {
	const { cta } = homeNav;

	return (
		<header
			data-section-id="924:24295"
			className="fixed top-0 left-0 z-50 w-full bg-white"
		>
			<Container>
				<div className="flex items-center justify-between py-4">
					<div className="w-[400px] max-desktop:w-auto">
						<Link href="/" aria-label="aion home" className="inline-flex items-center">
							<AionLogo
								width={66}
								height={24}
								className="h-6 w-[66px]"
							/>
						</Link>
					</div>

					<div className="flex w-[400px] items-center justify-end max-desktop:w-auto">
						<Link
							href="/waitlist"
							className="inline-flex h-[44px] w-[200px] items-center justify-center bg-[#18181b] px-4 py-[10px] font-sans text-[length:var(--text-base-16px)] font-medium leading-6 text-white no-underline"
						>
							{cta}
						</Link>
					</div>
				</div>
			</Container>
		</header>
	);
}
