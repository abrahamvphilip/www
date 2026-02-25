import { homeProblemStrip } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";

const problemMedia =
	"https://www.figma.com/api/mcp/asset/1376c098-877b-41d4-8093-71f870e626b3";

export function ProblemStrip() {
	const problem = homeProblemStrip;

	return (
		<section data-section-id="839:16977" className="overflow-hidden">
			<Segment className="py-0!">
				<Container className="flex flex-col gap-5 pb-[120px] max-tablet:px-3 max-tablet:pb-9">
					<div className="flex items-start justify-between pb-16 pt-10 max-desktop:flex-col max-desktop:gap-6 max-tablet:gap-4 max-tablet:pb-8 max-tablet:pt-6">
						<Grid mobile={12} tablet={12} desktop={5}>
							<div className="flex flex-col gap-3">
								<p className="h-7 font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)">
									{problem.eyebrow}
								</p>
								<div className="font-display text-(length:--text-4xl-36px) font-light leading-10 tracking-[-0.36px] max-tablet:leading-8">
									<p className="text-(--bunker-800)">{problem.title}</p>
									<p className="text-(--bunker-325)">{problem.subtitle}</p>
								</div>
							</div>
						</Grid>

						<Grid
							mobile={12}
							tablet={12}
							desktop={5}
							className="flex items-end desktop:justify-end"
						>
							<p className="max-w-[566px] font-sans text-(length:--text-xl-20px) font-normal leading-7 tracking-[-0.2px] text-(--gallery-550) desktop:pt-10 max-tablet:leading-6">
								{problem.description}
							</p>
						</Grid>
					</div>

					<div className="flex h-[445px] items-start gap-3 max-desktop:h-[320px] max-tablet:h-[220px]">
						<div className="relative h-full min-w-0 flex-1 overflow-hidden rounded-lg bg-(--alabaster-50)">
							<div className="absolute left-[calc(50%-6px)] top-[calc(50%+210.5px)] h-[866px] w-[866px] -translate-x-1/2 -translate-y-1/2 scale-125 max-desktop:scale-100">
								<div
									aria-hidden
									className="pointer-events-none absolute inset-0 h-full w-full max-w-none bg-cover bg-center"
									style={{ backgroundImage: `url(${problemMedia})` }}
								/>
							</div>
						</div>
						<div className="relative h-full w-[421px] shrink-0 overflow-hidden rounded-lg bg-(--alabaster-50) max-desktop:w-[30%] max-tablet:hidden">
							<div className="absolute right-0 top-1/2 h-[819px] w-[819px] -translate-y-1/2">
								<div
									aria-hidden
									className="pointer-events-none absolute inset-0 h-full w-full max-w-none bg-cover bg-center"
									style={{ backgroundImage: `url(${problemMedia})` }}
								/>
							</div>
						</div>
						<div className="relative h-full w-[421px] shrink-0 overflow-hidden rounded-lg bg-(--alabaster-50) max-desktop:w-[30%] max-tablet:hidden">
							<div className="absolute left-[calc(50%+148px)] top-1/2 h-[819px] w-[819px] -translate-x-1/2 -translate-y-1/2">
								<div
									aria-hidden
									className="pointer-events-none absolute inset-0 h-full w-full max-w-none bg-cover bg-center"
									style={{ backgroundImage: `url(${problemMedia})` }}
								/>
							</div>
						</div>
					</div>

					<div className="flex items-start pb-10 pt-[52px] max-desktop:pt-10 max-tablet:pb-6 max-tablet:pt-6">
						<Grid mobile={12} tablet={12} desktop={7}>
							<p className="whitespace-pre-line font-sans text-(length:--text-5xl-48px) font-normal leading-[56px] tracking-[-0.48px] text-(--bunker-800) max-desktop:leading-[48px] max-tablet:leading-9">
								{problem.stat}
							</p>
						</Grid>
					</div>
				</Container>
			</Segment>
		</section>
	);
}
