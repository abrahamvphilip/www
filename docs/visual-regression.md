# Visual Regression Plan

## Current State
- This repository now has deterministic section IDs and content wiring for screenshot-based comparisons.
- Automated visual diff tooling is intentionally documented but not hard-required in CI because the runtime is network-restricted and Playwright is not installed by default.

## Recommended Setup (when network access is available)
1. Install Playwright test runner:
   - `npm i -D @playwright/test`
   - `npx playwright install --with-deps`
2. Capture desktop and responsive baselines at:
   - `1800`, `1440`, `1280`, `1024`, `768`, `390`
3. Compare against implementation before merge.

## Manual Gate (active now)
1. Run `npm run dev`.
2. Compare rendered sections in this order:
   - `KKTuv`, `YHDHg`, `D2Lup`, `IYsCw`, `jAwkA`, `X6Q8j`, `oqmDi`, `gwgPH`, `atC3C`, `p8x5I`, `QEonC`, `3rLbN`
3. Confirm typography, spacing, section sequencing, and placeholder proportions match the Figma MCP source (`mThHQVKEqFj1xDy1jLL8UB`, node `738:18297`).
