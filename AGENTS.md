# Project Structure Reference

This file is the canonical folder tree and structure contract for this repo.

## Folder Tree

```text
.
├── .agents/
├── .claude/
├── .mcp.json
├── .gitignore
├── AGENTS.md
├── README.md
├── rules.md
├── bun.lock
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── o/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   └── tokens.css
│   ├── devtools/
│   │   ├── devtools.tsx
│   │   ├── gridOverlay.css
│   │   ├── gridOverlay.tsx
│   │   └── hooks/
│   │       ├── useKeyDown.ts
│   │       └── useLocalStorage.ts
│   ├── components/
│   │   ├── modules/
│   │   │   ├── BuildingBlocksSection.tsx
│   │   │   ├── CareersSection.tsx
│   │   │   ├── CtaSection.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ForgeSection.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── IntroStrip.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── NexusSection.tsx
│   │   │   ├── ProblemStrip.tsx
│   │   │   └── ResourcesSection.tsx
│   │   ├── primitives/
│   │   │   ├── _shared/
│   │   │   │   └── useTokenViewport.ts
│   │   │   ├── container/
│   │   │   │   ├── Container.tsx
│   │   │   │   └── ContainerPrimitiveDemoSection.tsx
│   │   │   ├── grid/
│   │   │   │   ├── Grid.tsx
│   │   │   │   └── GridPrimitiveDemoSection.tsx
│   │   │   └── segment/
│   │   │       ├── Segment.tsx
│   │   │       └── SegmentPrimitiveDemoSection.tsx
│   │   ├── docs/
│   │   │   ├── CodePanel.tsx
│   │   │   ├── ComponentDocsPage.tsx
│   │   │   ├── ComponentShowcaseCard.tsx
│   │   │   ├── PropTable.tsx
│   │   │   ├── controlState.ts
│   │   │   ├── loadSourceFiles.ts
│   │   │   ├── registry.tsx
│   │   │   ├── sourcePaths.ts
│   │   │   └── types.ts
│   │   └── ui/
│   │       ├── BrandMark.tsx
│   │       ├── ButtonChip.tsx
│   │       ├── CardShell.tsx
│   │       ├── DecorGrid.tsx
│   │       ├── FooterArcBackdrop.tsx
│   │       ├── PlaceholderMedia.tsx
│   │       ├── SectionHeading.tsx
│   │       └── StatBadge.tsx
│   └── data/
│       └── home.ts
├── tsconfig.json
└── www.pen
```

## Folder Rules

- `src/devtools` contains local-only developer overlays and keyboard tooling.
- `src/app/o` contains the dev-only component observatory route.
- `src/components/docs` contains local docs/playground infrastructure used by `/o`.
- `src/components/primitives/_shared` contains shared token viewport/runtime helpers used by layout primitives.
- `src/components/primitives/container` contains the token-driven container wrapper primitive and its demo.
- `src/components/primitives/segment` contains the token-driven section-spacing wrapper primitive and its demo.
- `src/components/primitives/grid` contains the reusable token-driven grid primitive and its usage demo.
- `src/components/ui` contains reusable primitives and presentational building blocks.
- `src/components/modules` contains composed website sections built from `ui` primitives.
- `src/data/<page>.ts` contains page data/content objects (currently `src/data/home.ts`).
- `rules.md` contains the canonical implementation rules for pixel-perfect Figma-to-code work.
- Do not add `src/types` unless explicitly reintroduced.

## Maintenance Rule

- Any PR that adds, removes, renames, or moves top-level files/folders or `src` subfolders must update this `AGENTS.md` file in the same PR.
