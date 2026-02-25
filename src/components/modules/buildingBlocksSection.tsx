import { homeBuildingBlocks } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";
import { PlaceholderMedia } from "@/components/ui/placeholderMedia";
import { SectionHeading } from "@/components/ui/sectionHeading";

export function BuildingBlocksSection() {
	const blocks = homeBuildingBlocks;

	return (
		<section
			data-section-id="oqmDi"
			className="overflow-hidden bg-gallery-50 desktop:h-[2150px]"
		>
			<Segment>
				<Container className="space-y-[56px] max-tablet:space-y-8">
					<div className="grid gap-10 desktop:grid-cols-[565px_565px] desktop:justify-between max-tablet:gap-6">
						<SectionHeading
							eyebrow={blocks.header.eyebrow}
							title={blocks.header.title}
							subtitle={blocks.header.subtitle}
						/>
						<div className="pt-10 max-tablet:pt-4">
							<p className="max-w-[566px] font-sans text-xl font-normal leading-[1.4] tracking-[-0.2px] text-bunker-675 max-tablet:max-w-full">
								{blocks.header.description}
							</p>
						</div>
					</div>

					<div>
						<div className="relative h-auto desktop:h-[1169px]">
							<div className="relative mx-auto h-full w-full max-w-[1720px]">
								<div className="absolute left-0 top-[89px] hidden w-[279px] space-y-3 desktop:block">
									<h3 className="font-sans text-base font-medium leading-[1.5] text-bunker-800">
										{blocks.cards[0].title}
									</h3>
									<p className="font-sans text-xs leading-[1.3333333333] text-bunker-550">
										{blocks.cards[0].description}
									</p>
								</div>
								<div className="absolute left-0 top-[542px] hidden w-[279px] space-y-3 desktop:block">
									<h3 className="font-sans text-base font-medium leading-[1.5] text-bunker-800">
										{blocks.cards[1].title}
									</h3>
									<p className="font-sans text-xs leading-[1.3333333333] text-bunker-550">
										{blocks.cards[1].description}
									</p>
								</div>
								<div className="absolute right-0 top-[344px] hidden w-[279px] space-y-3 desktop:block">
									<h3 className="font-sans text-base font-medium leading-[1.5] text-bunker-800">
										{blocks.cards[2].title}
									</h3>
									<p className="font-sans text-xs leading-[1.3333333333] text-bunker-550">
										{blocks.cards[2].description}
									</p>
								</div>
								<div className="absolute right-0 top-[903px] hidden w-[279px] space-y-3 desktop:block">
									<h3 className="font-sans text-base font-medium leading-[1.5] text-bunker-800">
										{blocks.cards[3].title}
									</h3>
									<p className="font-sans text-xs leading-[1.3333333333] text-bunker-550">
										{blocks.cards[3].description}
									</p>
								</div>

								<div className="mx-auto w-full max-w-[1169px]">
									<PlaceholderMedia
										label="blocks-canvas"
										ratio="1169 / 1169"
										className="bg-alabaster-25"
									/>
								</div>
								<div className="pointer-events-none absolute inset-x-[30%] bottom-[22%] h-[251px] rounded-full bg-[radial-gradient(circle,#00000066_0%,transparent_72%)] blur-[35px]" />
							</div>
						</div>

						<div className="grid grid-cols-2 gap-6 desktop:hidden max-tablet:grid-cols-1">
							{blocks.cards.map((card) => (
								<div key={card.title} className="space-y-3">
									<h3 className="font-sans text-base font-medium leading-[1.5] text-bunker-800">
										{card.title}
									</h3>
									<p className="font-sans text-xs leading-[1.3333333333] text-bunker-550">
										{card.description}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="space-y-12 pb-[56px] pt-[56px] max-tablet:space-y-8 max-tablet:pb-8 max-tablet:pt-8">
						{blocks.timeline.map((entry) => (
							<div
								key={entry.marker}
								className="grid gap-8 pt-8 desktop:grid-cols-[auto_1fr] max-tablet:gap-4 max-tablet:pt-4"
							>
								<p className="font-sans text-sm font-medium leading-[1.6] tracking-[2px] text-eucalyptus-325">
									{entry.marker}
								</p>
								<div className="space-y-5 max-tablet:space-y-3">
									<h4 className="font-display text-2xl font-normal leading-[1.3333333333] tracking-[-0.24px] text-bunker-800">
										{entry.title}
									</h4>
									<p className="max-w-[1548px] font-sans text-base font-normal leading-[1.5] text-bunker-550">
										{entry.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</Container>
			</Segment>
		</section>
	);
}
