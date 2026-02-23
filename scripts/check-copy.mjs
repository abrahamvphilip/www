import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const filePath = resolve(process.cwd(), "src/content/site-content.ts");
const source = readFileSync(filePath, "utf8");

const requiredPhrases = [
  "The AI Infrastructure Research Lab",
  "It ‘s taken over the world",
  "Build the best models, not wrestle infrastucture",
  "Your forward deployed AI Team",
  "The gap isn’t technology — it’s integration, execution and speed",
  "Come hangout with us",
  "We’ve got answers for you",
  "On-demand infrastructure.\\nOne platform.\\nNo friction.",
  "Stop waiting, Start building.",
  "© 2025 aion Technologies Inc., All Rights Reserved",
];

const missing = requiredPhrases.filter((phrase) => !source.includes(phrase));

if (missing.length > 0) {
  console.error("Missing required design copy phrases:");
  for (const phrase of missing) {
    console.error(`- ${phrase}`);
  }
  process.exit(1);
}

console.log("Design copy integrity check passed.");
