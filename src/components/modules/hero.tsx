import { homeHero } from "@/data/home";
import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { RevealGroup } from "@/components/ui/reveal/revealGroup";
import { RevealText } from "@/components/ui/reveal/revealText";
import { Segment } from "../primitives/segment/segment";

export function Hero() {
	const hero = homeHero;

	return (
		<Segment className="relative overflow-hidden p-0! bg-(--bunker-950)">
			<div aria-hidden className="absolute inset-0 bg-(--gallery-675)" />

			<Container className="relative z-10 flex min-h-[calc(100vh-76px)] flex-col px-10 pb-10 pt-[76px] max-tablet:px-4">
				<div className="flex flex-1 flex-col justify-end pt-24 max-tablet:pt-12">
					<Grid
						mobile={12}
						tablet={12}
						desktop={7}
						className="max-w-[998px] pt-11 max-tablet:pt-6"
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
						<RevealGroup className="space-y-0 pt-5" threshold={0} rootMargin="0px">
							<RevealText
								as="h1"
								phase="heading"
								split="words"
								className="font-display text-(length:--text-6xl-60px) font-light leading-[40px] desktop:leading-[68px] tracking-[-0.6px] text-(--alabaster-25) max-desktop:leading-[52px] max-tablet:leading-[36px]"
							>
								{hero.heading}
							</RevealText>
							<RevealText
								as="p"
								phase="subheading"
								split="words"
								className="font-display text-(length:--text-6xl-60px) font-light leading-[40px] desktop:leading-[68px] tracking-[-0.6px] text-(--bunker-325) max-desktop:leading-[52px] max-tablet:leading-[36px]"
							>
								{hero.subheading}
							</RevealText>
						</RevealGroup>
					</Grid>
				</div>
			</Container>
		</Segment>
	);
}
