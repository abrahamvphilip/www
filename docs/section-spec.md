# Section Specification (Figma MCP Locked Source)

## Mapping
- `KKTuv`: Navbar with 6 nav links + `Launch` CTA badge.
- `YHDHg`: Hero with 2 stat badges, headline, and subheadline.
- `D2Lup`: Intro copy strip.
- `IYsCw`: Problem statement strip with 3 media placeholders and stat callout.
- `jAwkA`: Forge section with product narrative, ctas, dashboard/media cards.
- `X6Q8j`: Nexus section with mirrored product narrative and stack labels.
- `oqmDi`: Building Blocks light section with center canvas + cards + timeline rows.
- `gwgPH`: Careers list and open role cards.
- `atC3C`: Resources lead article + card grid.
- `p8x5I`: FAQ list grouped by category, static disclosure visuals.
- `QEonC`: Centered CTA block with two buttons.
- `3rLbN`: Footer with columns, gallery placeholder, legal row, backdrop arcs.

## Typography
- Display: Fraunces (light, large headlines).
- Body/UI: IBM Plex Sans.
- Labels/Badges: IBM Plex Mono.

## Color System
- Dark bases: `#141413`, `#01171d`, `#071808`.
- Light canvas/surface: `#f6f5f4`, `#fafafa`.
- Accent greens: `#0fb182`, `#a2f6d2`.
- Muted text and border alpha follow the locked Figma source tonal hierarchy.

## Placeholder Rules
- Keep layout proportions fixed using `aspect-ratio`.
- Use only deterministic gradients/grids/isometric blocks.
- Keep border language (thin, low contrast) consistent with source.

## Responsive Rules
- Desktop (`>=1280`): multi-column layout matching Figma density.
- Tablet (`768-1279`): collapse to fewer columns while preserving order.
- Mobile (`<=767`): single-column stacks, reduced paddings, no horizontal overflow.

## Interaction Scope
- Visual-static only (no functional dropdown/accordion logic in this pass).
