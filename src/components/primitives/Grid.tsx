import type { ComponentPropsWithoutRef, CSSProperties, ElementType, ReactNode } from "react";

type ResponsiveValue<T> = {
  mobile?: T;
  tablet?: T;
  desktop?: T;
};

type GridBaseProps = Omit<ComponentPropsWithoutRef<"div">, "children" | "className" | "style" | "wrap"> & {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

interface GridContainerProps extends GridBaseProps {
  mode: "container";
  direction?: "ltr" | "rtl";
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: CSSProperties["flexWrap"];
  columns?: ResponsiveValue<number>;
  gutter?: ResponsiveValue<number | string>;
  gapY?: ResponsiveValue<number | string>;
}

interface GridItemProps extends GridBaseProps {
  mode: "item";
  align?: CSSProperties["alignSelf"];
  padding?: boolean;
  span?: ResponsiveValue<number | string>;
  start?: ResponsiveValue<number>;
}

export type GridProps = GridContainerProps | GridItemProps;

type GridInlineStyle = CSSProperties & Record<`--${string}`, string | number | undefined>;

const GRID_COLUMNS_MOBILE_REF = "var(--grid-columns-mobile,var(--grid-column-count))";
const GRID_COLUMNS_TABLET_REF = "var(--grid-columns-tablet,var(--grid-column-count))";
const GRID_COLUMNS_DESKTOP_REF = "var(--grid-columns-desktop,var(--grid-column-count))";

function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

function toLength(value: number | string): string {
  return typeof value === "number" ? `${value}px` : value;
}

function sanitizeColumnCount(value: number): string | undefined {
  if (!Number.isFinite(value) || value <= 0) {
    return undefined;
  }

  return String(Math.round(value));
}

function resolveLengthResponsive(
  value: ResponsiveValue<number | string> | undefined,
  defaults: { mobile: string; tablet: string; desktop: string }
): { mobile: string; tablet: string; desktop: string } {
  const mobile = value?.mobile !== undefined ? toLength(value.mobile) : defaults.mobile;
  const tablet = value?.tablet !== undefined ? toLength(value.tablet) : mobile;
  const desktop = value?.desktop !== undefined ? toLength(value.desktop) : tablet;

  return { mobile, tablet, desktop };
}

function resolveColumnResponsive(value: ResponsiveValue<number> | undefined): { mobile: string; tablet: string; desktop: string } {
  const mobile = value?.mobile !== undefined ? sanitizeColumnCount(value.mobile) : undefined;
  const tablet = value?.tablet !== undefined ? sanitizeColumnCount(value.tablet) : mobile;
  const desktop = value?.desktop !== undefined ? sanitizeColumnCount(value.desktop) : tablet;

  return {
    mobile: mobile ?? "var(--grid-column-count)",
    tablet: tablet ?? "var(--grid-column-count)",
    desktop: desktop ?? "var(--grid-column-count)",
  };
}

function resolveSpanResponsive(value: ResponsiveValue<number | string> | undefined): { mobile: number | string; tablet: number | string; desktop: number | string } {
  const mobile = value?.mobile ?? "100%";
  const tablet = value?.tablet ?? mobile;
  const desktop = value?.desktop ?? tablet;

  return { mobile, tablet, desktop };
}

function resolveStartResponsive(value: ResponsiveValue<number> | undefined): { mobile: number; tablet: number; desktop: number } {
  const mobile = value?.mobile ?? 1;
  const tablet = value?.tablet ?? mobile;
  const desktop = value?.desktop ?? tablet;

  return { mobile, tablet, desktop };
}

function spanToWidth(value: number | string, columnRef: string): string {
  if (typeof value !== "number") {
    return value;
  }

  if (!Number.isFinite(value) || value <= 0) {
    return "0%";
  }

  return `calc((${value} / ${columnRef}) * 100%)`;
}

function startToOffset(value: number, columnRef: string): string {
  if (!Number.isFinite(value)) {
    return "0%";
  }

  const normalized = Math.floor(value);
  if (normalized <= 1) {
    return "0%";
  }

  return `calc(((${normalized} - 1) / ${columnRef}) * 100%)`;
}

function wrapClassName(value: CSSProperties["flexWrap"]): string {
  if (value === "nowrap") {
    return "flex-nowrap";
  }

  if (value === "wrap-reverse") {
    return "flex-wrap-reverse";
  }

  return "flex-wrap";
}

function containerClassName(direction: "ltr" | "rtl", wrap: CSSProperties["flexWrap"], className?: string): string {
  return cx(
    "flex",
    direction === "rtl" ? "flex-row-reverse" : "flex-row",
    wrapClassName(wrap),
    "mx-[calc(var(--grid-gutter-current)/-2)]",
    "gap-y-[var(--grid-gap-y-current)]",
    "[--grid-columns-current:var(--grid-columns-mobile,var(--grid-column-count))]",
    "[--grid-gutter-current:var(--grid-gutter-mobile,var(--container-gutter-mobile,var(--gutter)))]",
    "[--grid-gap-y-current:var(--grid-gap-y-mobile,0px)]",
    "min-[var(--bp-min-tablet)]:[--grid-columns-current:var(--grid-columns-tablet,var(--grid-column-count))]",
    "min-[var(--bp-min-tablet)]:[--grid-gutter-current:var(--grid-gutter-tablet,var(--container-gutter-tablet,var(--gutter)))]",
    "min-[var(--bp-min-tablet)]:[--grid-gap-y-current:var(--grid-gap-y-tablet,0px)]",
    "min-[var(--bp-min-desktop)]:[--grid-columns-current:var(--grid-columns-desktop,var(--grid-column-count))]",
    "min-[var(--bp-min-desktop)]:[--grid-gutter-current:var(--grid-gutter-desktop,var(--container-gutter-desktop,var(--gutter)))]",
    "min-[var(--bp-min-desktop)]:[--grid-gap-y-current:var(--grid-gap-y-desktop,0px)]",
    className
  );
}

function itemClassName(padding: boolean, className?: string): string {
  return cx(
    "flex-none",
    padding ? "px-[calc(var(--grid-gutter-current)/2)]" : undefined,
    "w-[var(--grid-item-width-current)]",
    "[margin-inline-start:var(--grid-item-start-current)]",
    "[--grid-gutter-current:var(--grid-gutter-mobile,var(--container-gutter-mobile,var(--gutter)))]",
    "[--grid-item-width-current:var(--grid-item-width-mobile)]",
    "[--grid-item-start-current:var(--grid-item-start-mobile)]",
    "min-[var(--bp-min-tablet)]:[--grid-gutter-current:var(--grid-gutter-tablet,var(--container-gutter-tablet,var(--gutter)))]",
    "min-[var(--bp-min-tablet)]:[--grid-item-width-current:var(--grid-item-width-tablet)]",
    "min-[var(--bp-min-tablet)]:[--grid-item-start-current:var(--grid-item-start-tablet)]",
    "min-[var(--bp-min-desktop)]:[--grid-gutter-current:var(--grid-gutter-desktop,var(--container-gutter-desktop,var(--gutter)))]",
    "min-[var(--bp-min-desktop)]:[--grid-item-width-current:var(--grid-item-width-desktop)]",
    "min-[var(--bp-min-desktop)]:[--grid-item-start-current:var(--grid-item-start-desktop)]",
    className
  );
}

export function Grid(props: GridProps) {
  if (props.mode === "container") {
    const {
      as: Element = "div",
      className,
      style,
      children,
      direction = "ltr",
      align = "stretch",
      justify = "flex-start",
      wrap = "wrap",
      columns,
      gutter,
      gapY,
      ...rest
    } = props;

    const resolvedColumns = resolveColumnResponsive(columns);
    const resolvedGutter = resolveLengthResponsive(gutter, {
      mobile: "var(--container-gutter-mobile,var(--gutter))",
      tablet: "var(--container-gutter-tablet,var(--gutter))",
      desktop: "var(--container-gutter-desktop,var(--gutter))",
    });
    const resolvedGapY = resolveLengthResponsive(gapY, {
      mobile: "0px",
      tablet: "0px",
      desktop: "0px",
    });

    const containerStyle: GridInlineStyle = {
      "--grid-columns-mobile": resolvedColumns.mobile,
      "--grid-columns-tablet": resolvedColumns.tablet,
      "--grid-columns-desktop": resolvedColumns.desktop,
      "--grid-gutter-mobile": resolvedGutter.mobile,
      "--grid-gutter-tablet": resolvedGutter.tablet,
      "--grid-gutter-desktop": resolvedGutter.desktop,
      "--grid-gap-y-mobile": resolvedGapY.mobile,
      "--grid-gap-y-tablet": resolvedGapY.tablet,
      "--grid-gap-y-desktop": resolvedGapY.desktop,
      alignItems: align,
      justifyContent: justify,
      ...style,
    };

    return (
      <Element className={containerClassName(direction, wrap, className)} style={containerStyle} {...rest}>
        {children}
      </Element>
    );
  }

  const {
    as: Element = "div",
    className,
    style,
    children,
    align = "stretch",
    padding = true,
    span,
    start,
    ...rest
  } = props;

  const resolvedSpan = resolveSpanResponsive(span);
  const resolvedStart = resolveStartResponsive(start);

  const itemStyle: GridInlineStyle = {
    "--grid-item-width-mobile": spanToWidth(resolvedSpan.mobile, GRID_COLUMNS_MOBILE_REF),
    "--grid-item-width-tablet": spanToWidth(resolvedSpan.tablet, GRID_COLUMNS_TABLET_REF),
    "--grid-item-width-desktop": spanToWidth(resolvedSpan.desktop, GRID_COLUMNS_DESKTOP_REF),
    "--grid-item-start-mobile": startToOffset(resolvedStart.mobile, GRID_COLUMNS_MOBILE_REF),
    "--grid-item-start-tablet": startToOffset(resolvedStart.tablet, GRID_COLUMNS_TABLET_REF),
    "--grid-item-start-desktop": startToOffset(resolvedStart.desktop, GRID_COLUMNS_DESKTOP_REF),
    alignSelf: align,
    ...style,
  };

  return (
    <Element className={itemClassName(padding, className)} style={itemStyle} {...rest}>
      {children}
    </Element>
  );
}
