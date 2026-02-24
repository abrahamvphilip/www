import type { ReactNode } from "react";

export type ComponentGroup = "primitives" | "ui";
export type BreakpointKey = "mobile" | "tablet" | "desktop";

export type ResponsiveNumber = Partial<Record<BreakpointKey, number>>;
export type ResponsiveLength = Partial<Record<BreakpointKey, string | number>>;

export type ControlKind =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "select"
  | "json"
  | "responsiveNumber"
  | "responsiveLength"
  | "elementType"
  | "reactNodePreset";

export type PropControl = {
  kind: ControlKind;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
};

export type PropDoc = {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description: string;
  control: PropControl;
};

export type ExamplePreset = {
  id: string;
  label: string;
  description: string;
  initialState: Record<string, unknown>;
};

export type ComponentDocEntry = {
  id: string;
  group: ComponentGroup;
  title: string;
  importPath: string;
  sourcePath: string;
  description: string;
  props: PropDoc[];
  presets: ExamplePreset[];
  render: (state: Record<string, unknown>) => ReactNode;
  toUsageCode: (state: Record<string, unknown>) => string;
};
