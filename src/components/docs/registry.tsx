import type { ReactNode } from "react";

import { toSelect } from "@/components/docs/controlState";
import { docsSourcePaths } from "@/components/docs/sourcePaths";
import type { ComponentDocEntry } from "@/components/docs/types";
import { Container } from "@/components/primitives/container/container";
import { Grid } from "@/components/primitives/grid/grid";
import { Segment } from "@/components/primitives/segment/segment";

const ELEMENT_TAGS = ["div", "section", "article"];
const GRID_DIRECTION_OPTIONS = ["ltr", "rtl"];
const GRID_SPAN_OPTIONS = ["12", "10", "8", "6", "4", "3", "2", "1"];
const GRID_CHILD_PRESETS = ["cards", "metrics", "status"];

function parseSpan(value: unknown, fallback: number) {
  const raw = toSelect(value, GRID_SPAN_OPTIONS, String(fallback));
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function wrapPreview(children: ReactNode) {
  return <div className="rounded-[12px] border border-bunker-100/60 bg-gallery-25/45 p-3">{children}</div>;
}

function renderGridLegend(mobile: number, tablet: number, desktop: number) {
  const items = [
    { label: "Mobile", value: mobile, surface: "border-havelock-blue-150/70 bg-havelock-blue-25/50 text-havelock-blue-550" },
    { label: "Tablet", value: tablet, surface: "border-eucalyptus-150/70 bg-eucalyptus-25/50 text-eucalyptus-550" },
    { label: "Desktop", value: desktop, surface: "border-anzac-150/70 bg-anzac-25/50 text-anzac-550" },
  ];

  return (
    <div className="grid gap-2 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className={`rounded-[9px] border px-2.5 py-2 ${item.surface}`}>
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-bunker-550">{item.label}</p>
          <p className="mt-1 font-display text-xl leading-[1.2]">{item.value}/12</p>
        </div>
      ))}
    </div>
  );
}

function renderGridCards(
  preset: string,
  as: "div" | "section" | "article",
  direction: "ltr" | "rtl",
  mobile: number,
  tablet: number,
  desktop: number,
) {
  const cards =
    preset === "metrics"
      ? [
          { title: "Latency", detail: "p95 182ms", tone: "border-havelock-blue-150/70 bg-havelock-blue-25/55", accent: "bg-havelock-blue-325" },
          { title: "Events", detail: "14.2k / min", tone: "border-eucalyptus-150/70 bg-eucalyptus-25/55", accent: "bg-eucalyptus-325" },
          { title: "Coverage", detail: "98.7%", tone: "border-anzac-150/70 bg-anzac-25/55", accent: "bg-anzac-325" },
        ]
      : preset === "status"
        ? [
            { title: "Ready", detail: "All checks passing", tone: "border-eucalyptus-150/70 bg-eucalyptus-25/55", accent: "bg-eucalyptus-325" },
            { title: "Queue", detail: "6 pending jobs", tone: "border-havelock-blue-150/70 bg-havelock-blue-25/55", accent: "bg-havelock-blue-325" },
            { title: "Next", detail: "Promote release", tone: "border-purple-heart-150/70 bg-purple-heart-25/55", accent: "bg-purple-heart-325" },
          ]
        : [
            { title: "Token Columns", detail: "Uses --grid-column-count.", tone: "border-havelock-blue-150/70 bg-havelock-blue-25/55", accent: "bg-havelock-blue-325" },
            { title: "Span Math", detail: "Width = span / columns.", tone: "border-eucalyptus-150/70 bg-eucalyptus-25/55", accent: "bg-eucalyptus-325" },
            { title: "Direction", detail: "Supports ltr / rtl.", tone: "border-anzac-150/70 bg-anzac-25/55", accent: "bg-anzac-325" },
          ];

  return cards.map((card) => (
    <Grid key={card.title} as={as} direction={direction} mobile={mobile} tablet={tablet} desktop={desktop}>
      <article className={`h-full min-h-[132px] rounded-[10px] border p-3 ${card.tone}`}>
        <div className={`mb-3 h-1 w-14 rounded-full ${card.accent}`} />
        <p className="font-display text-[22px] leading-[1.12] text-bunker-800">{card.title}</p>
        <p className="mt-1 font-sans text-xs leading-[1.45] text-bunker-550">{card.detail}</p>
      </article>
    </Grid>
  ));
}

function gridUsageSnippet(state: Record<string, unknown>) {
  const as = toSelect(state.as, ELEMENT_TAGS, "div");
  const direction = toSelect(state.direction, GRID_DIRECTION_OPTIONS, "ltr");
  const mobile = parseSpan(state.mobile, 12);
  const tablet = parseSpan(state.tablet, 6);
  const desktop = parseSpan(state.desktop, 4);

  return `<Grid flow="row" direction="${direction}">
  <Grid as="${as}" direction="${direction}" mobile={${mobile}} tablet={${tablet}} desktop={${desktop}}>
    ...
  </Grid>
</Grid>`;
}

function containerUsageSnippet(state: Record<string, unknown>) {
  const as = toSelect(state.as, ELEMENT_TAGS, "div");

  return `<Container as="${as}">
  ...
</Container>`;
}

function segmentUsageSnippet(state: Record<string, unknown>) {
  const as = toSelect(state.as, ELEMENT_TAGS, "div");

  return `<Segment as="${as}">
  <Container>...</Container>
</Segment>`;
}

export const componentRegistry: ComponentDocEntry[] = [
  {
    id: "grid",
    group: "primitives",
    title: "Grid",
    importPath: "@/components/primitives/grid/grid",
    sourcePath: docsSourcePaths.grid,
    description: "Token-based row/column primitive with responsive span math, gutter handling, and optional offsets.",
    props: [
      {
        name: "as",
        type: "ElementType",
        required: false,
        defaultValue: '"div"',
        description: "Underlying semantic element.",
        control: { kind: "elementType", options: ELEMENT_TAGS },
      },
      {
        name: "flow",
        type: '"row" | "col"',
        required: false,
        defaultValue: '"col"',
        description: "Use row mode for grid wrappers and col mode for spanned items.",
        control: { kind: "select", options: ["col", "row"] },
      },
      {
        name: "direction",
        type: '"ltr" | "rtl"',
        required: false,
        defaultValue: '"ltr"',
        description: "Controls row direction (row vs row-reverse) and content direction.",
        control: { kind: "select", options: GRID_DIRECTION_OPTIONS },
      },
      {
        name: "mobile",
        type: "number",
        required: false,
        defaultValue: "var(--grid-column-count)",
        description: "Span value used below tablet breakpoint.",
        control: { kind: "select", options: GRID_SPAN_OPTIONS },
      },
      {
        name: "tablet",
        type: "number",
        required: false,
        defaultValue: "mobile",
        description: "Span value used from tablet to desktop breakpoint.",
        control: { kind: "select", options: GRID_SPAN_OPTIONS },
      },
      {
        name: "desktop",
        type: "number",
        required: false,
        defaultValue: "tablet",
        description: "Span value used at desktop breakpoint and above.",
        control: { kind: "select", options: GRID_SPAN_OPTIONS },
      },
      {
        name: "children",
        type: "Preview preset",
        required: false,
        defaultValue: '"cards"',
        description: "Preview content preset.",
        control: { kind: "reactNodePreset", options: GRID_CHILD_PRESETS },
      },
    ],
    presets: [
      {
        id: "thirds-ltr",
        label: "Thirds LTR",
        description: "Default 12/6/4 responsive thirds.",
        initialState: {
          as: "div",
          direction: "ltr",
          mobile: "12",
          tablet: "6",
          desktop: "4",
          children: "cards",
        },
      },
      {
        id: "halves-ltr",
        label: "Halves LTR",
        description: "Desktop halves with tablet split and full mobile width.",
        initialState: {
          as: "section",
          direction: "ltr",
          mobile: "12",
          tablet: "6",
          desktop: "6",
          children: "metrics",
        },
      },
      {
        id: "thirds-rtl",
        label: "Thirds RTL",
        description: "Same span contract with RTL direction.",
        initialState: {
          as: "article",
          direction: "rtl",
          mobile: "12",
          tablet: "6",
          desktop: "4",
          children: "status",
        },
      },
    ],
    render: (state) => {
      const as = toSelect(state.as, ELEMENT_TAGS, "div") as "div" | "section" | "article";
      const direction = toSelect(state.direction, GRID_DIRECTION_OPTIONS, "ltr") as "ltr" | "rtl";
      const mobile = parseSpan(state.mobile, 12);
      const tablet = parseSpan(state.tablet, 6);
      const desktop = parseSpan(state.desktop, 4);
      const children = toSelect(state.children, GRID_CHILD_PRESETS, "cards");

      return wrapPreview(
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-xs text-bunker-550">
            <p>
              <span className="font-mono uppercase tracking-[0.08em] text-bunker-425">direction:</span> {direction}
            </p>
            <p>
              <span className="font-mono uppercase tracking-[0.08em] text-bunker-425">mobile:</span> {mobile}
            </p>
            <p>
              <span className="font-mono uppercase tracking-[0.08em] text-bunker-425">tablet:</span> {tablet}
            </p>
            <p>
              <span className="font-mono uppercase tracking-[0.08em] text-bunker-425">desktop:</span> {desktop}
            </p>
          </div>

          {renderGridLegend(mobile, tablet, desktop)}

          <div className="rounded-[10px] border border-purple-heart-150/70 bg-purple-heart-25/35 p-2.5">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-purple-heart-550">Flex row + Grid items</p>
            <Grid flow="row" direction={direction}>
              {renderGridCards(children, as, direction, mobile, tablet, desktop)}
            </Grid>
          </div>

          <p className="font-sans text-xs leading-[1.55] text-bunker-550">
            Width formula: <code>width = (span / --grid-column-count) * 100%</code>, with token gutter padding per column.
          </p>
        </div>,
      );
    },
    toUsageCode: (state) => gridUsageSnippet(state),
  },
  {
    id: "container",
    group: "primitives",
    title: "Container",
    importPath: "@/components/primitives/container/container",
    sourcePath: docsSourcePaths.container,
    description: "Token-driven horizontal layout wrapper that applies responsive gutters and page width limits.",
    props: [
      {
        name: "as",
        type: "ElementType",
        required: false,
        defaultValue: '"div"',
        description: "Underlying semantic element for the wrapper.",
        control: { kind: "elementType", options: ELEMENT_TAGS },
      },
    ],
    presets: [
      {
        id: "container-default",
        label: "Default",
        description: "Centered content with token-driven responsive gutter behavior.",
        initialState: {
          as: "div",
        },
      },
    ],
    render: (state) => {
      const as = toSelect(state.as, ELEMENT_TAGS, "div") as "div" | "section" | "article";

      return wrapPreview(
        <div className="space-y-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-havelock-blue-550">Container boundary</p>
          <p className="font-sans text-xs leading-[1.55] text-bunker-550">
            Container applies <code>--container-gutter-*</code> per breakpoint and constrains width with <code>--page-width</code>.
          </p>
          <div className="rounded-[10px] border border-bunker-100/60 bg-alabaster-25 p-2">
            <Container as={as}>
              <div className="rounded-[10px] border border-havelock-blue-150/70 bg-havelock-blue-25/55 p-3 text-sm text-bunker-675">
                This content is wrapped by <strong>Container</strong> and aligned to the token-based page frame.
              </div>
            </Container>
          </div>
        </div>,
      );
    },
    toUsageCode: (state) => containerUsageSnippet(state),
  },
  {
    id: "segment",
    group: "primitives",
    title: "Segment",
    importPath: "@/components/primitives/segment/segment",
    sourcePath: docsSourcePaths.segment,
    description: "Token-driven vertical rhythm wrapper that manages top/bottom spacing across viewport ranges.",
    props: [
      {
        name: "as",
        type: "ElementType",
        required: false,
        defaultValue: '"div"',
        description: "Underlying semantic element for the vertical rhythm wrapper.",
        control: { kind: "elementType", options: ELEMENT_TAGS },
      },
    ],
    presets: [
      {
        id: "segment-default",
        label: "Default",
        description: "Segment with nested Container to show spacing and framing composition.",
        initialState: {
          as: "section",
        },
      },
    ],
    render: (state) => {
      const as = toSelect(state.as, ELEMENT_TAGS, "section") as "div" | "section" | "article";

      return wrapPreview(
        <div className="space-y-3">
          <div className="flex flex-wrap gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-eucalyptus-550">Segment boundary</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-havelock-blue-550">Container boundary</p>
          </div>
          <p className="font-sans text-xs leading-[1.55] text-bunker-550">
            Segment resolves vertical spacing from <code>--segment-padding-mobile</code>, <code>--segment-padding</code>, and page-limit interpolation.
          </p>
          <div className="rounded-[10px] border border-bunker-100/60 bg-alabaster-25 p-2">
            <Segment as={as}>
              <div className="rounded-[10px] border border-eucalyptus-150/70 bg-eucalyptus-25/45 p-2.5">
                <Container>
                  <div className="rounded-[10px] border border-havelock-blue-150/70 bg-havelock-blue-25/55 p-3 text-sm text-bunker-675">
                    Segment provides vertical rhythm; Container provides horizontal framing.
                  </div>
                </Container>
              </div>
            </Segment>
          </div>
        </div>,
      );
    },
    toUsageCode: (state) => segmentUsageSnippet(state),
  },
];
