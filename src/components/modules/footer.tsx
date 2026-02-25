import Link from "next/link";

import { homeFooter } from "@/data/home";

import { Container } from "@/components/primitives/container/container";
import { Segment } from "@/components/primitives/segment/segment";
import { BrandMark } from "@/components/ui/brandMark";
import { FooterArcBackdrop } from "@/components/ui/footerArcBackdrop";
import { PlaceholderMedia } from "@/components/ui/placeholderMedia";

export function Footer() {
  const footer = homeFooter;

  return (
    <footer data-section-id="3rLbN" className="relative overflow-hidden bg-bunker-950">
      <Segment>
        <Container className="relative z-10 flex min-h-[920px] flex-col gap-[56px] lg:h-[1056px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full max-w-[421px] space-y-10">
            <h3 className="font-sans text-3xl font-normal leading-[1.2] tracking-[-0.3px] text-bunker-800">{footer.title}</h3>
            <Link
              href="/console"
              className="focus-ring inline-flex h-[20px] items-center gap-2 font-sans text-sm font-medium leading-[1.4285714286] text-bunker-800 focus-visible:outline-none"
            >
              <span>{footer.cta}</span>
              <span aria-hidden>→</span>
            </Link>
            <div className="flex items-center gap-10 pt-1 text-bunker-550">
              {footer.social.slice(0, 3).map((item, index) => (
                <span key={`${item}-${index}`} className="text-lg">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid w-full max-w-[421px] gap-5 sm:grid-cols-2">
            {footer.groups.slice(0, 2).map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="font-sans text-xs font-medium leading-[1.3333333333] tracking-[0.5px] text-bunker-225">{group.title}</p>
                {group.links.map((link) => (
                  <p key={`${group.title}-${link}`} className="font-sans text-sm font-normal leading-[1.4285714286] text-bunker-550">
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[12px] bg-bunker-950/2 px-5 py-0">
          <div className="mx-auto flex w-fit items-center gap-[54px] py-[25px]">
            <div className="h-20 w-20">
              <PlaceholderMedia label="footer-image-1" ratio="1 / 1" className="rounded-[12px]" />
            </div>
            <div className="h-20 w-20">
              <PlaceholderMedia label="footer-image-2" ratio="1 / 1" className="rounded-[12px]" />
            </div>
            <div className="h-20 w-20">
              <PlaceholderMedia label="footer-image-3" ratio="1 / 1" className="rounded-[12px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="w-full max-w-[400px] font-sans text-sm font-normal leading-[1.4285714286] text-bunker-325">{footer.legal}</p>
          <BrandMark className="justify-center" />
          <div className="flex w-full max-w-[400px] flex-wrap items-center justify-start gap-8 lg:justify-end lg:gap-10">
            {footer.policyLinks.map((link) => (
              <Link
                key={link}
                href="/legal"
                className="focus-ring font-sans text-sm font-normal leading-[1.4285714286] text-bunker-325 focus-visible:outline-none"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        </Container>
      </Segment>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[600px]">
        <FooterArcBackdrop className="h-full w-full" />
      </div>
    </footer>
  );
}
