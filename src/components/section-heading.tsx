export function SectionHeading({
  id,
  index,
  title,
  description,
}: {
  id: string;
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-widest text-foreground-muted">
        {index}
      </p>
      <h2
        id={id}
        className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-7 text-foreground-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
