import { homeCareers } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";
import { RevealGroup } from "@/components/ui/reveal/revealGroup";
import { RevealText } from "@/components/ui/reveal/revealText";

function BezierIcon() {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22.6667 12C24.1394 12 25.3333 10.8061 25.3333 9.33333C25.3333 7.86057 24.1394 6.66667 22.6667 6.66667C21.1939 6.66667 20 7.86057 20 9.33333C20 10.8061 21.1939 12 22.6667 12Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.33333 25.3333C10.8061 25.3333 12 24.1394 12 22.6667C12 21.1939 10.8061 20 9.33333 20C7.86057 20 6.66667 21.1939 6.66667 22.6667C6.66667 24.1394 7.86057 25.3333 9.33333 25.3333Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.3333 9.33333H14.6667C12 9.33333 10.6667 10.6667 10.6667 13.3333V16"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 9.33333H17.3333"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.6667 16V20"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function DataIcon() {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.6667 28H21.3333C26.6667 28 28 26.6667 28 21.3333V10.6667C28 5.33333 26.6667 4 21.3333 4H10.6667C5.33333 4 4 5.33333 4 10.6667V21.3333C4 26.6667 5.33333 28 10.6667 28Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22.6667 10.6667V14.6667"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22.6667 22.6667C23.7712 22.6667 24.6667 21.7712 24.6667 20.6667C24.6667 19.5621 23.7712 18.6667 22.6667 18.6667C21.5621 18.6667 20.6667 19.5621 20.6667 20.6667C20.6667 21.7712 21.5621 22.6667 22.6667 22.6667Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.33333 10.6667V22.6667"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 10.6667V14.6667"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 22.6667C17.1046 22.6667 18 21.7712 18 20.6667C18 19.5621 17.1046 18.6667 16 18.6667C14.8954 18.6667 14 19.5621 14 20.6667C14 21.7712 14.8954 22.6667 16 22.6667Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ShapesIcon() {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 13.7067V8.29333C4 5.6 5.6 4 8.29333 4H13.7067C16.4 4 18 5.6 18 8.29333V13.7067C18 16.4 16.4 18 13.7067 18H8.29333C5.6 18 4 16.4 4 13.7067Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.6667 9.33333C17.6667 13.9333 13.9333 17.6667 9.33333 17.6667"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M28 23.5333C28 26 26 28 23.5333 28C21.0667 28 19.0667 26 19.0667 23.5333C19.0667 21.0667 21.0667 19.0667 23.5333 19.0667C26 19.0667 28 21.0667 28 23.5333Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function ArrowRightIcon() {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.43 5.93L20.5 12L14.43 18.07"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.5 12H20.33"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

const ICON_MAP = {
	bezier: BezierIcon,
	data: DataIcon,
	shapes: ShapesIcon,
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
					<IconComponent />
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
							<ArrowRightIcon />
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
