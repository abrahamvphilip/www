export const docsSourcePaths = {
  grid: "src/components/primitives/grid/grid.tsx",
  container: "src/components/primitives/container/container.tsx",
  segment: "src/components/primitives/segment/segment.tsx",
  gridDemo: "src/components/primitives/grid/gridPrimitiveDemoSection.tsx",
  containerDemo: "src/components/primitives/container/containerPrimitiveDemoSection.tsx",
  segmentDemo: "src/components/primitives/segment/segmentPrimitiveDemoSection.tsx",
} as const;

export const docsSourcePathList = [docsSourcePaths.grid, docsSourcePaths.container, docsSourcePaths.segment];
