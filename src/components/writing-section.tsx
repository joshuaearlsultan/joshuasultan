import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { WRITING_SAMPLES } from "@/lib/content";

export function WritingSection() {
  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="scroll-mt-24 border-t border-border py-20"
    >
      <Container>
        <SectionHeading
          id="writing-heading"
          index="03 — Writing"
          title="The Simple Engineer"
          description="Notes on software engineering, simplicity, leadership, and product thinking."
        />

        <ul className="mt-12 grid gap-8 sm:grid-cols-3">
          {WRITING_SAMPLES.map((sample) => (
            <li key={sample.title} className="border-t border-border pt-4">
              <h3 className="text-base font-semibold leading-6 text-foreground">
                {sample.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-foreground-muted">
                {sample.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
