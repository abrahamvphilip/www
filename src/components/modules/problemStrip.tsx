import { homeProblemStrip } from "@/data/home";

import { Container } from "@/components/primitives/container/container";

const problemMedia =
	"https://www.figma.com/api/mcp/asset/1376c098-877b-41d4-8093-71f870e626b3";

export function ProblemStrip() {
	const problem = homeProblemStrip;

	return (
		<section data-section-id="IYsCw" className="overflow-hidden">
			<Container className="flex flex-col gap-5 px-10 pb-[120px]">
				<div className="flex items-start justify-between pb-16 pt-10">
					<div className="flex w-[565px] flex-col gap-3">
						<p className="h-7 font-sans text-xs font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)">
							{problem.eyebrow}
						</p>
						<div className="font-display text-[36px] font-light leading-10 tracking-[-0.36px]">
							<p className="text-(--bunker-800)">{problem.title}</p>
							<p className="text-(--alabaster-150)">{problem.subtitle}</p>
						</div>
					</div>

					<div className="flex w-[565px] flex-col items-end gap-5 pt-10">
						<p className="w-[566px] font-sans text-(length:--text-xl-20px) font-normal leading-7 tracking-[-0.2px] text-(--gallery-550)">
							{problem.description}
						</p>
					</div>
				</div>

				<div className="flex h-[445px] items-start gap-3">
					<div className="relative h-full min-w-0 flex-1 overflow-hidden rounded-lg bg-(--alabaster-50)">
						<div className="absolute left-[calc(50%-6px)] top-[calc(50%+210.5px)] h-[866px] w-[866px] -translate-x-1/2 -translate-y-1/2 scale-125">
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 h-full w-full max-w-none bg-cover bg-center"
								style={{ backgroundImage: `url(${problemMedia})` }}
							/>
						</div>
					</div>
					<div className="relative h-full w-[421px] shrink-0 overflow-hidden rounded-lg bg-(--alabaster-50)">
						<div className="absolute right-0 top-1/2 h-[819px] w-[819px] -translate-y-1/2">
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 h-full w-full max-w-none bg-cover bg-center"
								style={{ backgroundImage: `url(${problemMedia})` }}
							/>
						</div>
					</div>
					<div className="relative h-full w-[421px] shrink-0 overflow-hidden rounded-lg bg-(--alabaster-50)">
						<div className="absolute left-[calc(50%+148px)] top-1/2 h-[819px] w-[819px] -translate-x-1/2 -translate-y-1/2">
							<div
								aria-hidden
								className="pointer-events-none absolute inset-0 h-full w-full max-w-none bg-cover bg-center"
								style={{ backgroundImage: `url(${problemMedia})` }}
							/>
						</div>
					</div>
				</div>

				<div className="flex items-start pb-10 pt-[52px]">
					<p className="w-[854px] whitespace-pre-line font-sans text-(length:--text-5xl-48px) font-normal leading-[56px] tracking-[-0.48px] text-(--bunker-800)">
						{problem.stat}
					</p>
				</div>
			</Container>
		</section>
	);
}
