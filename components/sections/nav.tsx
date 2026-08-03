import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-panel-border bg-void/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide">
          ML STUDIOS
        </Link>
        <nav className="flex items-center gap-6 text-sm text-text-secondary">
          <a href="#products" className="hidden sm:inline transition-colors hover:text-text-primary">
            Products
          </a>
          <a href="#games" className="hidden sm:inline transition-colors hover:text-text-primary">
            Games
          </a>
          <a
            href="#client-work"
            className="text-text-primary transition-colors hover:text-accent"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
