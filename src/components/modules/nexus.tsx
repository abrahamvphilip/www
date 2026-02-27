import Link from "next/link";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons-pro/core-stroke-rounded";

import { homeNexus } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";
import { RevealGroup } from "@/components/ui/reveal/revealGroup";
import { RevealImage } from "@/components/ui/reveal/revealImage";
import { RevealText } from "@/components/ui/reveal/revealText";

import nexusVisual from "@/../public/nexus.jpg";

export function Nexus() {
	const nexus = homeNexus;

	return (
		<Segment className="pb-(calc(--segment-padding)/2)">
			<Container as="section" className="">
				<div className="flex flex-col gap-5 desktop:flex-row desktop:gap-1.5">
					<Grid
						mobile={12}
						tablet={12}
						desktop={6}
						className="flex justify-start desktop:pl-0!"
					>
						<RevealImage
							src={nexusVisual}
							alt="aion Nexus - Enterprise AI solutions with forward-deployed engineers and model optimization"
							fill
							sizes="(max-width: 720px) 100vw, (max-width: 1079px) 100vw, 50vw"
							wrapperClassName="relative aspect-4/3 w-full rounded-lg desktop:aspect-auto desktop:h-[854px]"
							imageClassName="object-contain"
							placeholder="blur"
							duration={500}
							startScale={1.5}
						/>
					</Grid>

					<Grid mobile={12} tablet={12} desktop={4} offsetLeftAlt={0}>
						<div className="flex h-auto w-full flex-col justify-between desktop:h-[854px]">
							<RevealGroup className="flex w-full max-w-[565px] flex-col gap-6 pb-16 pt-10 desktop:pt-20 max-tablet:max-w-full max-tablet:pb-8">
								<div className="flex flex-col gap-3">
									<RevealText
										as="p"
										phase="eyebrow"
										split="none"
										className="h-7 font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)"
									>
										{nexus.header.eyebrow}
									</RevealText>
									<div className="font-display text-(length:--text-4xl-36px) font-light leading-10 tracking-[-0.36px] max-tablet:leading-8">
										<RevealText
											as="p"
											phase="heading"
											split="words"
											className="text-(--bunker-800)"
										>
											{nexus.header.title}
										</RevealText>
										<RevealText
											as="p"
											phase="subheading"
											split="words"
											className="text-(--bunker-325)"
										>
											{nexus.header.subtitle}
										</RevealText>
									</div>
								</div>
								<RevealText
									as="p"
									phase="description"
									split="lines"
									className="w-full max-w-[566px] font-sans text-(length:--text-xl-20px) font-normal leading-7 tracking-[-0.2px] text-(--gallery-550) max-tablet:max-w-full max-tablet:leading-6"
								>
									{nexus.header.description}
								</RevealText>
							</RevealGroup>

							<div className="flex w-full max-w-[565px] items-center gap-6 pb-16 max-tablet:max-w-full max-tablet:pb-8">
								{/* <button
									type="button"
									className="inline-flex h-[38px] cursor-pointer items-center justify-center px-3 py-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--bunker-800)"
								>
									<span>{nexus.ctas[0]}</span>
									<span className="ml-2 text-base leading-none">›</span>
								</button> */}

								<div className="flex h-[38px] items-center">
									<Link
										href="https://cal.com/team/aion-intelligence/aion-introduction-call?layout=month_view"
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex h-[38px] items-center justify-center border border-(--bunker-800) bg-(--alabaster-25) px-3 py-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--bunker-800) shadow-[0px_1px_1px_0.05px_rgba(24,24,27,0.24)]"
									>
										{nexus.ctas[1]}
									</Link>
									{/* Slashed connector */}
									<svg
										width="6"
										height="38"
										viewBox="0 0 6 38"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="shrink-0"
									>
										<pattern
											id="slashPatternNexus"
											patternUnits="userSpaceOnUse"
											width="4"
											height="4"
											patternTransform="rotate(-45)"
										>
											<line
												x1="0"
												y1="0"
												x2="0"
												y2="4"
												stroke="var(--bunker-800)"
												strokeWidth="1"
											/>
										</pattern>
										<rect
											width="6"
											height="38"
											fill="url(#slashPatternNexus)"
										/>
									</svg>
									<Link
										href="https://cal.com/team/aion-intelligence/aion-introduction-call?layout=month_view"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Book a call"
										className="inline-flex h-[38px] w-[40px] items-center justify-center border border-[rgba(82,82,90,0.24)] bg-(--bunker-800) text-(--alabaster-25) shadow-[0px_1px_0.5px_0.05px_rgba(24,24,27,0.05)]"
									>
										<HugeiconsIcon icon={ArrowRight01Icon} size={20} />
									</Link>
								</div>
							</div>
						</div>
					</Grid>
				</div>
			</Container>
		</Segment>
	);
}
