# Pixel-Perfect Figma Implementation Rules

## Purpose

This file is the implementation contract for refining sections from Figma into this repository.  
Use it as the default playbook for all future section work.

## Locked Decisions (Do Not Re-Ask Unless Changed)

- Responsiveness must follow breakpoint defaults in `src/app/tokens.css`.
  - Mobile: `< 720px`
  - Tablet: `720px - 1079px`
  - Desktop: `>= 1080px`
- Static state only.
- Strictly no deviation from Figma. Implementation must be 1:1.
- Copy/content must be taken exactly from Figma. No normalization, rewriting, or cleanup.
- QA is mandatory against both:
  - Figma snapshot of the section.
  - User-provided screenshot of the section.
- A section is complete only when it is 1:1 pixel-perfect against those references.
- Viewport hero/above-the-fold sections must not use arbitrary fixed heights.
  - Use `min-height: calc(100vh - navbar-height-from-figma)` for the section frame.
  - For this project’s current hero, navbar height baseline is `76px` unless a new Figma node overrides it.
- If a section is requested without importing image assets:
  - Use a solid `gallery-100` fill on the intended image container.
  - Keep a commented `next/image` block in-place where the image would render, so asset wiring can be re-enabled later without layout drift.
- For split-layout sections (e.g., left copy + right visual, or multi-column bands), primitive usage is mandatory:
  - Wrap section rhythm with `Segment`.
  - Wrap width/gutters with `Container`.
  - Use `Grid` spans for primary column structure (do not rely on ad hoc fixed-width-only layout).

## Priority Order (Non-Negotiable)

1. Figma fidelity (layout, spacing, typography, color, hierarchy, static visual behavior).
2. Token correctness (`src/app/tokens.css` is the source of truth).
3. Reusable architecture (`src/components/ui` first, then `modules` composition).
4. Primitive-driven layout (`Segment`, `Container`, `Grid`) when the layout calls for it.
5. Accessibility, responsiveness, and maintainability.

If exact parity is blocked by a technical constraint, stop and ask before proceeding.

## Master Prompt (Copy/Paste For Section Work)

```md
Implement the target section from Figma with pixel-perfect fidelity.

Hard constraints:
- Treat Figma as source of truth. Do not reinterpret visual decisions.
- Enforce strict 1:1 parity. No visual, layout, copy, or behavior deviations.
- Implement static state only.
- Use .agents/skills/frontend-design/SKILL.md for implementation quality, but never for creative divergence from Figma.
- Read and follow src/app/tokens.css for all design values (type, color, spacing, breakpoints, layout-related values).
- Use token breakpoint defaults from src/app/tokens.css:
  - mobile `< 720px`
  - tablet `720px - 1079px`
  - desktop `>= 1080px`
- Use layout primitives where needed by structure:
  - src/components/primitives/segment/Segment.tsx for vertical section rhythm.
  - src/components/primitives/container/Container.tsx for page width and horizontal gutters.
  - src/components/primitives/grid/Grid.tsx for responsive column spans and grid alignment.
- Primitive usage is not mandatory in every small fragment, but is required anywhere the layout depends on section spacing, container width, or multi-column grid behavior.
- Build reusable pieces in src/components/ui first; assemble section-level composition in src/components/modules.
- Follow composable and compound component patterns (shadcn-style ergonomics) so parts can be reused with minimal duplication.
- Prefer composition over large one-off components.
- Copy/content must be taken exactly from Figma. Do not normalize text.
- Keep data/content in src/data/home.ts when applicable, but values must remain exact Figma values.
- If the user asks to skip image imports for a section, keep the exact container size/position, fill it with `gallery-100`, and leave a commented `next/image` block at the image mount point.

Implementation quality bar:
- Match Figma at desktop, tablet, and mobile breakpoints.
- Preserve exact typography hierarchy and optical spacing.
- Preserve layer ordering, overlap, border radius, strokes, opacity, and shadows.
- Preserve semantic structure and accessibility without introducing visual drift.
- Keep class names and component APIs readable and scalable.
- For viewport-first sections, validate that the section fills visible height after navbar subtraction at each breakpoint.

Validation:
- Compare implemented section to Figma snapshot and user-provided screenshot at key breakpoints.
- Resolve all visible mismatch before marking done.
- Section is not complete until pixel-perfect 1:1 parity is reached.
- If any value is missing from tokens.css, add/extend tokens first, then consume token in UI.
```

## Mandatory Workflow Per Section

1. Lock scope.
   - Confirm exact Figma file/node/section being refined.
   - Use strict parity only.
2. Gather context.
   - Read `.agents/skills/frontend-design/SKILL.md`.
   - Read relevant existing module(s), UI primitives, and data source.
   - Read `src/app/tokens.css` before implementation.
   - Collect Figma snapshot and user-provided reference screenshot for side-by-side QA.
3. Plan structure.
   - Decide `modules` composition.
   - Extract reusable UI building blocks into `src/components/ui`.
   - Identify where `Segment`, `Container`, and `Grid` are required.
4. Implement in this order.
   - Tokens first (if missing values).
   - Reusable UI components second.
   - Section module composition third.
   - Page integration last (`src/app/page.tsx`).
5. Validate.
   - Desktop/tablet/mobile checks based on token breakpoint defaults.
   - Visual parity against Figma snapshot and user-provided screenshot.
- Pixel-perfect QA pass before done.
- Height behavior check: confirm viewport sections use navbar-adjusted min-height, not fixed pixel min-height.
- Accessibility pass (semantic tags and heading order) without visual deviation.

## Layout Primitive Rules

### Segment (`src/components/primitives/segment/Segment.tsx`)
- Use for major section vertical spacing rhythm.
- Prefer wrapping each major `<section>` body with `Segment` when the section participates in page-level cadence.
- Avoid replacing `Segment` with ad hoc large top/bottom paddings unless justified by Figma behavior.

### Container (`src/components/primitives/container/Container.tsx`)
- Use to enforce page width and tokenized gutters.
- Place content that must align to global page columns inside `Container`.
- Avoid custom max-width wrappers when `Container` already maps to required behavior.

### Grid (`src/components/primitives/grid/Grid.tsx`)
- Use for column spans across `mobile/tablet/desktop` when content follows grid logic.
- Ensure spans reflect Figma column usage and breakpoints.
- Prefer `Grid` over manual percentage widths for reusable and token-aware behavior.

### Exceptions
- Primitive usage is optional for micro-layouts that do not map to page rhythm/column structure.
- If skipping a primitive where it might be expected, include a short reason in code review notes.
- Split-layout sections are not an exception; they must use `Segment + Container + Grid`.

## Token Rules (Strict)

- `src/app/tokens.css` is the design token source of truth.
- Do not hardcode color, type scale, spacing scale, breakpoints, or layout constants if a token exists.
- When a required value does not exist:
  1. Add/extend token(s) in `tokens.css`.
  2. Preserve existing token naming conventions.
  3. Keep responsive and theme behavior consistent.
  4. Then consume the token in components.
- Maintain compatibility with token-driven primitives:
  - `--bp-min-mobile`, `--bp-min-tablet`, `--bp-min-desktop`
  - `--page-width`, `--page-limit`
  - `--container-gutter-mobile`, `--container-gutter-tablet`, `--container-gutter-desktop`
  - `--segment-padding-mobile`, `--segment-padding`
  - `--grid-column-count`

## Reusable Component Architecture Rules

- Put reusable/presentational components in `src/components/ui`.
- Keep section orchestration in `src/components/modules`.
- Build composable APIs:
  - Small props surfaces.
  - Clear variant/size props where needed.
  - Easy slot-like composition via children.
- Prefer compound component patterns for complex reusable blocks:
  - Example shape: `Card`, `Card.Header`, `Card.Title`, `Card.Body`, `Card.Footer`.
  - Keep defaults sensible and override points explicit.
- Avoid copy-pasting similar JSX across modules. Extract shared UI components early.

## Figma Fidelity Rules

- Match at least these dimensions before sign-off: desktop, tablet, mobile.
- Keep the following exact:
  - Spacing and alignment.
  - Font family, size, weight, line-height, letter spacing.
  - Colors, opacity, gradients, borders, radii, shadows.
- Static component visuals only.
- Section height strategy (especially above-the-fold): if Figma behavior is viewport-based, implement viewport-based min-height with navbar subtraction.
- Layer stacking and clipping behavior.
- Copy/content exactly as shown in Figma.
- Keep `data-section-id` attributes aligned to section identity when present.

## Definition Of Done For A Section

- Section visually matches Figma at required breakpoints.
- Section visually matches user-provided screenshot at required breakpoints.
- Pixel-perfect 1:1 parity is achieved.
- Tokens are used correctly and no avoidable hardcoded values remain.
- Reusable UI abstractions are extracted into `src/components/ui` where appropriate.
- Layout primitives are used wherever layout semantics demand them.
- Module is clean, composable, and maintainable.
- Static-only implementation is preserved.
- Copy/content exactly matches Figma text.
- No obvious accessibility regressions without visual drift.

## Questions To Confirm With Design Owner Before Implementation

Only ask these if missing for the current section (do not re-ask locked decisions above):

1. What is the exact Figma file URL and node/frame ID for this section?
2. Please share the reference screenshot you want used for final QA comparison.
3. Are there hidden/optional layers in Figma that should be excluded from implementation?
4. Are all required assets (icons/images/illustrations) available in Figma for export?
5. Which existing `src/components/ui` primitives should be reused in this section, if any?
6. Should any newly extracted UI component be generalized immediately, or scoped to this section first?
