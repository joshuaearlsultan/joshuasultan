import Link from "next/link";
import { Container } from "@/components/container";
import { CONNECT_LINKS } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-foreground-muted">
            &copy; {year} Joshua Sultan
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#top"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              Back to top
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
