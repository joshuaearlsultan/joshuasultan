import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { CONNECT_LINKS } from "@/lib/content";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-border bg-background-subtle py-20 shadow-[inset_0_1px_0_0_var(--background)]"
    >
      <Container>
        <SectionHeading
          id="about-heading"
          index="04 — About"
          title="About & connect"
        />

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
          <Image
            src="/joshua-sultan.jpg"
            alt="Portrait of Joshua Sultan"
            width={96}
            height={96}
            className="h-24 w-24 shrink-0 rounded-full border border-border bg-background-subtle object-cover shadow-[inset_0_1px_2px_var(--border)]"
          />

          <div>
            <p className="max-w-2xl text-base leading-7 text-foreground-muted">
              I&apos;m Joshua — a mobile engineer with more than fourteen years
              of experience building native iOS and Android apps, React Native
              products, and the SDKs and authentication systems that hold them
              together. Mobile is still where most of my working hours go.
              Alongside that, I write at The Simple Engineer and build small
              products of my own, learning through product engineering and
              applied AI firsthand. Still building. Still learning.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {CONNECT_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm font-medium text-accent underline underline-offset-4 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
