#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

import { chromium } from "playwright";

const BASE_URL = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const WIDTH = Number(process.env.VIEWPORT_WIDTH ?? 1800);
const HEIGHT = Number(process.env.VIEWPORT_HEIGHT ?? 1200);

const SECTION_IDS = [
  "KKTuv",
  "YHDHg",
  "D2Lup",
  "IYsCw",
  "jAwkA",
  "X6Q8j",
  "oqmDi",
  "gwgPH",
  "atC3C",
  "p8x5I",
  "QEonC",
  "3rLbN",
];

const outDir = path.resolve("tmp/screenshots/current");

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: WIDTH, height: HEIGHT } });

await page.goto(BASE_URL, { waitUntil: "networkidle" });
await page.waitForTimeout(750);

await page.screenshot({ path: path.join(outDir, "full-page.png"), fullPage: true });

for (const sectionId of SECTION_IDS) {
  const section = page.locator(`[data-section-id="${sectionId}"]`);
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(120);
  await section.screenshot({ path: path.join(outDir, `${sectionId}.png`) });
}

await browser.close();
console.log(`Saved screenshots to ${outDir}`);
