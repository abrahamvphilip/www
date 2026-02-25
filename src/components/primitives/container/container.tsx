import { type CSSProperties, type ElementType, type ReactNode } from "react";

type ContainerStyle = CSSProperties &
	Record<`--${string}`, string | number | undefined>;

export interface ContainerProps {
	as?: ElementType;
	className?: string;
	children?: ReactNode;
}

export function Container({ as, className, children }: ContainerProps) {
	const Component = as ?? "div";

	const style: ContainerStyle = {
		flexGrow: 1,
		marginInline: "auto",
		maxWidth: "var(--page-limit)",
		paddingInline: "var(--container-gutter-fluid)",
	};

	return (
		<Component className={className} style={style}>
			{children}
		</Component>
	);
}
