export function Footer() {
  return (
    <footer className="relative border-t border-panel-border px-6 sm:px-10 py-12">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="font-display font-semibold text-sm tracking-wide">
            ML STUDIOS
          </span>
          <p className="mt-2 text-xs text-text-tertiary max-w-xs leading-relaxed">
            Building intelligent products for the next decade.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono-label text-xs uppercase text-text-secondary">
          <a
            href="https://scheduler.mlstudiosapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-primary transition-colors"
          >
            Scheduler
          </a>
          <a href="/arcana" className="hover:text-text-primary transition-colors">
            Arcana
          </a>
          <a href="/puzzle" className="hover:text-text-primary transition-colors">
            Puzzle
          </a>
          <a
            href="/insurance-ai"
            className="hover:text-text-primary transition-colors"
          >
            Insurance AI
          </a>
        </div>
        <span className="text-xs text-text-tertiary font-mono-label">
          © {new Date().getFullYear()} ML Studios
        </span>
      </div>
    </footer>
  );
}
