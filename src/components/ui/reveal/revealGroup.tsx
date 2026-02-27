"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

import type { ReactNode } from "react";

import type { RevealProfile } from "./timings";
import { usePageLoad } from "../pageLoadContext";

type RevealGroupContextValue = {
	isActive: boolean;
	prefersReducedMotion: boolean;
	profile: RevealProfile;
};

const RevealGroupContext = createContext<RevealGroupContextValue | undefined>(
	undefined,
);

type RevealGroupProps = {
	children: ReactNode;
	className?: string;
	once?: boolean;
	threshold?: number;
	rootMargin?: string;
	profile?: RevealProfile;
};

export function RevealGroup({
	children,
	className,
	once = true,
	threshold = 0.15,
	rootMargin = "0px 0px -5% 0px",
	profile = "cinematic",
}: RevealGroupProps) {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const [isInView, setIsInView] = useState(false);
	const [hasTriggered, setHasTriggered] = useState(false);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
	const { isLoaded } = usePageLoad();

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		const onChange = () => setPrefersReducedMotion(media.matches);

		onChange();
		media.addEventListener("change", onChange);

		return () => media.removeEventListener("change", onChange);
	}, []);

	useEffect(() => {
		// Wait for page loader to finish before observing
		if (!isLoaded) {
			return;
		}

		if (prefersReducedMotion) {
			return;
		}

		const node = rootRef.current;

		if (!node || typeof window === "undefined") {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.target !== node) {
						continue;
					}

					if (entry.isIntersecting) {
						setIsInView(true);
						setHasTriggered(true);

						if (once) {
							observer.unobserve(node);
						}
					} else if (!once) {
						setIsInView(false);
					}
				}
			},
			{ threshold, rootMargin },
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, [isLoaded, once, prefersReducedMotion, rootMargin, threshold]);

	const isActive = prefersReducedMotion || (once ? hasTriggered : isInView);

	const contextValue = useMemo(
		() => ({ isActive, prefersReducedMotion, profile }),
		[isActive, prefersReducedMotion, profile],
	);

	return (
		<RevealGroupContext.Provider value={contextValue}>
			<div ref={rootRef} className={className}>
				{children}
			</div>
		</RevealGroupContext.Provider>
	);
}

export function useRevealGroupContext() {
	return useContext(RevealGroupContext);
}
