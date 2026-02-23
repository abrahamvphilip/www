# Figma MCP Readiness

## Status
- Current state: `READY`
- Last verified: `2026-02-23T14:25:45Z`
- Gate policy: No section implementation starts until MCP readiness is `READY`.

## Current Setup
1. Project config committed: `.mcp.json`
2. Configured server:
   - name: `Figma`
   - url: `https://mcp.figma.com/mcp`
3. Host config updated:
   - `~/.codex/config.toml` includes `[mcp_servers.Figma]`
4. OAuth login completed:
   - `codex mcp login Figma` returned success.
5. Runtime probe executed in active session:
   - `list_mcp_resources(server="Figma")` returned resources.
   - `list_mcp_resource_templates(server="Figma")` returned templates.
   - `mcp__Figma__get_metadata(fileKey, nodeId)` resolved target node.

## Required Checks
1. Figma desktop app installed and authenticated.
2. Dev Mode access enabled for target file.
3. Agent host runtime loaded project MCP config.
4. MCP server returns at least one resource/template.
5. Probe can resolve target file URL and node `738:18297`.

## Probe Evidence
- `list_mcp_resources(server="Figma")` returned `20` resources.
- `list_mcp_resource_templates(server="Figma")` returned `3` templates.
- `mcp__Figma__get_metadata(fileKey="mThHQVKEqFj1xDy1jLL8UB", nodeId="738:18297")` succeeded.
- `docs/subagents/figma-source-lock.json` is now `locked: true` with checksum.

## Ready Actions
1. Execute checker loops for each section using existing `iter-001` artifacts.
2. Update completion matrix and section task docs as checks complete.
3. Run wave audits and final signoff once section checks pass.
