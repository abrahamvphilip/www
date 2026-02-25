"use client";

import { useSyncExternalStore } from "react";

export type TokenBreakpoint = "mobile" | "tablet" | "desktop";

export interface TokenViewportSnapshot {
	width: number;
	breakpoint: TokenBreakpoint;
	minMobile: number | null;
	minTablet: number | null;
	minDesktop: number | null;
	pageLimit: number | null;
}

const REQUIRED_TOKENS = [
	"--bp-min-mobile",
	"--bp-min-tablet",
	"--bp-min-desktop",
	"--page-width",
	"--page-limit",
	"--container-gutter-mobile",
	"--container-gutter-tablet",
	"--container-gutter-desktop",
	"--segment-padding-mobile",
	"--segment-padding",
	"--grid-column-count",
] as const;

let initialized = false;
let teardown: (() => void) | null = null;
let minMobile: number | null = null;
let minTablet: number | null = null;
let minDesktop: number | null = null;
let pageLimit: number | null = null;

let snapshot: TokenViewportSnapshot = {
	width: 0,
	breakpoint: "mobile",
	minMobile: null,
	minTablet: null,
	minDesktop: null,
	pageLimit: null,
};
const serverSnapshot: TokenViewportSnapshot = Object.freeze({
	width: 0,
	breakpoint: "mobile",
	minMobile: null,
	minTablet: null,
	minDesktop: null,
	pageLimit: null,
});

const subscribers = new Set<() => void>();
const warnedMessages = new Set<string>();

function warnDev(message: string) {
	if (process.env.NODE_ENV === "production" || warnedMessages.has(message)) {
		return;
	}

	warnedMessages.add(message);
	console.warn(message);
}

function getTokenValue(rootStyle: CSSStyleDeclaration, tokenName: string) {
	return rootStyle.getPropertyValue(tokenName).trim();
}

function measureTokenPx(tokenName: string) {
	if (typeof document === "undefined") {
		return null;
	}

	const probe = document.createElement("div");
	probe.style.position = "absolute";
	probe.style.inset = "0";
	probe.style.visibility = "hidden";
	probe.style.pointerEvents = "none";
	probe.style.inlineSize = `var(${tokenName})`;
	probe.style.blockSize = "0";
	probe.style.overflow = "hidden";

	document.body.appendChild(probe);
	const measured = Number.parseFloat(getComputedStyle(probe).inlineSize);
	probe.remove();

	return Number.isFinite(measured) ? measured : null;
}

function emitSubscribers() {
	subscribers.forEach((subscriber) => subscriber());
}

function calculateBreakpoint(width: number): TokenBreakpoint {
	if (minDesktop !== null && width >= minDesktop) {
		return "desktop";
	}

	if (minTablet !== null && width >= minTablet) {
		return "tablet";
	}

	return "mobile";
}

function updateSnapshot(width: number) {
	snapshot = {
		width,
		breakpoint: calculateBreakpoint(width),
		minMobile,
		minTablet,
		minDesktop,
		pageLimit,
	};
}

function initializeTokenViewportStore() {
	if (initialized || typeof window === "undefined") {
		return;
	}

	initialized = true;

	const rootStyle = getComputedStyle(document.documentElement);
	const missingTokens = REQUIRED_TOKENS.filter(
		(token) => !getTokenValue(rootStyle, token),
	);

	if (missingTokens.length > 0) {
		warnDev(
			`[LayoutPrimitives] Missing required tokens in src/app/tokens.css: ${missingTokens.join(
				", ",
			)}.`,
		);
	}

	minMobile = measureTokenPx("--bp-min-mobile");
	minTablet = measureTokenPx("--bp-min-tablet");
	minDesktop = measureTokenPx("--bp-min-desktop");
	pageLimit = measureTokenPx("--page-limit");

	if (minTablet === null || minDesktop === null || pageLimit === null) {
		warnDev(
			"[LayoutPrimitives] Could not resolve --bp-min-tablet, --bp-min-desktop, or --page-limit from tokens.css.",
		);
	}

	const onResize = () => {
		const width = window.innerWidth;
		const previousBreakpoint = snapshot.breakpoint;
		const previousWidth = snapshot.width;

		updateSnapshot(width);

		if (previousBreakpoint !== snapshot.breakpoint || previousWidth !== width) {
			emitSubscribers();
		}
	};

	updateSnapshot(window.innerWidth);
	window.addEventListener("resize", onResize);
	teardown = () => window.removeEventListener("resize", onResize);
}

function subscribe(subscriber: () => void) {
	initializeTokenViewportStore();
	subscribers.add(subscriber);

	return () => {
		subscribers.delete(subscriber);

		if (subscribers.size === 0 && teardown) {
			teardown();
			teardown = null;
			initialized = false;
		}
	};
}

function getSnapshot() {
	initializeTokenViewportStore();
	return snapshot;
}

function getServerSnapshot(): TokenViewportSnapshot {
	return serverSnapshot;
}

export function useTokenViewport() {
	return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
