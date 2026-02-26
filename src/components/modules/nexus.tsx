import { homeNexus } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";
import { RevealGroup } from "@/components/ui/reveal/revealGroup";
import { RevealText } from "@/components/ui/reveal/revealText";

export function Nexus() {
	const nexus = homeNexus;

	return (
		<Segment className="pt-[120px] max-tablet:pt-16">
			<Container as="section" className="px-10 max-tablet:px-4">
				<div className="flex flex-col gap-5 desktop:flex-row desktop:gap-1.5">
					<Grid
						mobile={12}
						tablet={12}
						desktop={6}
						className="flex justify-start desktop:pl-0!"
					>
						<div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-(--gallery-100) desktop:aspect-auto desktop:h-[854px]">
							{/*
                <Image
                  src={nexusVisual}
                  alt=""
                  fill
                  className="object-contain"
                />
                */}
						</div>
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

							<div className="flex w-full max-w-[565px] items-start gap-6 pb-16 max-tablet:max-w-full max-tablet:pb-8">
								<button
									type="button"
									className="inline-flex h-[38px] items-center justify-center px-3 py-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--bunker-800)"
								>
									<span>{nexus.ctas[0]}</span>
									<span className="ml-2 text-base leading-none">›</span>
								</button>

								<div className="flex h-[38px] items-center">
									<button
										type="button"
										className="inline-flex h-[38px] items-center justify-center border border-(--gallery-800) bg-(--alabaster-25) px-3 py-2 font-sans text-(length:--text-sm-14px) font-medium leading-5 text-(--bunker-800) shadow-[0px_1px_1px_0.05px_rgba(24,24,27,0.24)]"
									>
										{nexus.ctas[1]}
									</button>
									<span className="h-[38px] w-[6px] bg-transparent" />
									<button
										type="button"
										aria-label="Learn more"
										className="inline-flex h-[38px] w-[40px] items-center justify-center border border-[rgba(82,82,90,0.24)] bg-(--bunker-800) text-(--alabaster-25) shadow-[0px_1px_0.5px_0.05px_rgba(24,24,27,0.05)]"
									>
										<span className="text-base leading-none">›</span>
									</button>
								</div>
							</div>
						</div>
					</Grid>
				</div>
			</Container>
		</Segment>
	);
}
