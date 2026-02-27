import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowRight02Icon,
	BezierCurve01Icon,
	ChartHistogramIcon,
	SquareAndCircleIcon,
} from "@hugeicons-pro/core-twotone-rounded";

import { homeCareers } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";
import { RevealGroup } from "@/components/ui/reveal/revealGroup";
import { RevealText } from "@/components/ui/reveal/revealText";

const ICON_MAP = {
	bezier: BezierCurve01Icon,
	data: ChartHistogramIcon,
	shapes: SquareAndCircleIcon,
} as const;

function OpeningCard({
	title,
	engagement,
	location,
	icon,
}: (typeof homeCareers.openings)[number]) {
	const IconComponent = ICON_MAP[icon];

	return (
		<article className="flex w-full max-w-[421px] shrink-0 flex-col gap-4 max-tablet:max-w-full">
			<div className="flex items-center gap-6">
				<h3 className="font-sans text-(length:--text-base-16px) font-normal leading-6 text-(--bunker-800)">
					{title}
				</h3>
				<span className="h-px w-10 bg-(--bunker-150)" />
				<span className="text-(--bunker-800)">
					<HugeiconsIcon icon={IconComponent} size={20} />
				</span>
			</div>
			<div className="flex flex-col">
				<p className="font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-550)">
					{engagement}
				</p>
				<p className="font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--bunker-550)">
					{location}
				</p>
			</div>
		</article>
	);
}

export function Careers() {
	const careers = homeCareers;

	return (
		<Segment className="pt-[144px]! pb-[200px]! max-tablet:pt-16! max-tablet:pb-16!">
			<Container
				as="div"
				className="flex flex-col gap-14 px-10! max-tablet:gap-8 max-tablet:px-4!"
			>
				<div className="flex items-end gap-3 max-tablet:flex-col max-tablet:items-start">
					<RevealGroup className="flex w-full max-w-[565px] shrink-0 flex-col gap-3 max-tablet:shrink max-tablet:max-w-full">
						<div className="flex h-7 items-center">
							<RevealText
								as="p"
								phase="eyebrow"
								split="none"
								className="font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)"
							>
								{careers.header.eyebrow}
							</RevealText>
						</div>
						<div className="font-display text-(length:--text-4xl-36px) font-light leading-10 tracking-[-0.36px] max-tablet:leading-8">
							<RevealText
								as="p"
								phase="heading"
								split="words"
								className="text-(--bunker-800)"
							>
								{careers.header.title}
							</RevealText>
							<RevealText
								as="p"
								phase="subheading"
								split="words"
								className="text-(--bunker-325)"
							>
								{careers.header.subtitle}
							</RevealText>
						</div>
					</RevealGroup>

					<div className="flex flex-1 items-start justify-end pt-3 max-tablet:justify-start">
						<a
							href="/careers"
							className="inline-flex items-center gap-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--bunker-800)"
						>
							<span>{careers.cta}</span>
							<HugeiconsIcon icon={ArrowRight02Icon} size={20} />
						</a>
					</div>
				</div>

				<div className="flex flex-wrap gap-x-3 gap-y-16 max-tablet:flex-col max-tablet:gap-y-10">
					{careers.openings.map((opening, index) => (
						<OpeningCard
							key={`${opening.title}-${index}`}
							title={opening.title}
							engagement={opening.engagement}
							location={opening.location}
							icon={opening.icon}
						/>
					))}
				</div>
			</Container>
		</Segment>
	);
}
