import { homeFaq } from "@/data/home";
import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";
import { SectionHeading } from "@/components/ui/sectionHeading";

export function FaqSection() {
  const faq = homeFaq;

  const grouped = faq.rows.reduce<Map<string, string[]>>((acc, row) => {
    const current = acc.get(row.group) ?? [];
    current.push(row.question);
    acc.set(row.group, current);
    return acc;
  }, new Map());

  return (
    <section data-section-id="p8x5I" className="overflow-hidden bg-bunker-950 lg:h-[1640px]">
      <Segment>
        <Container className="space-y-[56px] lg:px-[184px]">
        <SectionHeading eyebrow={faq.header.eyebrow} title={faq.header.title} subtitle={faq.header.subtitle} />

        <div className="space-y-[56px] pb-20">
          {[...grouped.entries()].map(([group, questions]) => (
            <div key={group} className="grid gap-3 lg:grid-cols-[565px_855px]">
              <div className="flex items-center justify-between py-3">
                <p className="font-display text-2xl font-light leading-[1.3333333333] tracking-[-0.24px] text-bunker-800">
                  {group}
                </p>
                <span aria-hidden className="opacity-0">
                  ˅
                </span>
              </div>

              <div className="flex flex-col gap-5">
                {questions.map((question, index) => (
                  <div key={`${group}-${index}`} className="flex items-center justify-between gap-6 pb-3">
                    <p className="font-display text-lg font-light leading-[1.5555555556] tracking-[-0.18px] text-bunker-800">
                      {question}
                    </p>
                    <span aria-hidden className="text-bunker-550">
                      ˅
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        </Container>
      </Segment>
    </section>
  );
}
