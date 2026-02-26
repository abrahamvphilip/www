"use client";

import { useEffect, useRef, useState } from "react";

import { homeProblemStrip } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";
import { RevealGroup } from "@/components/ui/reveal/revealGroup";
import { RevealText } from "@/components/ui/reveal/revealText";

const problemMedia =
	"https://www.figma.com/api/mcp/asset/1376c098-877b-41d4-8093-71f870e626b3";
const PROBLEM_ROTATION_MS = 5200;
const problemSlides = [
	{
		id: "pilot-purgatory",
		statement: `88% of enterprises experiment with AI,\nyet only 7% reach production scale.`,
		backgroundPosition: "22% 52%",
	},
	{
		id: "infra-friction",
		statement: `Teams lose months stitching infra,\nops, and model workflows by hand.`,
		backgroundPosition: "50% 48%",
	},
	{
		id: "cost-chaos",
		statement: `GPU costs spike unpredictably,\nwhile control and visibility lag.`,
		backgroundPosition: "78% 54%",
	},
];

export function ProblemStrip() {
	const problem = homeProblemStrip;
	const [activeSlide, setActiveSlide] = useState(0);
	const [activeProgress, setActiveProgress] = useState(0);
	const [revealedSlide, setRevealedSlide] = useState<number | null>(null);
	const timerStartRef = useRef<number | null>(null);
	const frameRef = useRef<number | null>(null);
	const statementRef = useRef<HTMLParagraphElement | null>(null);

	useEffect(() => {
		const tick = (timestamp: number) => {
			if (timerStartRef.current === null) {
				timerStartRef.current = timestamp;
			}

			const elapsed = timestamp - timerStartRef.current;

			if (elapsed >= PROBLEM_ROTATION_MS) {
				setActiveSlide((prev) => (prev + 1) % problemSlides.length);
				setActiveProgress(0);
				timerStartRef.current = null;
			} else {
				setActiveProgress(elapsed / PROBLEM_ROTATION_MS);
			}

			frameRef.current = window.requestAnimationFrame(tick);
		};

		frameRef.current = window.requestAnimationFrame(tick);

		return () => {
			if (frameRef.current !== null) {
				window.cancelAnimationFrame(frameRef.current);
			}
		};
	}, []);

	useEffect(() => {
		let isMounted = true;
		let cleanupAnimation = () => {};

		const animateWords = async () => {
			try {
				const [gsapModule, splitTextModule] = await Promise.all([
					import("gsap"),
					import("gsap/SplitText"),
				]);

				if (!isMounted || !statementRef.current) {
					return;
				}

				const { gsap } = gsapModule;
				const { SplitText } = splitTextModule;

				gsap.registerPlugin(SplitText);

				const splitTextInstance = SplitText.create(statementRef.current, {
					type: "words",
					mask: "words",
				});

				setRevealedSlide(activeSlide);
				statementRef.current.style.visibility = "visible";

				const tween = gsap.fromTo(
					splitTextInstance.words,
					{
						yPercent: 120,
						opacity: 0,
					},
					{
						yPercent: 0,
						opacity: 1,
						duration: 0.7,
						stagger: 0.04,
						ease: "power3.out",
						clearProps: "transform,opacity",
					},
				);

				cleanupAnimation = () => {
					tween.kill();
					splitTextInstance.revert();
				};
			} catch {
				setRevealedSlide(activeSlide);
				if (statementRef.current) {
					statementRef.current.style.visibility = "visible";
				}
			}
		};

		void animateWords();

		return () => {
			isMounted = false;
			cleanupAnimation();
		};
	}, [activeSlide]);

	const setSlide = (index: number) => {
		setActiveSlide(index);
		setActiveProgress(0);
		timerStartRef.current = null;
	};

	return (
		<section data-section-id="839:16977" className="overflow-hidden">
			<Segment className="py-0!">
				<Container className="flex flex-col gap-5 pb-[120px] max-tablet:px-3 max-tablet:pb-9">
					<RevealGroup className="flex items-start justify-between pb-16 pt-10 max-desktop:flex-col max-desktop:gap-6 max-tablet:gap-4 max-tablet:pb-8 max-tablet:pt-6">
						<Grid mobile={12} tablet={12} desktop={5}>
							<div className="flex flex-col gap-3">
								<RevealText
									as="p"
									phase="eyebrow"
									split="none"
									className="h-7 font-sans text-(length:--text-xs-12px) font-medium uppercase leading-4 tracking-[0.5px] text-(--bunker-550)"
								>
									{problem.eyebrow}
								</RevealText>
								<div className="font-display text-(length:--text-4xl-36px) font-light leading-10 tracking-[-0.36px] max-tablet:leading-8">
									<RevealText
										as="p"
										phase="heading"
										split="words"
										className="text-(--bunker-800)"
									>
										{problem.title}
									</RevealText>
									<RevealText
										as="p"
										phase="subheading"
										split="words"
										className="text-(--bunker-325)"
									>
										{problem.subtitle}
									</RevealText>
								</div>
							</div>
						</Grid>

						<Grid
							mobile={12}
							tablet={12}
							desktop={5}
							className="flex items-end desktop:justify-end"
						>
							<RevealText
								as="p"
								phase="description"
								split="lines"
								className="max-w-[566px] font-sans text-(length:--text-xl-20px) font-normal leading-7 tracking-[-0.2px] text-(--gallery-550) desktop:pt-10 max-tablet:leading-6"
							>
								{problem.description}
							</RevealText>
						</Grid>
					</RevealGroup>

					<div className="flex h-[445px] items-start gap-3 max-desktop:h-[320px] max-tablet:h-[220px] max-tablet:gap-2">
						{problemSlides.map((slide, index) => {
							const isActive = index === activeSlide;
							const flexGrow = isActive ? 3 : 1;

							return (
								<button
									key={slide.id}
									type="button"
									onClick={() => setSlide(index)}
									aria-label={`Activate problem slide ${index + 1}`}
									aria-pressed={isActive}
									className="relative h-full min-w-0 overflow-hidden rounded-lg bg-(--alabaster-50)"
									style={{
										flexBasis: 0,
										flexGrow,
										transition:
											"flex-grow 720ms cubic-bezier(0.22, 1, 0.36, 1)",
									}}
								>
									<div
										aria-hidden
										className="pointer-events-none absolute inset-0 bg-cover transition-transform duration-700 ease-out"
										style={{
											backgroundImage: `url(${problemMedia})`,
											backgroundPosition: slide.backgroundPosition,
											transform: isActive ? "scale(1.05)" : "scale(1)",
										}}
									/>
								</button>
							);
						})}
					</div>

					<div className="grid grid-cols-3 gap-2">
						{problemSlides.map((slide, index) => {
							let fill = 0;

							if (index < activeSlide) {
								fill = 1;
							} else if (index === activeSlide) {
								fill = activeProgress;
							}

							return (
								<div
									key={`progress-${slide.id}`}
									aria-hidden
									className="h-[2px] w-full overflow-hidden rounded-full bg-(--alabaster-100)"
								>
									<div
										className="h-full rounded-full bg-(--eucalyptus-325)"
										style={{
											transform: `scaleX(${fill})`,
											transformOrigin: "left center",
										}}
									/>
								</div>
							);
						})}
					</div>

					<div className="flex items-start pb-10 pt-[52px] max-desktop:pt-10 max-tablet:pb-6 max-tablet:pt-6">
						<Grid mobile={12} tablet={12} desktop={7}>
							<p
								key={problemSlides[activeSlide].id}
								ref={statementRef}
								className="whitespace-pre-line font-sans text-(length:--text-5xl-48px) font-normal leading-[56px] tracking-[-0.48px] text-(--bunker-800) max-desktop:leading-[48px] max-tablet:leading-9"
								style={
									revealedSlide === activeSlide
										? undefined
										: { visibility: "hidden" }
								}
							>
								{problemSlides[activeSlide].statement}
							</p>
						</Grid>
					</div>
				</Container>
			</Segment>
		</section>
	);
}
