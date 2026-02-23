import Link from "next/link";

import type { SiteContent } from "@/types/site";

import { BrandMark } from "@/components/decor/BrandMark";
import { FooterArcBackdrop } from "@/components/decor/FooterArcBackdrop";
import { PlaceholderMedia } from "@/components/primitives/PlaceholderMedia";

interface FooterProps {
  footer: SiteContent["footer"];
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer data-section-id="3rLbN" className="relative overflow-hidden bg-[var(--surface-dark)]">
      <div className="site-shell relative z-10 flex min-h-[920px] flex-col gap-[56px] px-4 pb-0 pt-[96px] lg:h-[1056px] lg:px-10 lg:pt-[144px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full max-w-[421px] space-y-10">
            <h3 className="font-sans text-[30px] font-normal leading-[1.2] tracking-[-0.3px] text-[var(--text-strong)]">{footer.title}</h3>
            <Link
              href="/console"
              className="inline-flex h-[20px] items-center gap-2 font-sans text-[14px] font-medium leading-[1.4285714286] text-[var(--text-strong)]"
            >
              <span>{footer.cta}</span>
              <span aria-hidden>→</span>
            </Link>
            <div className="flex items-center gap-10 pt-1 text-[var(--text-subtle)]">
              {footer.social.slice(0, 3).map((item, index) => (
                <span key={`${item}-${index}`} className="text-[18px]">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid w-full max-w-[421px] gap-5 sm:grid-cols-2">
            {footer.groups.slice(0, 2).map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="font-sans text-[12px] font-medium leading-[1.3333333333] tracking-[0.5px] text-[#b4b4b8]">{group.title}</p>
                {group.links.map((link) => (
                  <p key={`${group.title}-${link}`} className="font-sans text-[14px] font-normal leading-[1.4285714286] text-[var(--text-subtle)]">
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[12px] border border-[var(--border-soft)] bg-[#322e2a05] px-5 py-0">
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

        <div className="flex flex-col gap-6 border-t border-[var(--border-default)] pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="w-full max-w-[400px] font-sans text-[14px] font-normal leading-[1.4285714286] text-[var(--text-muted)]">{footer.legal}</p>
          <BrandMark className="justify-center" />
          <div className="flex w-full max-w-[400px] flex-wrap items-center justify-start gap-8 lg:justify-end lg:gap-10">
            {footer.policyLinks.map((link) => (
              <Link key={link} href="/legal" className="font-sans text-[14px] font-normal leading-[1.4285714286] text-[var(--text-muted)]">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[600px]">
        <FooterArcBackdrop className="h-full w-full" />
      </div>
    </footer>
  );
}
