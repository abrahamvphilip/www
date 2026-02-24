# aion website

Lean Next.js app with a small `src`-first structure.

## Tech

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Bun (canonical package manager)

## Commands

```bash
bun run dev
bun run lint
bun run build
bun run start
```

## Folder Structure

```text
src/
  app/
    globals.css
    tokens.css
    layout.tsx
    page.tsx
  components/
    ui/
    modules/
  data/
    home.ts
```

## Conventions

- `src/components/ui`: low-level reusable UI primitives.
- `src/components/modules`: composed page sections built from `ui` primitives.
- `src/data/<page>.ts`: page content/data objects (`home.ts` for landing page).
- Keep `AGENTS.md` in sync whenever folders or top-level files change.
