export const docsSourcePaths = {
  grid: "src/components/primitives/grid/Grid.tsx",
  container: "src/components/primitives/container/Container.tsx",
  segment: "src/components/primitives/segment/Segment.tsx",
  gridDemo: "src/components/primitives/grid/GridPrimitiveDemoSection.tsx",
  containerDemo: "src/components/primitives/container/ContainerPrimitiveDemoSection.tsx",
  segmentDemo: "src/components/primitives/segment/SegmentPrimitiveDemoSection.tsx",
} as const;

export const docsSourcePathList = [docsSourcePaths.grid, docsSourcePaths.container, docsSourcePaths.segment];
