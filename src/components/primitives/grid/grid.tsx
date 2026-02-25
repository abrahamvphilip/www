"use client";

import { type CSSProperties, type ElementType, type ReactNode } from "react";

import {
	type TokenBreakpoint,
	useTokenViewport,
} from "@/components/primitives/_shared/useTokenViewport";

type GridStyle = CSSProperties &
	Record<`--${string}`, string | number | undefined>;
type GridFlow = "row" | "col";
type GridDirection = "ltr" | "rtl";
type GridOffset = number | string;
type GridAlign = NonNullable<
	CSSProperties["alignItems"] | CSSProperties["alignSelf"]
>;
type GridJustify = NonNullable<CSSProperties["justifyContent"]>;
type GridWrap = NonNullable<CSSProperties["flexWrap"]>;

const warnedMessages = new Set<string>();

export interface GridProps {
	as?: ElementType;
	className?: string;
	flow?: GridFlow;
	direction?: GridDirection;
	align?: GridAlign;
	justify?: GridJustify;
	wrap?: GridWrap;
	gutter?: number | string;
	mobile?: number;
	tablet?: number;
	desktop?: number;
	offsetLeft?: GridOffset;
	offsetLeftAlt?: GridOffset;
	offsetRight?: GridOffset;
	children?: ReactNode;
}

function warnDev(message: string) {
	if (process.env.NODE_ENV === "production" || warnedMessages.has(message)) {
		return;
	}

	warnedMessages.add(message);
	console.warn(message);
}

function normalizeSpan(
	span: number | undefined,
	label: "mobile" | "tablet" | "desktop",
) {
	if (typeof span !== "number") {
		return undefined;
	}

	if (Number.isFinite(span) && span > 0) {
		return span;
	}

	warnDev(
		`[Grid] Invalid ${label} span "${String(span)}". Expected a positive number.`,
	);
	return undefined;
}

function resolveByBreakpoint<T>(
	breakpoint: TokenBreakpoint,
	values: {
		mobile?: T;
		tablet?: T;
		desktop?: T;
	},
) {
	if (breakpoint === "desktop") {
		return values.desktop ?? values.tablet ?? values.mobile;
	}

	if (breakpoint === "tablet") {
		return values.tablet ?? values.mobile;
	}

	return values.mobile;
}

function normalizeGutter(gutter: number | string | undefined) {
	if (typeof gutter === "number") {
		if (Number.isFinite(gutter) && gutter > 0) {
			return `${gutter}px`;
		}

		warnDev(
			`[Grid] Invalid gutter "${String(gutter)}". Expected a positive number.`,
		);
		return "var(--gutter)";
	}

	if (typeof gutter === "string") {
		const trimmed = gutter.trim();
		if (trimmed.length > 0) {
			return trimmed;
		}

		warnDev('[Grid] Invalid gutter "". Expected a CSS length or token.');
	}

	return "var(--gutter)";
}

function convertify(offset: GridOffset | undefined, label: string) {
	if (typeof offset === "undefined") {
		return undefined;
	}

	if (typeof offset === "number") {
		if (Number.isFinite(offset) && offset >= 0) {
			return `calc(${offset} * (((100% - ((var(--grid-column-count) - 1) * var(--grid-gutter-current))) / var(--grid-column-count)) + var(--grid-gutter-current)))`;
		}

		warnDev(
			`[Grid] Invalid ${label} "${String(offset)}". Expected a non-negative number.`,
		);
		return undefined;
	}

	const trimmed = offset.trim();
	if (trimmed.length > 0) {
		return trimmed;
	}

	warnDev(
		`[Grid] Invalid ${label} "${offset}". Expected a CSS length or token.`,
	);
	return undefined;
}

function applyOffsetLeftAltAdjustment(
	offset: GridOffset | undefined,
	resolvedOffset: string | undefined,
) {
	if (typeof offset !== "number" || typeof resolvedOffset === "undefined") {
		return resolvedOffset;
	}

	return `calc(${resolvedOffset} - (var(--grid-gutter-current) / 2))`;
}

export function Grid({
	as,
	className,
	flow = "col",
	direction = "ltr",
	align = "stretch",
	justify = "flex-start",
	wrap = "wrap",
	gutter,
	mobile,
	tablet,
	desktop,
	offsetLeft,
	offsetLeftAlt,
	offsetRight,
	children,
}: GridProps) {
	const { breakpoint } = useTokenViewport();
	const Component = as ?? "div";
	const resolvedGutter = normalizeGutter(gutter);
	const resolvedSpan = resolveByBreakpoint(breakpoint, {
		mobile: normalizeSpan(mobile, "mobile"),
		tablet: normalizeSpan(tablet, "tablet"),
		desktop: normalizeSpan(desktop, "desktop"),
	});

	const style: GridStyle = { "--grid-gutter-current": resolvedGutter };

	if (flow === "row") {
		Object.assign(style, {
			display: "flex",
			flexWrap: wrap,
			alignItems: align as CSSProperties["alignItems"],
			justifyContent: justify,
			marginLeft: "calc(var(--grid-gutter-current) / -2)",
			marginRight: "calc(var(--grid-gutter-current) / -2)",
			flexDirection: direction === "rtl" ? "row-reverse" : "row",
		} satisfies GridStyle);
	} else {
		const leftOffsetBase = convertify(offsetLeft, "offsetLeft");
		const leftOffsetAltBase = applyOffsetLeftAltAdjustment(
			offsetLeftAlt,
			convertify(offsetLeftAlt, "offsetLeftAlt"),
		);
		const rightOffsetBase = convertify(offsetRight, "offsetRight");

		if (
			typeof leftOffsetBase !== "undefined" &&
			typeof leftOffsetAltBase !== "undefined"
		) {
			warnDev(
				"[Grid] Both offsetLeft and offsetLeftAlt were provided. offsetLeft takes precedence.",
			);
		}

		const resolvedLeftOffset = leftOffsetBase ?? leftOffsetAltBase;

		Object.assign(style, {
			flex: "none",
			alignSelf: align as CSSProperties["alignSelf"],
			paddingLeft: "calc(var(--grid-gutter-current) / 2)",
			paddingRight: "calc(var(--grid-gutter-current) / 2)",
			width:
				"calc((var(--grid-span-current) / var(--grid-column-count)) * 100%)",
			"--grid-span-current":
				typeof resolvedSpan === "number"
					? `${resolvedSpan}`
					: "var(--grid-column-count)",
			marginLeft: resolvedLeftOffset,
			marginRight: rightOffsetBase,
		} satisfies GridStyle);
	}

	return (
		<Component className={className} style={style} dir={direction}>
			{children}
		</Component>
	);
}
