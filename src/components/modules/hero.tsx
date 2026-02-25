import { homeHero } from "@/data/home";
import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "../primitives/segment/segment";

export function Hero() {
	const hero = homeHero;

	return (
		<Segment className="relative overflow-hidden p-0! bg-(--bunker-950) lg:-ml-[calc(var(--gutter)/2)]">
			<div aria-hidden className="absolute inset-0 bg-(--gallery-675)" />

			<Container className="relative z-10 flex min-h-[calc(100vh-76px)] flex-col px-10 pb-10 pt-[76px]">
				<div className="flex flex-1 flex-col justify-end pt-24">
					<Grid
						mobile={12}
						tablet={12}
						desktop={7}
						className="max-w-[998px] pt-11"
					>
						<div className="flex h-7 items-center gap-4">
							<span className="inline-flex h-7 items-center gap-2 rounded-full border border-(--gallery-100) bg-[rgba(245,245,246,0.04)] px-2.5 font-sans text-xs font-medium uppercase leading-4 tracking-[0.5px] text-(--alabaster-25)">
								<span
									aria-hidden
									className="inline-block h-4 w-4 rounded-full border border-(--gallery-100) bg-[rgba(245,245,246,0.04)]"
								/>
								{hero.stats[0].label}
							</span>
							<span
								aria-hidden
								className="h-1.5 w-1.5 rounded-full bg-(--gallery-100)"
							/>
							<span className="font-sans text-xs font-medium uppercase leading-4 tracking-[0.5px] text-(--alabaster-25)">
								{hero.stats[1].label}
							</span>
						</div>
						<div className="space-y-0 pt-5">
							<h1 className="font-display text-(length:--text-6xl-60px) font-light leading-[68px] tracking-[-0.6px] text-(--alabaster-25)">
								{hero.heading}
							</h1>
							<p className="font-display text-(length:--text-6xl-60px) font-light leading-[68px] tracking-[-0.6px] text-(--alabaster-150)">
								{hero.subheading}
							</p>
						</div>
					</Grid>
				</div>
			</Container>
		</Segment>
	);
}
