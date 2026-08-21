import Link from "next/link";
import { Container } from "@/components/container";

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="scroll-mt-24 py-16 sm:py-24">
      <Container>
        <p className="font-mono text-xs tracking-widest text-foreground-muted">
          Joshua Sultan
        </p>

        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl sm:leading-tight">
          I build software, then try to make it simpler.
        </h1>

        <p className="mt-3 max-w-2xl text-xl font-medium leading-8 text-foreground">
          Senior Mobile Engineer building beyond mobile.
        </p>

        <p className="mt-5 max-w-2xl text-base leading-7 text-foreground-muted">
          For more than fourteen years I&apos;ve built mobile software —
          native iOS and Android, React Native, and the SDKs and
          authentication systems underneath them. Mobile is still where most
          of my working hours go. Product engineering and applied AI are
          what I&apos;m exploring alongside it.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href="#selected-work"
            className="rounded-md border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-foreground"
          >
            Selected work
          </Link>
          <Link
            href="#about"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            About &amp; connect
          </Link>
        </div>
      </Container>
    </section>
  );
}
