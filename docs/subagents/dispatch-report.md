# Subagent Dispatch Report

Date: 2026-02-23
Primary Source: Figma MCP file `mThHQVKEqFj1xDy1jLL8UB`, node `738:18297`

## Deployed Specialized Subagents

1. `Source-Lock-Auditor`
- Context: `.mcp.json`, `docs/subagents/mcp-probe.json`, `docs/subagents/figma-source-lock.json`
- Commands: `npm run subagents:mcp-gate`
- Outcome: PASS

2. `Copy-Integrity-Checker`
- Context: `src/content/site-content.ts`, copy contracts and check script
- Commands: `npm run check:content`
- Outcome: PASS

3. `Section-Order-Checker`
- Context: `docs/design-map.json`, prerendered home output
- Commands: `npm run check:sections`
- Outcome: PASS

4. `Build-Quality-Checker`
- Context: full codebase and Next.js build pipeline
- Commands: `npm run lint`, `npm run build`
- Outcome: PASS

5. `Visual-Geometry-Checker`
- Context: section screenshots and geometry expectations
- Commands: `BASE_URL=http://127.0.0.1:3001 node scripts/visual/capture.mjs`, `npm run visual:check`
- Outcome: PASS
- Section geometry deltas: `KKTuv=1`, `YHDHg=0`, `D2Lup=0`, `IYsCw=0`, `jAwkA=0`, `X6Q8j=0`, `oqmDi=0`, `gwgPH=0`, `atC3C=1`, `p8x5I=1`, `QEonC=1`, `3rLbN=1`

6. `Skills-Discovery-Agent`
- Context: `.agents/skills/find-skills/SKILL.md`
- Commands: `npx skills find "figma visual regression"`
- Outcome: BLOCKED (network: `ENOTFOUND registry.npmjs.org`)

## Notes
- Checker artifacts are recorded in `docs/subagents/checks/*/iter-001.json`.
- Numeric pixel mismatch vs Figma raster baselines is not automated in-repo yet.
