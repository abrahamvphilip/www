import Link from "next/link";

import { homeNav } from "@/data/home";
import { Container } from "@/components/primitives/container/container";
import { BrandMark } from "@/components/ui/brandMark";
import { ButtonChip } from "@/components/ui/buttonChip";

export function Navbar() {
  const nav = homeNav;

  return (
    <header data-section-id="KKTuv" className="w-full bg-bunker-950">
      <Container>
        <div className="flex items-center justify-between gap-6 py-4 lg:gap-0">
          <div className="w-[400px] shrink-0">
            <BrandMark inverse className="h-6" />
          </div>

          <nav className="hidden items-center justify-center gap-[44px] lg:flex">
            {nav.left.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="focus-ring inline-flex items-center gap-1.5 rounded-[2px] font-sans text-sm font-medium leading-[1.4285714286] text-alabaster-25 transition-colors hover:text-eucalyptus-150 focus-visible:outline-none"
              >
                <span>{item.label}</span>
                {item.label === "Resources" || item.label === "Company" ? (
                  <span aria-hidden="true" className="text-xxs text-alabaster-25">
                    ˅
                  </span>
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex w-[400px] shrink-0 justify-end">
            <ButtonChip href="/launch" label={nav.cta} variant="light" size="md" className="w-[200px]" />
          </div>
        </div>
      </Container>
    </header>
  );
}
