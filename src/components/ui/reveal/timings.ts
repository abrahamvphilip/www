export type RevealProfile = "cinematic" | "crisp" | "snappy";

export type RevealPhase = "eyebrow" | "heading" | "subheading" | "description";

export type RevealSplit = "none" | "words" | "lines";

type RevealTiming = {
	delay: number;
	duration: number;
	stagger: number;
	y?: number;
	yPercent?: number;
	blur?: number;
};

export const REVEAL_EASE = "power3.out";

export const REVEAL_TIMINGS: Record<RevealProfile, Record<RevealPhase, RevealTiming>> =
	{
		cinematic: {
			eyebrow: {
				delay: 0,
				duration: 0.55,
				stagger: 0,
				y: 10,
				blur: 8,
			},
			heading: {
				delay: 0.45,
				duration: 0.9,
				stagger: 0.065,
				yPercent: 120,
			},
			subheading: {
				delay: 1.05,
				duration: 0.8,
				stagger: 0.055,
				yPercent: 120,
			},
			description: {
				delay: 1.55,
				duration: 0.45,
				stagger: 0.07,
				yPercent: 72,
			},
		},
		crisp: {
			eyebrow: {
				delay: 0,
				duration: 0.42,
				stagger: 0,
				y: 8,
				blur: 6,
			},
			heading: {
				delay: 0.26,
				duration: 0.7,
				stagger: 0.045,
				yPercent: 110,
			},
			subheading: {
				delay: 0.62,
				duration: 0.6,
				stagger: 0.04,
				yPercent: 105,
			},
			description: {
				delay: 0.94,
				duration: 0.34,
				stagger: 0.05,
				yPercent: 68,
			},
		},
		snappy: {
			eyebrow: {
				delay: 0,
				duration: 0.3,
				stagger: 0,
				y: 6,
				blur: 4,
			},
			heading: {
				delay: 0.15,
				duration: 0.42,
				stagger: 0.03,
				yPercent: 96,
			},
			subheading: {
				delay: 0.34,
				duration: 0.38,
				stagger: 0.028,
				yPercent: 92,
			},
			description: {
				delay: 0.52,
				duration: 0.28,
				stagger: 0.038,
				yPercent: 62,
			},
		},
	};
