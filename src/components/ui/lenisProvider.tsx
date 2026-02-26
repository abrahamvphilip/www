"use client";

import { useEffect } from "react";

import Lenis from "lenis";

import type { ReactNode } from "react";

type LenisProviderProps = {
	children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
	useEffect(() => {
		const lenis = new Lenis({
			autoRaf: false,
		});

		let frameId = 0;

		const raf = (time: number) => {
			lenis.raf(time);
			frameId = window.requestAnimationFrame(raf);
		};

		frameId = window.requestAnimationFrame(raf);

		return () => {
			window.cancelAnimationFrame(frameId);
			lenis.destroy();
		};
	}, []);

	return children;
}
