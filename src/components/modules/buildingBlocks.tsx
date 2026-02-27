import { homeBuildingBlocks } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";
import { RevealImage } from "@/components/ui/reveal/revealImage";

import buildingBlockVisual from "@/../public/buildingBlock.png";

interface BuildingBlockCalloutProps {
	title: string;
	description: string;
	className?: string;
	position?: "left" | "right";
}

/**
 * Mathematical block positions calculated from image analysis:
 * - Green (Compute): center at 14%
 * - Purple (Orchestration): center at 34%
 * - Yellow (Infrastructure): center at 47%
 * - Blue (Circuit): center at 61%
 * - Teal (Aion): center at 81%
 *
 * Callout mapping:
 * - Accessible Compute → Green (14%)
 * - Adaptive Workloads → Purple (34%)
 * - Abstracted Infrastructure → Yellow (47%)
 * - Accelerated Research → Teal (81%)
 */
const BLOCK_POSITIONS = {
	green: 14,
	purple: 34,
	yellow: 47,
	blue: 61,
	teal: 81,
} as const;

const CALLOUT_VERTICAL_OFFSET = 2; // Fine-tune vertical centering

function BuildingBlockCallout({
	title,
	description,
	className = "",
	position = "left",
}: BuildingBlockCalloutProps) {
	return (
		<div
			className={`flex w-full max-w-[279px] flex-col gap-2 font-sans ${
				position === "right" ? "text-right" : "text-left"
			} ${className}`}
		>
			<p className="text-(length:--text-base-16px) font-medium leading-6 text-(--bunker-800)">
				{title}
			</p>
			<p className="text-[12px] leading-4 text-(--bunker-550)">{description}</p>
		</div>
	);
}

export function BuildingBlocks() {
	const blocks = homeBuildingBlocks;

	return (
		<section data-section-id="924:24337" className="bg-(--gallery-25)">
			<Segment className="">
				{/* Header */}
				<Container as="div" className="px-10 max-tablet:px-4">
					<div className="flex items-start justify-between pb-16 pt-10 max-tablet:flex-col max-tablet:gap-6 max-tablet:pb-10 max-tablet:pt-6">
						<Grid mobile={12} tablet={12} desktop={6}>
							<div className="flex w-full max-w-[565px] flex-col gap-3 max-tablet:max-w-full">
								<div className="flex h-7 items-center">
									<p className="font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)">
										{blocks.header.eyebrow}
									</p>
								</div>
								<div
									className="font-display text-(length:--text-4xl-36px) font-light leading-10 tracking-[-0.36px] max-tablet:leading-[1.1]"
									style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
								>
									<p className="text-(--bunker-800)">{blocks.header.title}</p>
									<p className="text-(--bunker-325)">
										{blocks.header.subtitle}
									</p>
								</div>
							</div>
						</Grid>

						<Grid
							mobile={12}
							tablet={12}
							desktop={5}
							className="flex items-end desktop:justify-end"
						>
							<p className="max-w-[566px] pt-10 font-sans text-(length:--text-xl-20px) leading-7 tracking-[-0.2px] text-(--gallery-550) max-tablet:pt-0">
								{blocks.header.description}
							</p>
						</Grid>
					</div>
				</Container>

				{/* Diagram section - Desktop */}
				<Container className="max-tablet:hidden">
					<div
						className="relative mx-auto w-full max-w-(--page-width)"
						style={{ minHeight: "900px" }}
					>
						{/* Center image - 40% width for better callout proximity */}
						<div className="absolute left-1/2 top-0 h-full w-[40%] -translate-x-1/2">
							<RevealImage
								src={buildingBlockVisual}
								alt="AI Infrastructure Building Blocks"
								fill
								wrapperClassName="h-full w-full"
								imageClassName="object-contain object-top"
								priority
								duration={500}
								startScale={1.5}
							/>
						</div>

						{/* Callout 1: Accessible Compute - GREEN block (top) */}
						<div
							className="absolute w-[25%] -translate-y-1/2"
							style={{
								left: "5%",
								top: `${BLOCK_POSITIONS.green + CALLOUT_VERTICAL_OFFSET}%`,
							}}
						>
							<BuildingBlockCallout
								title={blocks.cards[0].title}
								description={blocks.cards[0].description}
								position="left"
							/>
						</div>

						{/* Callout 2: Adaptive Workloads - PURPLE block */}
						<div
							className="absolute w-[25%] -translate-y-1/2"
							style={{
								right: "5%",
								top: `${BLOCK_POSITIONS.purple + CALLOUT_VERTICAL_OFFSET}%`,
							}}
						>
							<BuildingBlockCallout
								title={blocks.cards[2].title}
								description={blocks.cards[2].description}
								position="right"
							/>
						</div>

						{/* Callout 3: Abstracted Infrastructure - YELLOW block */}
						<div
							className="absolute w-[25%] -translate-y-1/2"
							style={{
								left: "5%",
								top: `${BLOCK_POSITIONS.yellow + CALLOUT_VERTICAL_OFFSET}%`,
							}}
						>
							<BuildingBlockCallout
								title={blocks.cards[1].title}
								description={blocks.cards[1].description}
								position="left"
							/>
						</div>

						{/* Callout 4: Accelerated Research - TEAL/aion block (bottom) */}
						<div
							className="absolute w-[25%] -translate-y-1/2"
							style={{
								right: "5%",
								top: `${BLOCK_POSITIONS.teal + CALLOUT_VERTICAL_OFFSET}%`,
							}}
						>
							<BuildingBlockCallout
								title={blocks.cards[3].title}
								description={blocks.cards[3].description}
								position="right"
							/>
						</div>
					</div>
				</Container>

				{/* Diagram section - Mobile/Tablet */}
				<Container className="px-4 desktop:hidden">
					<div className="flex flex-col gap-10 pb-10">
						{/* Image */}
						<RevealImage
							src={buildingBlockVisual}
							alt="AI Infrastructure Building Blocks"
							fill
							wrapperClassName="relative aspect-3/4 w-full"
							imageClassName="object-contain"
							duration={500}
							startScale={1.5}
						/>

						{/* Callouts grid - 2x2 on tablet, 1 column on mobile */}
						<div className="grid grid-cols-1 gap-6 tablet:grid-cols-2 tablet:gap-8">
							{blocks.cards.map((card, index) => (
								<div
									key={`card-${index}`}
									className="flex flex-col gap-2"
								>
									<p className="font-sans text-(length:--text-base-16px) font-medium leading-6 text-(--bunker-800)">
										{card.title}
									</p>
									<p className="font-sans text-[12px] leading-4 text-(--bunker-550)">
										{card.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</Container>
			</Segment>
		</section>
	);
}
