# Deployment Checklist (Vercel)

## Environment
1. Connect repository to Vercel project.
2. Configure Preview deploys for pull requests.
3. Configure Production deploy from `main`.

## Required CI Gates
1. `npm run lint`
2. `npm run check:content`
3. `npm run build`

## Visual QA Before Promote
1. Compare implementation screenshots with Figma MCP source captures (`mThHQVKEqFj1xDy1jLL8UB`, node `738:18297`).
2. Validate section IDs in order: `KKTuv` → `3rLbN`.
3. Verify breakpoints: `1800`, `1440`, `1280`, `1024`, `768`, `390`.

## Accessibility Baseline
1. Landmark and heading hierarchy sanity check.
2. Contrast checks on major copy and CTA text.
3. Keyboard focus visibility for all links/buttons.

## Rollback
1. Redeploy previous stable Vercel production deployment.
2. Keep latest successful build artifact ID documented in release notes.
