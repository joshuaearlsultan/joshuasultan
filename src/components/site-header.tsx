import Link from "next/link";
import { Container } from "@/components/container";
import { NAV_LINKS } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#top"
            className="font-mono text-sm font-medium tracking-tight text-foreground"
          >
            Joshua Sultan
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 sm:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <details className="relative sm:hidden">
            <summary
              className="list-none rounded px-2 py-1 text-sm text-foreground marker:content-none [&::-webkit-details-marker]:hidden"
              aria-label="Open navigation menu"
            >
              Menu
            </summary>
            <nav
              aria-label="Primary"
              className="absolute right-0 top-full mt-2 flex w-44 flex-col gap-1 rounded-md border border-border bg-background p-2 shadow-sm"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded px-3 py-2 text-sm text-foreground-muted transition-colors hover:bg-background-subtle hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
