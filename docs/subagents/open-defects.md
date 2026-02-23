# Open Defects

## Blocking Defects
- None.

## Section Defects
- None. All section checker iterations are marked `PASS` in `docs/subagents/checks/*/iter-001.json`.

## Non-Blocking Environment Notes
1. `NET-001`: Skills registry lookup remains network-restricted (`ENOTFOUND registry.npmjs.org`) for `npx skills find`.
2. `VIS-001`: Automated numeric pixel mismatch against Figma screenshots is not instrumented in repo yet; geometry, typography, and copy checks are passing.
