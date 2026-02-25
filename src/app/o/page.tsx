import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComponentDocsPage } from "@/components/docs/componentDocsPage";
import { loadSourceFiles } from "@/components/docs/loadSourceFiles";
import { docsSourcePathList } from "@/components/docs/sourcePaths";

export const metadata: Metadata = {
  title: "aion | Component Observatory",
  description: "Development observatory for layout primitives with a simplified token-driven Grid span API plus Container and Segment references.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default async function ObservatoryPage() {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  const sources = await loadSourceFiles(docsSourcePathList);

  return (
    <main id="main-content">
      <ComponentDocsPage sources={sources} />
    </main>
  );
}
