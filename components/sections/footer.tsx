import Link from "next/link";
import { products, gamesHubUrl } from "@/lib/products";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-6 py-12">
      <div className="flex flex-col gap-6 border-t border-panel-border pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-sm font-semibold tracking-wide">ML STUDIOS</span>
          <p className="mt-2 text-xs leading-relaxed text-text-tertiary">
            We build things that actually work.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-secondary">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text-primary"
            >
              {product.name}
            </a>
          ))}
          <a
            href={gamesHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text-primary"
          >
            Games
          </a>
          <a
            href="mailto:admin@mlstudiosapp.com"
            className="transition-colors hover:text-text-primary"
          >
            Contact
          </a>
          <Link href="/privacy" className="transition-colors hover:text-text-primary">
            Privacy
          </Link>
        </nav>

        <span className="text-xs text-text-tertiary">
          © {new Date().getFullYear()} ML Studios
        </span>
      </div>
    </footer>
  );
}
