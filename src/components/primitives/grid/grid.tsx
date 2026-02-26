import { type CSSProperties, type ElementType, type ReactNode } from "react";

type GridStyle = CSSProperties & Record<`--${string}`, string | number>;

export interface GridProps {
	as?: ElementType;
	className?: string;
	flow?: "row" | "col";
	direction?: "ltr" | "rtl";
	mobile?: number;
	tablet?: number;
	desktop?: number;
	offsetLeft?: number;
	offsetLeftAlt?: number;
	offsetRight?: number;
	children?: ReactNode;
}

function offsetFormula(n: number) {
	return `calc(${n} * (((100% - ((var(--grid-column-count) - 1) * var(--grid-gutter-fluid))) / var(--grid-column-count)) + var(--grid-gutter-fluid)))`;
}

function resolveMarginLeft(
	offsetLeft: number | undefined,
	offsetLeftAlt: number | undefined,
) {
	if (typeof offsetLeft === "number" && offsetLeft > 0) {
		return offsetFormula(offsetLeft);
	}

	if (typeof offsetLeftAlt === "number") {
		return offsetLeftAlt === 0
			? "calc(var(--grid-gutter-fluid) / -2)"
			: `calc(${offsetFormula(offsetLeftAlt)} - (var(--grid-gutter-fluid) / 2))`;
	}

	return undefined;
}

export function Grid({
	as,
	className,
	flow = "col",
	direction = "ltr",
	mobile,
	tablet,
	desktop,
	offsetLeft,
	offsetLeftAlt,
	offsetRight,
	children,
}: GridProps) {
	const Component = as ?? "div";

	if (flow === "row") {
		return (
			<Component
				data-grid-row=""
				className={className}
				style={{
					flexDirection: direction === "rtl" ? "row-reverse" : "row",
				}}
				dir={direction}
			>
				{children}
			</Component>
		);
	}

	const style: GridStyle = {};

	if (mobile !== undefined) style["--span-m"] = mobile;
	if (tablet !== undefined) style["--span-t"] = tablet;
	if (desktop !== undefined) style["--span-d"] = desktop;

	const ml = resolveMarginLeft(offsetLeft, offsetLeftAlt);
	if (ml !== undefined) {
		style["--grid-ml"] = ml;
	}

	const mr =
		typeof offsetRight === "number" && offsetRight > 0
			? offsetFormula(offsetRight)
			: undefined;
	if (mr !== undefined) {
		style["--grid-mr"] = mr;
	}

	return (
		<Component
			data-grid-col=""
			className={className}
			style={style}
			dir={direction}
		>
			{children}
		</Component>
	);
}
