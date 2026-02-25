import { type CSSProperties, type ElementType, type ReactNode } from "react";

type SegmentStyle = CSSProperties &
	Record<`--${string}`, string | number | undefined>;

export interface SegmentProps {
	as?: ElementType;
	className?: string;
	children?: ReactNode;
}

export function Segment({ as, className, children }: SegmentProps) {
	const Component = as ?? "div";

	const style: SegmentStyle = {
		flexGrow: 1,
		paddingTop: "var(--segment-padding-fluid)",
		paddingBottom: "var(--segment-padding-fluid)",
	};

	return (
		<Component className={className} style={style}>
			{children}
		</Component>
	);
}
