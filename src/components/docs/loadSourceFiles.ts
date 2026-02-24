import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

function isSafeSourcePath(relativePath: string) {
  return relativePath.startsWith("src/components/") && !relativePath.includes("..") && relativePath.endsWith(".tsx");
}

export async function loadSourceFiles(paths: string[]) {
  const rootDir = process.cwd();
  const entries = await Promise.all(
    paths.map(async (relativePath) => {
      if (!isSafeSourcePath(relativePath)) {
        return [relativePath, "Source unavailable."] as const;
      }

      const absolutePath = path.join(rootDir, relativePath);

      try {
        const content = await readFile(absolutePath, "utf8");
        return [relativePath, content] as const;
      } catch {
        return [relativePath, "Source unavailable."] as const;
      }
    }),
  );

  return Object.fromEntries(entries);
}
