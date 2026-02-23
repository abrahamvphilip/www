# Subagent Runbook

## Purpose
Operational playbook for section-by-section delivery with independent checker loops.

## Step 0: Configure MCP Runtime
- Ensure `.mcp.json` exists in project root with:
  - server name: `Figma`
  - url: `https://mcp.figma.com/mcp`
- Ensure host config includes:
  - `~/.codex/config.toml` has `[mcp_servers.Figma]` with the same URL.
- Run auth once:
  - `codex mcp login Figma`
- Restart/reload the agent host after config changes so runtime picks up the MCP server.

## Step 1: Verify Hard Gate
- Run: `npm run subagents:mcp-gate`
- If failed: do not start section builds.

## Step 2: Lock Source
- Update `docs/subagents/figma-source-lock.json` to `locked: true` only after MCP gate passes.
- Record checksum and extraction timestamp.

## Step 3: Execute Waves
1. Wave A: `KKTuv`, `YHDHg`, `D2Lup`, `IYsCw`
2. Wave B: `jAwkA`, `X6Q8j`, `oqmDi`
3. Wave C: `gwgPH`, `atC3C`, `p8x5I`, `QEonC`, `3rLbN`

## Step 4: Checker Loop
For each section:
1. Builder implements.
2. Spawn checker file: `npm run subagents:new-check -- <sectionId> <iter>`
3. Checker writes PASS/FAIL in `docs/subagents/checks/<sectionId>/iter-<n>.json`.
4. Repeat until PASS, or escalate at 5th failure.

## Step 5: Audits
- Run wave guideline audits and write to `docs/subagents/audits/`.
- Run final guidelines audit after all sections pass.

## Step 6: Signoff
- Update `docs/subagents/completion-matrix.csv`
- Ensure `docs/subagents/open-defects.md` has no unresolved section defects.
- Mark `docs/subagents/final-signoff.md` approved.
