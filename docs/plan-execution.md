# Execution Plan: Figma MCP Pixel-Perfect Build

## Objective
Implement the locked Figma source (`mThHQVKEqFj1xDy1jLL8UB`, node `738:18297`) as a production-ready Next.js site with responsive behavior, static-interaction parity, placeholder media strategy, and deployment/QA artifacts.

## Subagent Blueprint (Applied as Workstreams)
1. Lead Orchestrator: sequencing, scope control, completion gate.
2. Design Extraction: section IDs, copy, spacing and token extraction from Figma MCP metadata/context.
3. Token/Foundation: font stack, CSS variables, global layout base.
4. Section Build A: `KKTuv`, `YHDHg`, `D2Lup`, `IYsCw`.
5. Section Build B: `jAwkA`, `X6Q8j`, `oqmDi`.
6. Section Build C: `gwgPH`, `atC3C`, `p8x5I`, `QEonC`, `3rLbN`.
7. Asset/Vector: deterministic placeholders and decorative SVG helpers.
8. Responsive QA: breakpoint checks and overflow prevention.
9. Visual Regression: baseline strategy + workflow scaffolding.
10. Deployment: Vercel + CI gates + rollback checklist.

## Implemented Outputs
- Typed content contracts: `src/types/site.ts`
- Design copy and placeholder asset registry: `src/content/site-content.ts`
- Primitive UI layer: `src/components/primitives/*`
- Decorative helpers: `src/components/decor/*`
- Section components in locked Figma order: `src/components/site/*`
- Composition-only page: `src/app/page.tsx`
- Font + token foundation: `src/app/layout.tsx`, `src/app/globals.css`
- Design mapping docs: `docs/design-map.json`, `docs/section-spec.md`
- Deployment/CI docs and workflow: `docs/deployment-checklist.md`, `.github/workflows/ci.yml`

## Quality Gates
- `npm run lint`
- `npm run build`
- Content integrity script (`npm run check:content`)
- Manual section-by-section visual review against Figma MCP screenshots.

## Notes
- External skill marketplace lookups are not required at runtime and were network-blocked earlier.
- Placeholder media intentionally remains until production image URLs are available.
