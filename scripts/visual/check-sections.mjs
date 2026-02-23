#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

import { PNG } from "pngjs";

const expected = {
  KKTuv: { width: 1800, height: 76 },
  YHDHg: { width: 1800, height: 1169 },
  D2Lup: { width: 1800, height: 624 },
  IYsCw: { width: 1800, height: 1093 },
  jAwkA: { width: 1800, height: 1894 },
  X6Q8j: { width: 1800, height: 1974 },
  oqmDi: { width: 1800, height: 2150 },
  gwgPH: { width: 1800, height: 600 },
  atC3C: { width: 1800, height: 1261 },
  p8x5I: { width: 1800, height: 1640 },
  QEonC: { width: 1800, height: 900 },
  "3rLbN": { width: 1800, height: 1056 },
};

const tolerance = 2;
const base = path.resolve("tmp/screenshots/current");
const fullPageExpected = { width: 1800, height: 14445, tolerance: 8 };

let hasFailure = false;
for (const [sectionId, exp] of Object.entries(expected)) {
  const file = path.join(base, `${sectionId}.png`);
  const data = await fs.readFile(file);
  const png = PNG.sync.read(data);
  const widthDelta = Math.abs(png.width - exp.width);
  const heightDelta = Math.abs(png.height - exp.height);
  const pass = widthDelta <= tolerance && heightDelta <= tolerance;
  if (!pass) hasFailure = true;
  const status = pass ? "PASS" : "FAIL";
  console.log(
    `${status} ${sectionId} expected=${exp.width}x${exp.height} actual=${png.width}x${png.height} delta=${widthDelta}/${heightDelta}`,
  );
}

if (hasFailure) {
  process.exitCode = 1;
  console.error("Section visual geometry check failed.");
} else {
  const fullPageFile = path.join(base, "full-page.png");
  const fullPageData = await fs.readFile(fullPageFile);
  const fullPage = PNG.sync.read(fullPageData);
  const fullPageWidthDelta = Math.abs(fullPage.width - fullPageExpected.width);
  const fullPageHeightDelta = Math.abs(fullPage.height - fullPageExpected.height);
  const fullPagePass =
    fullPageWidthDelta <= fullPageExpected.tolerance && fullPageHeightDelta <= fullPageExpected.tolerance;
  if (!fullPagePass) {
    process.exitCode = 1;
    console.error(
      `FAIL full-page expected=${fullPageExpected.width}x${fullPageExpected.height} actual=${fullPage.width}x${fullPage.height} delta=${fullPageWidthDelta}/${fullPageHeightDelta}`,
    );
  } else {
    console.log(
      `PASS full-page expected=${fullPageExpected.width}x${fullPageExpected.height} actual=${fullPage.width}x${fullPage.height} delta=${fullPageWidthDelta}/${fullPageHeightDelta}`,
    );
    console.log("Section visual geometry check passed.");
  }
}
