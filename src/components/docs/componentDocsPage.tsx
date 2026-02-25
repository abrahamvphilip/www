"use client";

import { useMemo, useState } from "react";

import { ComponentShowcaseCard } from "@/components/docs/componentShowcaseCard";
import { componentRegistry } from "@/components/docs/registry";
import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";

const PAGE_SECTIONS = [
  { id: "installation", label: "Installation" },
  { id: "playground", label: "Playground" },
  { id: "usage", label: "Usage" },
  { id: "props", label: "Props" },
  { id: "source", label: "Source" },
];

export function ComponentDocsPage({ sources }: { sources: Record<string, string> }) {
  const [activeEntryId, setActiveEntryId] = useState(componentRegistry[0]?.id ?? "");
  const activeEntry = useMemo(
    () => componentRegistry.find((entry) => entry.id === activeEntryId) ?? componentRegistry[0],
    [activeEntryId],
  );

  const sectionLinks = activeEntry
    ? PAGE_SECTIONS.map((section) => ({
        id: `${activeEntry.id}-${section.id}`,
        label: section.label,
      }))
    : [];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_8%_0%,var(--havelock-blue-25)_0%,transparent_44%),radial-gradient(circle_at_92%_4%,var(--anzac-25)_0%,transparent_42%),linear-gradient(180deg,var(--alabaster-25)_0%,var(--gallery-25)_50%,var(--alabaster-25)_100%)] text-bunker-800">
      <div className="sticky top-0 z-40 bg-alabaster-25/90 backdrop-blur-xl">
        <Container className="py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 items-center rounded-[7px] bg-bunker-800 px-2 font-mono text-[11px] uppercase tracking-[0.12em] text-alabaster-25">
                /o
              </span>
              <p className="font-sans text-sm text-bunker-550">Developer Observatory</p>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bunker-425">{activeEntry?.title ?? "Primitives"}</p>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            {componentRegistry.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => setActiveEntryId(entry.id)}
                className={`font-sans text-sm transition ${
                  entry.id === activeEntry?.id
                    ? "text-bunker-800 underline decoration-eucalyptus-325 decoration-2 underline-offset-4"
                    : "text-bunker-550 hover:text-bunker-800"
                }`}
              >
                {entry.title}
              </button>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 border-b border-bunker-100/70 pb-2">
            {sectionLinks.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="font-sans text-sm text-bunker-550 transition hover:text-bunker-800"
              >
                {section.label}
              </a>
            ))}
          </div>
        </Container>
      </div>

      <Segment>
        <Container>
          <main className="w-full space-y-6">
            <header
              id="overview"
              className="space-y-4 pt-1"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bunker-425">{activeEntry?.title ?? "Primitive"} documentation</p>
              <div className="space-y-2">
                <h1 className="font-display text-[44px] leading-[1.02] text-bunker-800 lg:text-[52px]">
                  {activeEntry?.title ?? "Primitive"}
                </h1>
                <p className="max-w-5xl font-sans text-[14px] leading-[1.65] text-bunker-550 lg:text-[15px]">
                  {activeEntry?.description ??
                    "Minimal interactive reference for layout primitives. Pick a scenario, adjust props, and validate output with live preview and synced usage code."}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 border-b border-bunker-100/70 pb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-bunker-425">
                <span>token-first</span>
                <span>responsive math</span>
                <span>guided controls</span>
              </div>
            </header>

            {activeEntry ? <ComponentShowcaseCard key={activeEntry.id} entry={activeEntry} sourceCode={sources[activeEntry.sourcePath]} /> : null}
          </main>
        </Container>
      </Segment>
    </div>
  );
}
