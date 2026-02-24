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
│   │   ├── page.tsx
│   │   └── tokens.css
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

- `src/components/ui` contains reusable primitives and presentational building blocks.
- `src/components/modules` contains composed website sections built from `ui` primitives.
- `src/data/<page>.ts` contains page data/content objects (currently `src/data/home.ts`).
- Do not add `src/types` unless explicitly reintroduced.

## Maintenance Rule

- Any PR that adds, removes, renames, or moves top-level files/folders or `src` subfolders must update this `AGENTS.md` file in the same PR.
