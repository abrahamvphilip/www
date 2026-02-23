export type SectionId =
  | "KKTuv"
  | "YHDHg"
  | "D2Lup"
  | "IYsCw"
  | "jAwkA"
  | "X6Q8j"
  | "oqmDi"
  | "gwgPH"
  | "atC3C"
  | "p8x5I"
  | "QEonC"
  | "3rLbN";

export type WaveId = "A" | "B" | "C";

export type Severity = "blocker" | "critical" | "major" | "minor";

export interface DesignSourceLock {
  locked: boolean;
  lockStatus: "ready" | "blocked_waiting_for_mcp" | "expired";
  timestamp: string;
  operator: string;
  source: {
    figmaUrl: string;
    nodeId: string;
    fileKey: string;
  };
  checksum: string | null;
}

export interface SectionSpec {
  sectionId: SectionId;
  wave: WaveId;
  figmaNodeId: string;
  status: "ready" | "blocked_waiting_for_figma_mcp";
  layout: {
    frame: { width: number; height?: number } | null;
    padding: number[] | null;
    gap: number | null;
    layoutMode: "horizontal" | "vertical" | "none" | null;
  };
  typography: {
    family: string;
    size: number;
    weight: string | number;
    lineHeight: number | null;
    letterSpacing?: number | null;
  }[];
  colors: {
    role: "fill" | "stroke" | "text";
    value: string;
  }[];
  effects: {
    type: "shadow" | "blur" | "gradient";
    value: string;
  }[];
  copy: {
    locked: boolean;
    lines: string[];
  };
}

export interface DefectItem {
  id: string;
  sectionId: SectionId;
  filePath: string;
  component: string;
  selector: string;
  property: string;
  expected: string;
  actual: string;
  severity: Severity;
  fixHint: string;
}

export interface CheckerResult {
  sectionId: SectionId;
  iteration: number;
  checkerSubagent: string;
  status: "pass" | "fail" | "blocked";
  pixelMismatchPct: number | null;
  geometryTolerancePx: number | null;
  typographyMatch: boolean | null;
  copyMatch: boolean | null;
  defects: DefectItem[];
}

export interface SubagentTaskStatus {
  sectionId: SectionId;
  wave: WaveId;
  builderSubagent: string;
  currentCheckerSubagent: string | null;
  iteration: number;
  state: "blocked" | "in_progress" | "failed" | "complete";
  escalation: {
    escalated: boolean;
    reason: string | null;
  };
}
