"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export function CodePanel({
  code,
  language = "tsx",
  title,
}: {
  code: string;
  language?: string;
  title?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-bunker-100/70 bg-alabaster-25">
      {title ? (
        <div className="bg-gallery-25/75 px-3 py-2">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-bunker-550">{title}</p>
        </div>
      ) : null}
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        customStyle={{
          margin: 0,
          fontSize: "12px",
          lineHeight: 1.6,
          borderRadius: 0,
          background: "transparent",
          padding: "12px",
        }}
        showLineNumbers
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
