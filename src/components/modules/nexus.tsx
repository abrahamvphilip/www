import { homeNexus } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";

export function Nexus() {
	const nexus = homeNexus;

	return (
		<Segment className="pt-[120px]">
			<Container as="section" className="px-10 ">
				<div className="flex flex-col gap-5 lg:flex-row lg:gap-1.5">
					<Grid
						mobile={12}
						tablet={12}
						desktop={6}
						className="flex justify-start lg:pl-0!"
					>
						<div className="relative h-[854px] w-full bg-(--gallery-100)">
							{/*
                <Image
                  src={forgeVisual}
                  alt=""
                  fill
                  className="object-contain"
                />
                */}
						</div>
					</Grid>

					<Grid mobile={12} tablet={12} desktop={4} offsetLeftAlt={0}>
						<div className="flex h-[854px] w-full flex-col justify-between">
							<div className="flex w-[565px] flex-col gap-6 pb-16 pt-20">
								<div className="flex flex-col gap-3">
									<p className="h-7 font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)">
										{nexus.header.eyebrow}
									</p>
									<div className="font-display text-(length:--text-4xl-36px) font-light leading-10 tracking-[-0.36px]">
										<p className="text-(--bunker-800)">{nexus.header.title}</p>
										<p className="text-(--bunker-325)">
											{nexus.header.subtitle}
										</p>
									</div>
								</div>
								<p className="w-[566px] font-sans text-(length:--text-xl-20px) font-normal leading-7 tracking-[-0.2px] text-(--gallery-550)">
									{nexus.header.description}
								</p>
							</div>

							<div className="flex w-[565px] items-start gap-6 pb-16">
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
