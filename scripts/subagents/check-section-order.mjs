import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const designMapPath = resolve(process.cwd(), "docs/design-map.json");
const prerenderedIndexPath = resolve(process.cwd(), ".next/server/app/index.html");

if (!existsSync(designMapPath)) {
  console.error(`Missing design map: ${designMapPath}`);
  process.exit(1);
}

if (!existsSync(prerenderedIndexPath)) {
  console.error("Missing prerendered homepage HTML at .next/server/app/index.html");
  console.error("Run `npm run build` before running this check.");
  process.exit(1);
}

const designMap = JSON.parse(readFileSync(designMapPath, "utf8"));
const expectedSectionOrder = Array.isArray(designMap.sectionOrder)
  ? designMap.sectionOrder.map((section) => section?.id).filter(Boolean)
  : [];

if (expectedSectionOrder.length === 0) {
  console.error("No expected sections found in docs/design-map.json");
  process.exit(1);
}

const indexHtml = readFileSync(prerenderedIndexPath, "utf8");
const actualSectionOrder = Array.from(indexHtml.matchAll(/data-section-id="([A-Za-z0-9]+)"/g)).map(
  (match) => match[1],
);

if (actualSectionOrder.length === 0) {
  console.error("No rendered section ids found in .next/server/app/index.html");
  process.exit(1);
}

const missingSectionIds = expectedSectionOrder.filter((id) => !actualSectionOrder.includes(id));
const unexpectedSectionIds = actualSectionOrder.filter((id) => !expectedSectionOrder.includes(id));

const counts = new Map();
for (const id of actualSectionOrder) {
  counts.set(id, (counts.get(id) ?? 0) + 1);
}
const duplicateSectionIds = Array.from(counts.entries())
  .filter(([, count]) => count > 1)
  .map(([id]) => id);

const orderMismatches = [];
const maxLen = Math.max(expectedSectionOrder.length, actualSectionOrder.length);
for (let idx = 0; idx < maxLen; idx += 1) {
  if (expectedSectionOrder[idx] !== actualSectionOrder[idx]) {
    orderMismatches.push({
      index: idx,
      expected: expectedSectionOrder[idx] ?? "<none>",
      actual: actualSectionOrder[idx] ?? "<none>",
    });
  }
}

if (
  missingSectionIds.length > 0 ||
  unexpectedSectionIds.length > 0 ||
  duplicateSectionIds.length > 0 ||
  orderMismatches.length > 0
) {
  console.error("Rendered section sequence check failed.");

  if (missingSectionIds.length > 0) {
    console.error(`Missing sections: ${missingSectionIds.join(", ")}`);
  }

  if (unexpectedSectionIds.length > 0) {
    console.error(`Unexpected sections: ${unexpectedSectionIds.join(", ")}`);
  }

  if (duplicateSectionIds.length > 0) {
    console.error(`Duplicate sections: ${duplicateSectionIds.join(", ")}`);
  }

  if (orderMismatches.length > 0) {
    console.error("Order mismatches:");
    for (const mismatch of orderMismatches) {
      console.error(
        `- index ${mismatch.index}: expected ${mismatch.expected}, got ${mismatch.actual}`,
      );
    }
  }

  process.exit(1);
}

console.log("Rendered section sequence check passed.");
