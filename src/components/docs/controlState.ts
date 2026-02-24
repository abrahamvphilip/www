import type { BreakpointKey, ResponsiveLength, ResponsiveNumber } from "@/components/docs/types";

const BREAKPOINTS: BreakpointKey[] = ["mobile", "tablet", "desktop"];

export function cloneState<T>(value: T): T {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value)) as T;
}

export function toOptionalString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0 ? value : undefined;
}

export function toBoolean(value: unknown, fallback = false) {
  return typeof value === "boolean" ? value : fallback;
}

export function toSelect(value: unknown, allowed: string[], fallback: string) {
  return typeof value === "string" && allowed.includes(value) ? value : fallback;
}

export function toNumber(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  }

  return undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function toResponsiveNumber(value: unknown): ResponsiveNumber | undefined {
  if (!isRecord(value)) {
    return undefined;
  }

  const next: ResponsiveNumber = {};

  BREAKPOINTS.forEach((breakpoint) => {
    const parsed = toNumber(value[breakpoint]);

    if (typeof parsed === "number") {
      next[breakpoint] = parsed;
    }
  });

  return Object.keys(next).length > 0 ? next : undefined;
}

export function toResponsiveLength(value: unknown): ResponsiveLength | undefined {
  if (!isRecord(value)) {
    return undefined;
  }

  const next: ResponsiveLength = {};

  BREAKPOINTS.forEach((breakpoint) => {
    const candidate = value[breakpoint];

    if (typeof candidate === "number" && Number.isFinite(candidate)) {
      next[breakpoint] = candidate;
      return;
    }

    if (typeof candidate === "string" && candidate.trim().length > 0) {
      const numberCandidate = Number(candidate);
      next[breakpoint] = Number.isFinite(numberCandidate) && /^-?\d+(\.\d+)?$/.test(candidate.trim())
        ? numberCandidate
        : candidate;
    }
  });

  return Object.keys(next).length > 0 ? next : undefined;
}

export function responsiveValueToCode(value: ResponsiveNumber | ResponsiveLength | undefined) {
  if (!value) {
    return undefined;
  }

  const chunks = BREAKPOINTS.filter((breakpoint) => breakpoint in value).map((breakpoint) => {
    const raw = value[breakpoint];

    if (typeof raw === "string") {
      return `${breakpoint}: ${JSON.stringify(raw)}`;
    }

    return `${breakpoint}: ${raw}`;
  });

  if (chunks.length === 0) {
    return undefined;
  }

  return `{ ${chunks.join(", ")} }`;
}

export function addPropLine(lines: string[], name: string, value: string | undefined) {
  if (value) {
    lines.push(`  ${name}={${value}}`);
  }
}

export function addStringPropLine(lines: string[], name: string, value: string | undefined) {
  if (value) {
    lines.push(`  ${name}=${JSON.stringify(value)}`);
  }
}
