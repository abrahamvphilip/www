import type { SiteContent } from "@/types/site";

interface FaqSectionProps {
  faq: SiteContent["faq"];
}

export function FaqSection({ faq }: FaqSectionProps) {
  const grouped = faq.rows.reduce<Map<string, string[]>>((acc, row) => {
    const current = acc.get(row.group) ?? [];
    current.push(row.question);
    acc.set(row.group, current);
    return acc;
  }, new Map());

  return (
    <section data-section-id="p8x5I" className="overflow-hidden bg-[var(--surface-dark)] lg:h-[1640px]">
      <div className="site-shell space-y-[56px] px-4 py-[96px] lg:px-[184px] lg:py-[144px]">
        <div className="space-y-3">
          <p className="font-sans text-[12px] font-medium leading-[1.3333333333] tracking-[0.5px] text-[var(--text-subtle)]">
            {faq.header.eyebrow}
          </p>
          <h2 className="font-display text-[36px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-strong)]">
            {faq.header.title}
          </h2>
          <p className="font-display text-[36px] font-light leading-[1.1111111111] tracking-[-0.36px] text-[var(--text-muted)]">
            {faq.header.subtitle}
          </p>
        </div>

        <div className="space-y-[56px] pb-20">
          {[...grouped.entries()].map(([group, questions]) => (
            <div key={group} className="grid gap-3 lg:grid-cols-[565px_855px]">
              <div className="flex items-center justify-between border-b border-[var(--border-default)] py-3">
                <p className="font-display text-[24px] font-light leading-[1.3333333333] tracking-[-0.24px] text-[var(--text-strong)]">
                  {group}
                </p>
                <span aria-hidden className="opacity-0">
                  ˅
                </span>
              </div>

              <div className="flex flex-col gap-5">
                {questions.map((question, index) => (
                  <div key={`${group}-${index}`} className="flex items-center justify-between gap-6 border-b border-[var(--border-default)] pb-3">
                    <p className="font-display text-[18px] font-light leading-[1.5555555556] tracking-[-0.18px] text-[var(--text-strong)]">
                      {question}
                    </p>
                    <span aria-hidden className="text-[var(--text-subtle)]">
                      ˅
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
