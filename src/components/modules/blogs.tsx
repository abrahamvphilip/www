import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowRight02Icon,
	Book02Icon,
} from "@hugeicons-pro/core-twotone-rounded";

import { homeResources } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";
import { RevealGroup } from "@/components/ui/reveal/revealGroup";
import { RevealText } from "@/components/ui/reveal/revealText";

function ReadMoreButton({ className }: { className?: string }) {
	return (
		<button
			type="button"
			className={`relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-[12px] border border-(--gallery-800)/8 bg-(--gallery-25) px-3 py-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--gallery-800) shadow-[0px_1px_0.5px_0.05px_rgba(24,24,27,0.05)] ${className ?? ""}`.trim()}
		>
			<span>Read More</span>
			<HugeiconsIcon icon={ArrowRight02Icon} size={20} />
			<span className="pointer-events-none absolute -inset-px rounded-[inherit] shadow-[inset_0px_8px_16px_0px_rgba(255,255,255,0.02),inset_0px_-4px_8px_0px_rgba(0,0,0,0.02),inset_0px_2px_0px_0px_rgba(255,255,255,0.02)]" />
		</button>
	);
}

function ResourceCard({
	card,
}: {
	card: (typeof homeResources.cards)[number];
}) {
	return (
		<article className="flex w-full max-w-[421px] shrink-0 flex-col gap-0.5 rounded-lg border border-(--bunker-800)/4 bg-(--gallery-25) p-0.5 max-tablet:max-w-full">
			<div className="relative h-[252px] w-full overflow-hidden rounded-[6px] max-tablet:h-[180px]">
				<div className="absolute inset-0 bg-(--gallery-150)/4" />
				{/*
				<Image
					src={cardImage}
					alt=""
					fill
					className="object-cover"
				/>
				*/}
				<div className="relative flex items-center gap-1 p-2">
					<span className="text-(--bunker-800)">
						<HugeiconsIcon icon={Book02Icon} size={20} />
					</span>
					<p className="font-sans text-(length:--text-xs-12px) font-normal leading-4 text-(--bunker-800)">
						{card.readTime}
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-1 px-2 pb-3 pt-2">
				<h4 className="font-sans text-(length:--text-base-16px) font-medium leading-6 text-(--bunker-800)">
					{card.category}
				</h4>
				<p className="font-sans text-(length:--text-sm-14px) font-normal leading-5 text-(--gallery-550)">
					{card.excerpt}
				</p>
			</div>
			<ReadMoreButton />
		</article>
	);
}

export function Blogs() {
	const resources = homeResources;

	return (
		<Segment className="pt-14! pb-[144px]! max-tablet:pb-16!">
			<Container
				as="div"
				className="flex flex-col gap-14 px-10! max-tablet:gap-8 max-tablet:px-4!"
			>
				{/* Header */}
				<div className="flex items-end gap-3 max-tablet:flex-col max-tablet:items-start">
					<RevealGroup className="flex w-full max-w-[565px] shrink-0 flex-col gap-3 max-tablet:shrink max-tablet:max-w-full">
						<div className="flex h-7 items-center">
							<RevealText
								as="p"
								phase="eyebrow"
								split="none"
								className="font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)"
							>
								{resources.header.eyebrow}
							</RevealText>
						</div>
						<div className="font-display text-(length:--text-4xl-36px) font-light leading-10 tracking-[-0.36px] max-tablet:leading-8">
							<RevealText
								as="p"
								phase="heading"
								split="words"
								className="text-(--bunker-800)"
							>
								{resources.header.title}
							</RevealText>
							<RevealText
								as="p"
								phase="subheading"
								split="words"
								className="text-(--bunker-325)"
							>
								{resources.header.subtitle}
							</RevealText>
						</div>
					</RevealGroup>

					<div className="flex flex-1 items-start justify-end pt-3 max-tablet:justify-start">
						<a
							href="/resources"
							className="inline-flex items-center gap-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--bunker-800)"
						>
							<span>{resources.cta}</span>
							<HugeiconsIcon icon={ArrowRight02Icon} size={20} />
						</a>
					</div>
				</div>

				{/* Lead article row */}
				<div className="flex h-[445px] gap-3 max-tablet:flex-col max-tablet:h-auto">
					<div className="relative h-full w-full shrink-0 overflow-hidden rounded-lg bg-(--gallery-100) desktop:w-[854px] max-tablet:shrink max-tablet:h-[200px]">
						{/*
							<Image
								src={leadImage}
								alt=""
								fill
								className="object-cover"
							/>
							*/}
					</div>

					<div className="flex min-w-0 flex-1 flex-col justify-between max-tablet:gap-4">
						<div className="px-2">
							<div className="flex items-center gap-1">
								<span className="text-(--bunker-800)">
									<HugeiconsIcon icon={Book02Icon} size={20} />
								</span>
								<p className="font-sans text-(length:--text-xs-12px) font-normal leading-4 text-(--bunker-800)">
									{resources.lead.readTime}
								</p>
							</div>
							<div className="flex w-full max-w-[710px] flex-col gap-1 py-5">
								<h3 className="font-sans text-(length:--text-2xl-24px) font-medium leading-8 tracking-[-0.24px] text-(--bunker-800)">
									{resources.lead.category}
								</h3>
								<p className="font-sans text-(length:--text-base-16px) font-normal leading-6 text-(--gallery-550)">
									{resources.lead.excerpt}
								</p>
							</div>
						</div>
						<ReadMoreButton />
					</div>
				</div>

				{/* Cards row */}
				<div className="flex flex-wrap items-center gap-3 max-tablet:flex-col">
					{resources.cards.map((card, index) => (
						<ResourceCard key={`${card.category}-${index}`} card={card} />
					))}
				</div>
			</Container>
		</Segment>
	);
}
