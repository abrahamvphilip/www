import { homeForge } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";

export function Forge() {
	const forge = homeForge;

	return (
		<Segment className="p-0!">
			<Container
				as={"section"}
				className="flex flex-col-reverse gap-5 px-10 pt-[120px] desktop:flex-row desktop:justify-between desktop:gap-0 max-tablet:px-4 max-tablet:pt-16"
			>
				<Grid mobile={12} tablet={12} desktop={4}>
					<div className="flex h-auto flex-col justify-between desktop:h-[854px]">
						<div className="flex w-full max-w-[565px] flex-col gap-6 pb-16 pt-10 desktop:pt-20 max-tablet:max-w-full max-tablet:pb-8">
							<div className="flex flex-col gap-3">
								<p className="h-7 font-sans text-xs font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)">
									{forge.header.eyebrow}
								</p>
								<div className="font-display text-(length:--text-4xl-36px) font-light leading-10 tracking-[-0.36px] max-tablet:leading-8">
									<p className="text-(--bunker-800)">{forge.header.title}</p>
									<p className="text-(--bunker-325)">{forge.header.subtitle}</p>
								</div>
							</div>
							<p className="w-full max-w-[566px] whitespace-pre-line font-sans text-(length:--text-xl-20px) font-normal leading-7 tracking-[-0.2px] text-(--gallery-550) max-tablet:max-w-full max-tablet:leading-6">
								{forge.header.description}
							</p>
						</div>

						<div className="flex w-full max-w-[565px] items-start gap-6 pb-16 max-tablet:max-w-full max-tablet:pb-8">
							<button
								type="button"
								className="inline-flex h-[38px] items-center justify-center px-3 py-2 font-sans text-sm font-medium leading-5 text-(--bunker-800)"
							>
								<span>{forge.ctas[0]}</span>
								<span className="ml-2 text-base leading-none">›</span>
							</button>

							<div className="flex h-[38px] items-center">
								<button
									type="button"
									className="inline-flex h-[38px] items-center justify-center border border-(--royal-blue-550) bg-(--royal-blue-550) px-3 py-2 font-sans text-sm font-medium leading-5 text-(--alabaster-25) shadow-[0px_1px_1px_0.05px_rgba(24,24,27,0.24)]"
								>
									{forge.ctas[1]}
								</button>
								<span className="h-[38px] w-[6px] bg-transparent" />
								<button
									type="button"
									className="inline-flex h-[38px] w-[40px] items-center justify-center border border-(--royal-blue-550) bg-(--royal-blue-550) text-(--alabaster-25) shadow-[0px_1px_0.5px_0.05px_rgba(24,24,27,0.05)]"
								>
									›
								</button>
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
					<div className="relative aspect-4/3 w-full bg-(--gallery-100) rounded-lg overflow-hidden desktop:aspect-auto desktop:h-[854px]">
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
			</Container>
		</Segment>
	);
}
