"use client";

import { useEffect, useRef, useState } from "react";

import type { HTMLAttributes, ReactNode } from "react";

import { useRevealGroupContext } from "./revealGroup";
import { REVEAL_EASE, REVEAL_TIMINGS } from "./timings";

import type { RevealPhase, RevealProfile } from "./timings";

type RevealProps = {
	as?: "div" | "span" | "li" | "article" | "section" | "p";
	phase: RevealPhase;
	profile?: RevealProfile;
	staggerIndex?: number;
	children?: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function Reveal({
	as = "div",
	phase,
	profile,
	staggerIndex = 0,
	children,
	style,
	...rest
}: RevealProps) {
	const groupContext = useRevealGroupContext();
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

		if (hasAnimatedRef.current) {
			return;
		}

		let isMounted = true;
		let tween: { kill: () => void } | null = null;

		const animate = async () => {
			const gsapModule = await import("gsap");

			if (!isMounted || !nodeRef.current) {
				return;
			}

			const { gsap } = gsapModule;
			const phaseTiming = REVEAL_TIMINGS[activeProfile][phase];

			setIsHiddenBeforeReveal(false);
			node.style.visibility = "visible";

			const staggerDelay = staggerIndex * (phaseTiming.stagger || 0.1);

			tween = gsap.fromTo(
				node,
				{
					opacity: 0,
					y: phaseTiming.y ?? 10,
					filter: `blur(${phaseTiming.blur ?? 6}px)`,
				},
				{
					opacity: 1,
					y: 0,
					filter: "blur(0px)",
					duration: phaseTiming.duration,
					delay: phaseTiming.delay + staggerDelay,
					ease: REVEAL_EASE,
					clearProps: "transform,opacity,filter",
				},
			);

			hasAnimatedRef.current = true;
		};

		void animate();

		return () => {
			isMounted = false;
			tween?.kill();
		};
	}, [activeProfile, isActive, phase, prefersReducedMotion, staggerIndex]);

	const Component = as;
	const computedStyle = isHiddenBeforeReveal
		? { ...style, visibility: "hidden" as const }
		: style;

	return (
		<Component
			ref={nodeRef as never}
			style={computedStyle}
			{...rest}
		>
			{children}
		</Component>
	);
}
