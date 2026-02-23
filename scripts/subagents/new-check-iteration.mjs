import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const [sectionId, iterationArg] = process.argv.slice(2);

if (!sectionId || !iterationArg) {
  console.error("Usage: node scripts/subagents/new-check-iteration.mjs <sectionId> <iteration>");
  process.exit(1);
}

const iteration = Number(iterationArg);
if (!Number.isInteger(iteration) || iteration < 1) {
  console.error("Iteration must be an integer >= 1");
  process.exit(1);
}

const dir = resolve(process.cwd(), `docs/subagents/checks/${sectionId}`);
mkdirSync(dir, { recursive: true });

const payload = {
  section_id: sectionId,
  iteration,
  checker_subagent: `Checker-${sectionId}-iter-${String(iteration).padStart(3, "0")}`,
  status: "pending",
  result: "NOT_RUN",
  reason: null,
  defects: [],
  metrics: {
    pixel_mismatch_pct: null,
    geometry_tolerance_px: null,
    typography_match: null,
    copy_match: null,
  },
  next_action: "Run checker and update fields",
};

const outPath = resolve(dir, `iter-${String(iteration).padStart(3, "0")}.json`);
writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(outPath);
