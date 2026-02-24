import { Container } from "@/components/primitives/container/Container";

export default function ObservatoryLoading() {
  return (
    <main id="main-content" className="min-h-screen bg-gallery-25">
      <Container className="py-10 lg:py-14">
        <div className="space-y-4 rounded-[12px] border border-bunker-100 bg-alabaster-25 p-4">
          <div className="h-4 w-44 animate-pulse rounded bg-bunker-100" />
          <div className="h-8 w-72 animate-pulse rounded bg-bunker-100" />
          <div className="h-4 w-full max-w-[680px] animate-pulse rounded bg-bunker-100" />
        </div>
      </Container>
    </main>
  );
}
