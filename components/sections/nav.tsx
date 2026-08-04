import Link from "next/link";

const links = [
  { href: "#products", label: "Products" },
  { href: "#games", label: "Games" },
  { href: "#client-work", label: "Client Work" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-panel-border bg-void">
      <div className="shell flex flex-wrap items-center gap-x-6">
        <Link
          href="/"
          className="flex min-h-14 flex-none items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:text-text-primary"
        >
          <span
            aria-hidden="true"
            className="grid h-[22px] w-[22px] place-items-center rounded-md border border-panel-border bg-panel text-[9px] tracking-[0.02em] text-text-secondary"
          >
            ML
          </span>
          ML Studios
        </Link>

        <nav
          aria-label="Sections"
          className="flex flex-1 basis-80 flex-wrap items-center justify-end gap-x-1 gap-y-0.5 py-1.5"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label flex min-h-11 items-center px-2 text-[13px] text-text-secondary transition-colors hover:text-text-primary sm:px-3"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inquiry"
            className="label ml-2 flex min-h-11 items-center rounded-lg border border-panel-border px-4 text-[13px] tracking-[0.08em] text-text-primary transition-colors hover:border-accent"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
