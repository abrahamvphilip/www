import Link from "next/link";

import type { SiteContent } from "@/types/site";
import { BrandMark } from "@/components/decor/BrandMark";

interface NavbarProps {
  nav: SiteContent["nav"];
}

export function Navbar({ nav }: NavbarProps) {
  return (
    <header data-section-id="KKTuv" className="w-full border-b border-[var(--border-default)] bg-[var(--surface-dark)]">
      <div className="site-shell flex items-center justify-between gap-6 px-4 py-4 lg:gap-0 lg:px-10 lg:py-4">
        <div className="w-[400px] shrink-0">
          <BrandMark inverse className="h-6" />
        </div>

        <nav className="hidden items-center justify-center gap-[44px] lg:flex">
          {nav.left.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex items-center gap-1.5 rounded-[2px] font-sans text-[14px] font-medium leading-[1.4285714286] text-white transition-colors hover:text-[#73e1d0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#73e1d0] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <span>{item.label}</span>
              {item.label === "Resources" || item.label === "Company" ? (
                <span aria-hidden="true" className="text-[11px] text-white">
                  ˅
                </span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex w-[400px] shrink-0 justify-end">
          <Link
            href="/launch"
            className="inline-flex h-[44px] w-[200px] items-center justify-center rounded-[12px] border border-[#322e2a14] bg-[#ffffff] px-4 py-[10px] font-sans text-[16px] font-medium leading-[1.5] text-[#18181b]"
          >
            {nav.cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
