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
│   │   ├── cookie/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── o/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── tos/
│   │   │   └── page.tsx
│   │   ├── waitlist/
│   │   │   └── page.tsx
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
│   │   │   ├── buildingBlocksSection.tsx
│   │   │   ├── careers.tsx
│   │   │   ├── pageCta.tsx
│   │   │   ├── faqSection.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── forge.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── introStrip.tsx
│   │   │   ├── legalPageShell.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── nexusSection.tsx
│   │   │   ├── problemStrip.tsx
│   │   │   └── blogs.tsx
│   │   ├── primitives/
│   │   │   ├── _shared/
│   │   │   │   └── useTokenViewport.ts
│   │   │   ├── container/
│   │   │   │   ├── container.tsx
│   │   │   │   └── containerPrimitiveDemoSection.tsx
│   │   │   ├── grid/
│   │   │   │   ├── grid.tsx
│   │   │   │   └── gridPrimitiveDemoSection.tsx
│   │   │   └── segment/
│   │   │       ├── segment.tsx
│   │   │       └── segmentPrimitiveDemoSection.tsx
│   │   ├── docs/
│   │   │   ├── codePanel.tsx
│   │   │   ├── componentDocsPage.tsx
│   │   │   ├── componentShowcaseCard.tsx
│   │   │   ├── propTable.tsx
│   │   │   ├── controlState.ts
│   │   │   ├── loadSourceFiles.ts
│   │   │   ├── registry.tsx
│   │   │   ├── sourcePaths.ts
│   │   │   └── types.ts
│   │   └── ui/
│   │       ├── brandMark.tsx
│   │       ├── buttonChip.tsx
│   │       ├── cardShell.tsx
│   │       ├── decorGrid.tsx
│   │       ├── footerArcBackdrop.tsx
│   │       ├── placeholderMedia.tsx
│   │       ├── reveal/
│   │       │   ├── revealGroup.tsx
│   │       │   ├── revealText.tsx
│   │       │   └── timings.ts
│   │       ├── sectionHeading.tsx
│   │       └── statBadge.tsx
│   └── data/
│       └── home.ts
├── tsconfig.json
└── www.pen
```

## Folder Rules

- `src/devtools` contains local-only developer overlays and keyboard tooling.
- `src/app/cookie` contains the public Cookie Policy legal page.
- `src/app/privacy` contains the public Privacy Policy legal page.
- `src/app/tos` contains the public Terms of Service legal page.
- `src/app/waitlist` contains the public waitlist/early-access signup page.
- `src/app/o` contains the dev-only component observatory route.
- `src/components/docs` contains local docs/playground infrastructure used by `/o`.
- `src/components/primitives/_shared` contains shared token viewport/runtime helpers used by layout primitives.
- `src/components/primitives/container` contains the token-driven container wrapper primitive and its demo.
- `src/components/primitives/segment` contains the token-driven section-spacing wrapper primitive and its demo.
- `src/components/primitives/grid` contains the reusable token-driven grid primitive and its usage demo.
- `src/components/ui` contains reusable primitives and presentational building blocks.
- `src/components/ui/reveal` contains GSAP-based, reusable viewport-triggered text reveal primitives and timing profiles.
- `src/components/modules` contains composed website sections built from `ui` primitives.
- `src/data/<page>.ts` contains page data/content objects (currently `src/data/home.ts`).
- `rules.md` contains the canonical implementation rules for pixel-perfect Figma-to-code work.
- Do not add `src/types` unless explicitly reintroduced.

## Maintenance Rule

- Any PR that adds, removes, renames, or moves top-level files/folders or `src` subfolders must update this `AGENTS.md` file in the same PR.
