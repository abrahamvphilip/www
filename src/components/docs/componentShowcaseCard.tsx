"use client";

import { useMemo, useState } from "react";

import { CodePanel } from "@/components/docs/codePanel";
import { cloneState } from "@/components/docs/controlState";
import { PropTable } from "@/components/docs/propTable";
import type { ComponentDocEntry, PropDoc } from "@/components/docs/types";

const INTERACTIVE_KINDS = new Set(["boolean", "select", "elementType", "reactNodePreset"]);
const CONTAINER_ONLY_PROPS = new Set(["direction", "wrap"]);
const ITEM_ONLY_PROPS = new Set(["padding"]);

function isInteractiveProp(prop: PropDoc) {
  return INTERACTIVE_KINDS.has(prop.control.kind);
}

function shouldShowControl(propName: string, mode: "container" | "item") {
  if (mode === "container" && ITEM_ONLY_PROPS.has(propName)) {
    return false;
  }

  if (mode === "item" && CONTAINER_ONLY_PROPS.has(propName)) {
    return false;
  }

  return true;
}

function controlTone(propName: string) {
  if (propName === "mode") {
    return "bg-purple-heart-25";
  }

  if (propName === "span" || propName === "children") {
    return "bg-eucalyptus-25";
  }

  if (propName === "start" || propName === "padding") {
    return "bg-anzac-25";
  }

  return "bg-havelock-blue-25";
}

export function ComponentShowcaseCard({
  entry,
  sourceCode,
}: {
  entry: ComponentDocEntry;
  sourceCode?: string;
}) {
  const defaultPreset = entry.presets[0];
  const [activePresetId, setActivePresetId] = useState(defaultPreset?.id ?? "");
  const [state, setState] = useState<Record<string, unknown>>(() => cloneState(defaultPreset?.initialState ?? {}));

  const activePreset = entry.presets.find((preset) => preset.id === activePresetId) ?? defaultPreset;
  const activeMode = state.mode === "item" ? "item" : "container";
  const usageCode = useMemo(() => entry.toUsageCode(state), [entry, state]);
  const interactiveProps = useMemo(
    () => entry.props.filter((prop) => isInteractiveProp(prop) && shouldShowControl(prop.name, activeMode)),
    [entry.props, activeMode],
  );

  function selectPreset(presetId: string) {
    const nextPreset = entry.presets.find((preset) => preset.id === presetId) ?? defaultPreset;
    setActivePresetId(presetId);
    setState(cloneState(nextPreset?.initialState ?? {}));
  }

  function updateState(name: string, value: unknown) {
    setState((current) => ({ ...current, [name]: value }));
  }

  function renderControl(prop: PropDoc) {
    const value = state[prop.name];

    if (prop.control.kind === "boolean") {
      const current = typeof value === "boolean" ? value : false;

      return (
        <div className="inline-flex rounded-[8px] border border-bunker-150/70 bg-alabaster-25 p-0.5">
          <button
            type="button"
            className={`rounded-[6px] px-2.5 py-1 font-mono text-[11px] transition ${
              current ? "bg-bunker-800 text-alabaster-25" : "text-bunker-550"
            }`}
            onClick={() => updateState(prop.name, true)}
            aria-pressed={current}
          >
            true
          </button>
          <button
            type="button"
            className={`rounded-[6px] px-2.5 py-1 font-mono text-[11px] transition ${
              !current ? "bg-bunker-800 text-alabaster-25" : "text-bunker-550"
            }`}
            onClick={() => updateState(prop.name, false)}
            aria-pressed={!current}
          >
            false
          </button>
        </div>
      );
    }

    if (prop.control.kind === "select" || prop.control.kind === "elementType" || prop.control.kind === "reactNodePreset") {
      const options = prop.control.options ?? [];
      const selected = typeof value === "string" && options.includes(value) ? value : options[0] ?? "";

      if (prop.name === "mode") {
        return (
          <div className="inline-flex rounded-[8px] border border-bunker-150/70 bg-alabaster-25 p-0.5">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                className={`rounded-[6px] px-2.5 py-1 font-mono text-[11px] transition ${
                  option === selected ? "bg-bunker-800 text-alabaster-25" : "text-bunker-550"
                }`}
                onClick={() => updateState(prop.name, option)}
                aria-pressed={option === selected}
              >
                {option}
              </button>
            ))}
          </div>
        );
      }

      return (
        <select
          value={selected}
          className="h-9 min-w-[170px] rounded-[8px] border border-bunker-150/70 bg-alabaster-25 px-2.5 font-mono text-[11px] text-bunker-675"
          onChange={(event) => updateState(prop.name, event.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    }

    return null;
  }

  return (
    <article className="space-y-10 pb-6">
      <section id={`${entry.id}-installation`} className="scroll-mt-24 space-y-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bunker-425">Installation</p>
        <p className="mt-2 font-sans text-sm text-bunker-550">Import the {entry.title} primitive from the primitives path.</p>
        <div className="mt-3">
          <CodePanel title="installation.tsx" code={`import { ${entry.title} } from "${entry.importPath}";`} language="tsx" />
        </div>
      </section>

      <section id={`${entry.id}-playground`} className="scroll-mt-24 space-y-3 border-t border-bunker-100/70 pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bunker-425">Playground</p>

        {entry.presets.length > 1 ? (
          <div className="mt-3">
            <p className="mb-2 font-sans text-xs text-bunker-550">{activePreset?.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {entry.presets.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  className={`rounded-[9px] px-2.5 py-1.5 font-mono text-[11px] transition ${
                    preset.id === activePresetId
                      ? "bg-bunker-800 text-alabaster-25"
                      : "bg-gallery-25 text-bunker-550 hover:bg-havelock-blue-25 hover:text-bunker-800"
                  }`}
                  onClick={() => selectPreset(preset.id)}
                  aria-pressed={preset.id === activePresetId}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {interactiveProps.length > 0 ? (
          <div className="mt-4 grid gap-2.5 md:grid-cols-2">
            {interactiveProps.map((prop) => (
              <div key={prop.name} className={`rounded-[9px] border border-bunker-100/70 p-2.5 ${controlTone(prop.name)}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-bunker-675">{prop.name}</p>
                  {renderControl(prop)}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-4">
          {entry.render(state)}
        </div>
      </section>

      <section id={`${entry.id}-usage`} className="scroll-mt-24 space-y-3 border-t border-bunker-100/70 pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bunker-425">Usage</p>
        <div className="mt-3">
          <CodePanel title="usage.tsx" code={usageCode} language="tsx" />
        </div>
      </section>

      {entry.props.length > 0 ? (
        <section id={`${entry.id}-props`} className="scroll-mt-24 space-y-3 border-t border-bunker-100/70 pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bunker-425">Props</p>
          <div className="mt-3">
            <PropTable props={entry.props} />
          </div>
        </section>
      ) : null}

      <section id={`${entry.id}-source`} className="scroll-mt-24 space-y-3 border-t border-bunker-100/70 pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bunker-425">Source</p>
        <div className="mt-3">
          <CodePanel title={entry.sourcePath} code={sourceCode ?? "Source unavailable."} language="tsx" />
        </div>
      </section>
    </article>
  );
}
