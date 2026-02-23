import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const FIGMA_MCP_URL = "https://mcp.figma.com/mcp";

const mcpConfigPath = resolve(process.cwd(), ".mcp.json");
const probePath = resolve(process.cwd(), "docs/subagents/mcp-probe.json");
const lockPath = resolve(process.cwd(), "docs/subagents/figma-source-lock.json");

const projectMcpConfig = existsSync(mcpConfigPath)
  ? JSON.parse(readFileSync(mcpConfigPath, "utf8"))
  : null;
const probe = JSON.parse(readFileSync(probePath, "utf8"));
const lock = JSON.parse(readFileSync(lockPath, "utf8"));

const figmaServerUrl = projectMcpConfig?.mcpServers?.Figma?.url ?? null;

const checks = {
  project_mcp_config_present: projectMcpConfig !== null,
  figma_server_configured: figmaServerUrl === FIGMA_MCP_URL,
  probe_ready: probe?.status === "ready",
  resources_present: Number(probe?.probe?.resources_count ?? 0) > 0,
  templates_present: Number(probe?.probe?.resource_templates_count ?? 0) > 0,
  source_locked: lock?.locked === true && lock?.lock_status === "ready",
};

const failed = Object.entries(checks)
  .filter(([, ok]) => !ok)
  .map(([name]) => name);

if (failed.length > 0) {
  console.error("MCP gate failed:");
  for (const item of failed) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log("MCP gate passed.");
