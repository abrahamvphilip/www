"use client";

import { useState, useEffect, useMemo, type ReactNode } from "react";
import { Loader } from "./loader";
import { PageLoadContext } from "./pageLoadContext";

type LoaderPhase = "loading" | "rackExit" | "wrapperSlide" | "done";

interface PageLoaderProps {
	children: ReactNode;
	duration?: number;
}

export function PageLoader({ children, duration = 3000 }: PageLoaderProps) {
	const [phase, setPhase] = useState<LoaderPhase>("loading");

	useEffect(() => {
		// Phase 1: Loading complete, start rack exit animation
		const rackExitTimer = setTimeout(() => {
			setPhase("rackExit");
		}, duration);

		return () => clearTimeout(rackExitTimer);
	}, [duration]);

	useEffect(() => {
		if (phase === "rackExit") {
			// Phase 2: After rack animation (600ms), slide wrapper up
			const wrapperSlideTimer = setTimeout(() => {
				setPhase("wrapperSlide");
			}, 600);

			return () => clearTimeout(wrapperSlideTimer);
		}

		if (phase === "wrapperSlide") {
			// Phase 3: After wrapper slides up (700ms), remove from DOM
			const doneTimer = setTimeout(() => {
				setPhase("done");
			}, 700);

			return () => clearTimeout(doneTimer);
		}
	}, [phase]);

	// Animations should only start after loader is completely done
	const contextValue = useMemo(
		() => ({ isLoaded: phase === "done" }),
		[phase]
	);

	// Determine CSS classes based on phase
	const rackExiting = phase === "rackExit" || phase === "wrapperSlide";
	const wrapperSliding = phase === "wrapperSlide";

	return (
		<PageLoadContext.Provider value={contextValue}>
			{/* Content - always rendered, loader covers it until done */}
			{children}

			{/* Loader overlay - covers content until animations should start */}
			{phase !== "done" && (
				<div
					className={`fixed inset-0 z-50 flex items-center justify-center ${
						wrapperSliding ? "loaderWrapperSliding" : ""
					}`}
					style={{
						backgroundColor: "var(--alabaster-25)",
						willChange: wrapperSliding ? "transform" : "auto",
					}}
				>
					<div className={rackExiting ? "loaderRackExiting" : ""}>
						<Loader />
					</div>
				</div>
			)}
		</PageLoadContext.Provider>
	);
}
