"use client";

import { useEffect, useRef, useState } from "react";

import type { ComponentPropsWithoutRef } from "react";

import { useRevealGroupContext } from "./revealGroup";
import { REVEAL_EASE, REVEAL_TIMINGS } from "./timings";

import type { RevealPhase, RevealProfile, RevealSplit } from "./timings";

type RevealTextTag = "p" | "span" | "h1" | "h2" | "h3" | "div";

type RevealTextProps<T extends RevealTextTag = "p"> = {
	as?: T;
	phase: RevealPhase;
	split?: RevealSplit;
	profile?: RevealProfile;
	children: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export function RevealText<T extends RevealTextTag = "p">({
	as,
	phase,
	split = "words",
	profile,
	children,
	...rest
}: RevealTextProps<T>) {
	const groupContext = useRevealGroupContext();
	const tag = (as ?? "p") as RevealTextTag;
	const nodeRef = useRef<HTMLElement | null>(null);
	const hasAnimatedRef = useRef(false);
	const [isHiddenBeforeReveal, setIsHiddenBeforeReveal] = useState(true);

	const activeProfile = profile ?? groupContext?.profile ?? "cinematic";
	const isActive = groupContext?.isActive ?? true;
	const prefersReducedMotion = groupContext?.prefersReducedMotion ?? false;

	useEffect(() => {
		if (!isActive) {
			return;
		}

		const node = nodeRef.current;

		if (!node) {
			return;
		}

		if (prefersReducedMotion) {
			hasAnimatedRef.current = true;
			setIsHiddenBeforeReveal(false);
			node.style.visibility = "visible";
			return;
		}

		let isMounted = true;
		let cleanup = () => {};

		const animate = async () => {
			const [gsapModule, splitTextModule] = await Promise.all([
				import("gsap"),
				import("gsap/SplitText"),
			]);

			if (!isMounted || !nodeRef.current) {
				return;
			}

			const { gsap } = gsapModule;
			const { SplitText } = splitTextModule;
			const phaseTiming = REVEAL_TIMINGS[activeProfile][phase];
			let splitTextInstance: InstanceType<typeof SplitText> | null = null;
			let tween: { kill: () => void } | null = null;
			let resizeRaf: number | null = null;

			gsap.registerPlugin(SplitText);
			setIsHiddenBeforeReveal(false);
			node.style.visibility = "visible";

			if (split === "none") {
				if (hasAnimatedRef.current) {
					return;
				}

				tween = gsap.fromTo(
					node,
					{
						opacity: 0,
						y: phaseTiming.y ?? 0,
						filter: `blur(${phaseTiming.blur ?? 0}px)`,
					},
					{
						opacity: 1,
						y: 0,
						filter: "blur(0px)",
						duration: phaseTiming.duration,
						delay: phaseTiming.delay,
						ease: REVEAL_EASE,
						clearProps: "transform,opacity,filter",
					},
				);

				hasAnimatedRef.current = true;
				cleanup = () => {
					tween?.kill();
				};
			} else {
				const runSplit = (shouldAnimate: boolean) => {
					if (splitTextInstance) {
						splitTextInstance.revert();
					}

					const originalHeight = node.getBoundingClientRect().height;

					if (originalHeight > 0) {
						node.style.minHeight = `${Math.ceil(originalHeight)}px`;
					}

					splitTextInstance = SplitText.create(node, {
						type: split,
						mask: split === "lines" ? "lines" : undefined,
					});

					const targets =
						split === "lines" ? splitTextInstance.lines : splitTextInstance.words;

					if (!shouldAnimate) {
						gsap.set(targets, {
							opacity: 1,
							yPercent: 0,
							clearProps: "transform,opacity",
						});
						node.style.removeProperty("min-height");
						return;
					}

					tween?.kill();
					tween = gsap.fromTo(
						targets,
						{
							opacity: 0,
							yPercent: phaseTiming.yPercent ?? 100,
						},
						{
							opacity: 1,
							yPercent: 0,
							duration: phaseTiming.duration,
							delay: phaseTiming.delay,
							stagger: phaseTiming.stagger,
							ease: REVEAL_EASE,
							clearProps: "transform,opacity",
							onComplete: () => {
								node.style.removeProperty("min-height");
							},
						},
					);
				};

				runSplit(!hasAnimatedRef.current);
				hasAnimatedRef.current = true;

				const onResize = () => {
					if (resizeRaf !== null) {
						window.cancelAnimationFrame(resizeRaf);
					}

					resizeRaf = window.requestAnimationFrame(() => {
						if (!isMounted || !nodeRef.current) {
							return;
						}

						runSplit(false);
					});
				};

				window.addEventListener("resize", onResize, { passive: true });

				cleanup = () => {
					window.removeEventListener("resize", onResize);
					if (resizeRaf !== null) {
						window.cancelAnimationFrame(resizeRaf);
					}
					tween?.kill();
					splitTextInstance?.revert();
					node.style.removeProperty("min-height");
				};
			}
		};

		void animate();

		return () => {
			isMounted = false;
			cleanup();
		};
	}, [activeProfile, isActive, phase, prefersReducedMotion, split]);

	const Component = tag;
	const componentProps = rest as ComponentPropsWithoutRef<T>;
	const style = isHiddenBeforeReveal
		? { ...(componentProps.style ?? {}), visibility: "hidden" as const }
		: componentProps.style;

	return (
		<Component ref={nodeRef as never} {...componentProps} style={style}>
			{children}
		</Component>
	);
}
