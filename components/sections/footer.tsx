import { products, gamesHubUrl } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative border-t border-panel-border px-6 sm:px-10 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="font-display font-semibold text-sm tracking-wide">
            ML STUDIOS
          </span>
          <p className="mt-2 text-xs text-text-tertiary max-w-xs leading-relaxed">
            We build things that actually work.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono-label text-xs uppercase text-text-secondary">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              {product.name}
            </a>
          ))}
          <a
            href={gamesHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            Games
          </a>
          <a
            href="mailto:admin@mlstudiosapp.com"
            className="hover:text-text-primary transition-colors"
          >
            Contact
          </a>
          <a href="/privacy" className="hover:text-text-primary transition-colors">
            Privacy
          </a>
        </div>
        <span className="text-xs text-text-tertiary font-mono-label">
          © {new Date().getFullYear()} ML Studios
        </span>
      </div>
    </footer>
  );
}
