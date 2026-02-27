"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { ComponentPropsWithoutRef, CSSProperties } from "react";

import { useRevealGroupContext } from "./revealGroup";
import { usePageLoad } from "../pageLoadContext";

type RevealImageProps = Omit<
	ComponentPropsWithoutRef<typeof Image>,
	"className" | "style"
> & {
	/** Optional delay before animation starts (in seconds) */
	delay?: number;
	/** Animation duration in milliseconds */
	duration?: number;
	/** Starting scale factor */
	startScale?: number;
	/** Class name for the wrapper div */
	wrapperClassName?: string;
	/** Style for the wrapper div */
	wrapperStyle?: CSSProperties;
	/** Class name for the image element */
	imageClassName?: string;
};

export function RevealImage({
	delay = 0,
	duration = 500,
	startScale = 1.5,
	wrapperClassName,
	wrapperStyle,
	imageClassName,
	fill,
	...imageProps
}: RevealImageProps) {
	const groupContext = useRevealGroupContext();
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [hasAnimated, setHasAnimated] = useState(false);
	const [hasTriggered, setHasTriggered] = useState(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
	const { isLoaded } = usePageLoad();

	// Check for reduced motion preference
	useEffect(() => {
		if (typeof window === "undefined") return;

		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const onChange = () => setPrefersReducedMotion(media.matches);

		onChange();
		media.addEventListener("change", onChange);

		return () => media.removeEventListener("change", onChange);
	}, []);

	// Use group context if available, otherwise set up own observer
	const isGroupActive = groupContext?.isActive;
	const groupPrefersReducedMotion = groupContext?.prefersReducedMotion;

	// Self-observe if not in a RevealGroup
	useEffect(() => {
		// If we're in a RevealGroup, skip self-observation
		if (groupContext) return;

		// Wait for page loader to finish
		if (!isLoaded) return;

		if (prefersReducedMotion) return;

		const node = containerRef.current;
		if (!node || typeof window === "undefined") return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.target !== node) continue;

					if (entry.isIntersecting) {
						setHasTriggered(true);
						observer.unobserve(node);
					}
				}
			},
			{ threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, [groupContext, isLoaded, prefersReducedMotion]);

	// Determine if animation should be active
	const shouldAnimate = groupContext ? isGroupActive : hasTriggered;

	const reducedMotion = groupContext
		? groupPrefersReducedMotion
		: prefersReducedMotion;

	// Run animation
	useEffect(() => {
		if (!shouldAnimate) return;

		const node = containerRef.current;
		if (!node) return;

		if (reducedMotion) {
			setHasAnimated(true);
			return;
		}

		if (hasAnimated) return;

		let isMounted = true;
		let tween: { kill: () => void } | null = null;

		const animate = async () => {
			const gsapModule = await import("gsap");

			if (!isMounted || !containerRef.current) return;

			const { gsap } = gsapModule;

			tween = gsap.fromTo(
				node,
				{ scale: startScale },
				{
					scale: 1,
					duration: duration / 1000,
					delay: delay,
					ease: "expo.out",
					onComplete: () => {
						setHasAnimated(true);
					},
				},
			);
		};

		void animate();

		return () => {
			isMounted = false;
			tween?.kill();
		};
	}, [delay, duration, hasAnimated, reducedMotion, shouldAnimate, startScale]);

	// For fill mode, the wrapper needs to be the positioned container
	const wrapperStyles: CSSProperties = fill
		? {
				...wrapperStyle,
				position: wrapperStyle?.position ?? "relative",
				overflow: "hidden",
				transform:
					hasAnimated || reducedMotion ? undefined : `scale(${startScale})`,
				willChange: hasAnimated ? undefined : "transform",
			}
		: {
				...wrapperStyle,
				overflow: "hidden",
				transform:
					hasAnimated || reducedMotion ? undefined : `scale(${startScale})`,
				willChange: hasAnimated ? undefined : "transform",
			};

	return (
		<div ref={containerRef} className={wrapperClassName} style={wrapperStyles}>
			<Image {...imageProps} fill={fill} className={imageClassName} />
		</div>
	);
}
