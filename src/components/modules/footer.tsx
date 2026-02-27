import Link from "next/link";

import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowRight02Icon,
	Github01Icon,
	InstagramIcon,
	NewTwitterIcon,
} from "@hugeicons-pro/core-twotone-rounded";

import { homeFooter } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";
import { RevealImage } from "@/components/ui/reveal/revealImage";

import aionFooterImage from "@/../public/aionFooterImage.png";

import { AionLogo } from "@/components/ui/aionLogo";

function FooterLinkGroup({
	group,
}: {
	group: (typeof homeFooter.groups)[number];
}) {
	return (
		<div className="flex flex-col gap-3">
			<div className="pb-3">
				<p className="font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-225)">
					{group.title}
				</p>
			</div>
			{group.links.map((link) => (
				<Link
					key={`${group.title}-${link}`}
					href="/legal"
					className="font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-550)"
				>
					{link}
				</Link>
			))}
		</div>
	);
}

const POLICY_ROUTES: Record<string, string> = {
	"Privacy Policy": "/privacy",
	"Terms of Service": "/tos",
	"Cookie Policy": "/cookie",
};

function policyLinkHref(label: string): string {
	return POLICY_ROUTES[label] ?? "#";
}

export function Footer() {
	const footer = homeFooter;

	return (
		<footer className="relative overflow-hidden">
			<Segment className="pb-0!">
				<Container
					as="div"
					className="relative z-10 flex flex-col gap-14 px-10! pt-[144px]! max-tablet:gap-10 max-tablet:px-4! max-tablet:pt-16!"
				>
					{/* Top row */}
					<div className="flex items-start justify-between max-tablet:flex-col max-tablet:gap-10">
						{/* Left column */}
						<div className="flex w-full max-w-[421px] flex-col gap-10 max-tablet:max-w-full">
							<p className="font-sans text-(length:--text-3xl-30px) font-normal leading-9 tracking-[-0.3px] text-(--bunker-800)">
								{footer.title}
							</p>

							<Link
								href="/waitlist"
								className="inline-flex items-center gap-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--bunker-800)"
							>
								<span>{footer.cta}</span>
								<HugeiconsIcon icon={ArrowRight02Icon} size={20} />
							</Link>

							<div className="flex items-center gap-10 pt-5 text-(--bunker-550)">
								<Link href="#" aria-label="Instagram">
									<HugeiconsIcon icon={InstagramIcon} size={20} />
								</Link>
								<Link href="#" aria-label="Twitter">
									<HugeiconsIcon icon={NewTwitterIcon} size={20} />
								</Link>
								<Link href="#" aria-label="GitHub">
									<HugeiconsIcon icon={Github01Icon} size={20} />
								</Link>
							</div>
						</div>

						{/* Right column */}
						<div className="flex w-full max-w-[421px] justify-end gap-5 max-tablet:max-w-full max-tablet:justify-start">
							{footer.groups.slice(0, 1).map((group) => (
								<FooterLinkGroup key={group.title} group={group} />
							))}
						</div>
					</div>

					{/* Compliance badges - placeholder for GDPR, SOC 2, HIPAA badges
					<div className="flex flex-col items-center overflow-hidden rounded-[12px] px-5">
						<div className="flex items-center gap-[54px] overflow-hidden py-[25px] max-tablet:gap-6">
							<div className="size-20 rounded-[12px] bg-(--gallery-100) max-tablet:size-16">
								<Image src={gdprBadge} alt="GDPR" fill className="object-cover rounded-[12px]" />
							</div>
							<div className="size-20 rounded-[12px] bg-(--gallery-100) max-tablet:size-16">
								<Image src={soc2Badge} alt="SOC 2" fill className="object-cover rounded-[12px]" />
							</div>
							<div className="size-20 rounded-[12px] bg-(--gallery-100) max-tablet:size-16">
								<Image src={hipaaBadge} alt="HIPAA" fill className="object-cover rounded-[12px]" />
							</div>
						</div>
					</div>
					*/}

					{/* Bottom bar */}
					<div className="flex items-center justify-between border-t border-(--bunker-800)/14 pt-8 max-tablet:flex-col max-tablet:gap-6 max-tablet:items-start">
						<p className="w-full max-w-[400px] font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-325) max-tablet:max-w-full">
							{footer.legal}
						</p>

						<AionLogo
							width={80}
							height={24}
							className="max-tablet:mx-0"
						/>

						<div className="flex w-full max-w-[400px] items-center justify-end gap-10 max-tablet:max-w-full max-tablet:justify-start max-tablet:flex-wrap max-tablet:gap-6">
							{footer.policyLinks.map((link) => (
								<Link
									key={link}
									href={policyLinkHref(link)}
									className="font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-325)"
								>
									{link}
								</Link>
							))}
						</div>
					</div>
				</Container>
			</Segment>

			{/* Footer image - top half only, flush to bottom edge */}
			<Container className="px-10 max-tablet:px-4">
				<Grid mobile={12} tablet={12} desktop={12}>
					<div
						className="pointer-events-none relative w-full overflow-hidden"
						style={{ height: "clamp(150px, 25vw, 400px)" }}
					>
						<RevealImage
							src={aionFooterImage}
							alt="aion - The AI Infrastructure Research Lab - Stop waiting, start building"
							fill
							sizes="100vw"
							wrapperClassName="absolute inset-x-0 top-0 w-full"
							wrapperStyle={{
								position: "absolute",
								height: "200%",
							}}
							imageClassName="object-cover object-top"
							duration={500}
							startScale={1.5}
						/>
					</div>
				</Grid>
			</Container>
		</footer>
	);
}
