import Link from "next/link";

import type { SiteContent } from "@/types/site";

interface CtaSectionProps {
  cta: SiteContent["cta"];
}

export function CtaSection({ cta }: CtaSectionProps) {
  return (
    <section data-section-id="QEonC" className="bg-[var(--surface-dark)]">
      <div className="site-shell flex min-h-[700px] items-center justify-center px-4 py-16 lg:h-[900px] lg:min-h-0 lg:px-10 lg:py-[200px]">
        <div className="flex w-full max-w-[854px] flex-col items-center gap-5 py-10 text-center lg:py-16">
          <p className="font-sans text-[12px] font-medium leading-[1.3333333333] tracking-[0.5px] text-[var(--text-muted)]">
            {cta.header.eyebrow}
          </p>
          <h2 className="whitespace-pre-line font-sans text-[30px] font-normal leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-light)] lg:text-[36px]">
            {cta.header.title}
          </h2>
          <p className="max-w-[560px] font-sans text-[16px] font-normal leading-[1.5] text-[var(--text-light)]">{cta.body}</p>

          <div className="flex w-full max-w-[566px] flex-col gap-2 pt-3 sm:flex-row">
            <Link
              href="/console"
              className="inline-flex h-[36px] flex-1 items-center justify-center gap-2 rounded-[12px] border border-[#0a8f68] bg-[#0a8f68] px-3 font-sans text-[14px] font-medium leading-[1.4285714286] text-[#ffffff]"
            >
              <span>{cta.buttons[0]}</span>
              <span className="inline-flex h-5 min-w-[18px] items-center justify-center rounded-[8px] border border-[#322e2a24] bg-[#edecea] px-1 font-mono text-[10px] font-medium leading-[1.2] text-[#322e2a]">
                2
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex h-[36px] flex-1 items-center justify-center gap-2 rounded-[12px] border border-[#322e2a14] bg-[#f6f5f4] px-3 font-sans text-[14px] font-medium leading-[1.4285714286] text-[#322e2a]"
            >
              <span>{cta.buttons[1]}</span>
              <span className="inline-flex h-5 min-w-[18px] items-center justify-center rounded-[8px] border border-[#322e2a24] bg-[#edecea] px-1 font-mono text-[10px] font-medium leading-[1.2] text-[#322e2a]">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
