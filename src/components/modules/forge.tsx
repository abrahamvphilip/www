import Link from "next/link";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons-pro/core-stroke-rounded";

import { homeForge } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";
import { RevealGroup } from "@/components/ui/reveal/revealGroup";
import { RevealImage } from "@/components/ui/reveal/revealImage";
import { RevealText } from "@/components/ui/reveal/revealText";

import forgeVisual from "@/../public/forge.jpg";

export function Forge() {
	const forge = homeForge;

	return (
		<Segment className="">
			<Container
				as={"section"}
				className="flex flex-col-reverse gap-5 px-10 pt-[120px] desktop:flex-row desktop:justify-between desktop:gap-0 max-tablet:px-4 max-tablet:pt-16"
			>
				<Grid mobile={12} tablet={12} desktop={4}>
					<div className="flex h-auto flex-col justify-between desktop:h-[854px]">
						<RevealGroup className="flex w-full max-w-[565px] flex-col gap-6 pb-16 pt-10 desktop:pt-20 max-tablet:max-w-full max-tablet:pb-8">
							<div className="flex flex-col gap-3">
								<RevealText
									as="p"
									phase="eyebrow"
									split="none"
									className="h-7 font-sans text-xs font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)"
								>
									{forge.header.eyebrow}
								</RevealText>
								<div className="font-display text-(length:--text-4xl-36px) font-light leading-10 tracking-[-0.36px] max-tablet:leading-8">
									<RevealText
										as="p"
										phase="heading"
										split="words"
										className="text-(--bunker-800)"
									>
										{forge.header.title}
									</RevealText>
									<RevealText
										as="p"
										phase="subheading"
										split="words"
										className="text-(--bunker-325)"
									>
										{forge.header.subtitle}
									</RevealText>
								</div>
							</div>
							<RevealText
								as="p"
								phase="description"
								split="lines"
								className="w-full max-w-[566px] whitespace-pre-line font-sans text-(length:--text-xl-20px) font-normal leading-7 tracking-[-0.2px] text-(--gallery-550) max-tablet:max-w-full max-tablet:leading-6"
							>
								{forge.header.description}
							</RevealText>
						</RevealGroup>

						<div className="flex w-full max-w-[565px] items-center gap-6 pb-16 max-tablet:max-w-full max-tablet:pb-8">
							{/* <button
								type="button"
								className="inline-flex h-[38px] cursor-pointer items-center justify-center px-3 py-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--bunker-800)"
							>
								<span>{forge.ctas[0]}</span>
								<span className="ml-2 text-base leading-none">›</span>
							</button> */}

							<div className="flex h-[38px] items-center">
								<Link
									href="/waitlist"
									className="inline-flex h-[38px] items-center justify-center border border-(--bunker-800) bg-(--alabaster-25) px-3 py-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--bunker-800) shadow-[0px_1px_1px_0.05px_rgba(24,24,27,0.24)]"
								>
									{forge.ctas[1]}
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
										id="slashPatternForge"
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
									<rect width="6" height="38" fill="url(#slashPatternForge)" />
								</svg>
								<Link
									href="/waitlist"
									aria-label="Join waitlist"
									className="inline-flex h-[38px] w-[40px] items-center justify-center border border-[rgba(82,82,90,0.24)] bg-(--bunker-800) text-(--alabaster-25) shadow-[0px_1px_0.5px_0.05px_rgba(24,24,27,0.05)]"
								>
									<HugeiconsIcon icon={ArrowRight01Icon} size={20} />
								</Link>
							</div>
						</div>
					</div>
				</Grid>

				<Grid
					mobile={12}
					tablet={12}
					desktop={6}
					className="flex justify-end desktop:pr-0!"
				>
					<RevealImage
						src={forgeVisual}
						alt="aion Forge - Deploy AI infrastructure with enterprise GPU cloud and Kubernetes integration"
						fill
						sizes="(max-width: 720px) 100vw, (max-width: 1079px) 100vw, 50vw"
						wrapperClassName="relative aspect-4/3 w-full rounded-lg desktop:aspect-auto desktop:h-[854px]"
						imageClassName="object-contain"
						placeholder="blur"
						duration={500}
						startScale={1.5}
					/>
				</Grid>
			</Container>
		</Segment>
	);
}
