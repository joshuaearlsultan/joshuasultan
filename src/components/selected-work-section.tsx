import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS } from "@/lib/content";

export function SelectedWorkSection() {
  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-heading"
      className="scroll-mt-24 border-t border-border py-20"
    >
      <Container>
        <SectionHeading
          id="selected-work-heading"
          index="01 — Selected Work"
          title="A few things I've built"
          description="A few personal projects I've been building and exploring"
        />

        <ol className="mt-12 divide-y divide-border border-t border-border">
          {PROJECTS.map((project) => (
            <li
              key={project.name}
              className="-mx-4 grid gap-3 rounded-md px-4 py-8 transition-colors hover:bg-background-subtle sm:grid-cols-[3rem_1fr]"
            >
              <span className="font-mono text-sm text-foreground-muted">
                {project.index}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 max-w-xl text-base leading-7 text-foreground-muted">
                  {project.description}
                </p>
                {project.links.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {project.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-accent underline underline-offset-4 hover:text-foreground"
                      >
                        {link.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
