import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";

export function IntroStrip() {
	return (
		<section data-section-id="D2Lup">
			<Container className="px-10 pb-36 pt-[120px] max-tablet:px-4 max-tablet:pb-12 max-tablet:pt-12">
				<div className="flex w-full justify-center py-20 max-tablet:py-8">
					<Grid mobile={12} tablet={10} desktop={8} className="max-w-[1142px]">
						<div className="text-center font-sans text-(length:--text-4xl-36px) font-normal leading-10 max-tablet:leading-8 tracking-[-0.36px]">
							<p className="mb-0 text-(--bunker-800)">
								We design,build, and deploy the systems
							</p>
							that turn research into enterprise-grade AI.
							<br />
							<br />
							<p className="mb-0 text-(--bunker-800)">
								From models to infrastructure, we close{" "}
								<br className="max-tablet:hidden" /> the gap between pilot and
								production.
							</p>
						</div>
					</Grid>
				</div>
			</Container>
		</section>
	);
}
