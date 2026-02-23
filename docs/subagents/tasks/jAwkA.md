# Task jAwkA

## Ownership
- Builder subagent: Builder-jAwkA
- Checker subagent (fresh per loop): Checker-jAwkA-iter-N
- Wave: B
- Status: COMPLETE (MCP gate, structural order, content integrity, lint, build, and visual geometry checks passed on 2026-02-23)

## Inputs
- Primary source: Figma MCP node extraction from 738:18297
- Source lock: Figma MCP file `mThHQVKEqFj1xDy1jLL8UB`, node `738:18297`

## Acceptance Gate
1. Geometry tolerance <= 1px
2. Typography exact match
3. Color exact match
4. Copy exact match
5. Visual diff mismatch <= 0.20%
6. Light mode only, body #fff

## Iteration Policy
- Max retries: 5
- If 5 failures: escalate to Escalation-Architect
