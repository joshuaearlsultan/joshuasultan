import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ENGINEERING_CATEGORIES, ENGINEERING_INTRO } from "@/lib/content";

export function EngineeringSection() {
  return (
    <section
      id="engineering"
      aria-labelledby="engineering-heading"
      className="scroll-mt-24 border-t border-border bg-background-subtle py-20 shadow-[inset_0_1px_0_0_var(--background)]"
    >
      <Container>
        <SectionHeading
          id="engineering-heading"
          index="02 — Engineering"
          title="Built on mobile. Growing beyond it."
        />

        <div className="mt-3 max-w-2xl space-y-4">
          {ENGINEERING_INTRO.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-7 text-foreground-muted"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {ENGINEERING_CATEGORIES.map((category) => (
            <div key={category.title} className="border-l border-border pl-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground-muted">
                {category.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-base leading-7 text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
