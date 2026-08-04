import Link from "next/link";
import { products, gamesHubUrl, contactEmail } from "@/lib/products";

const linkClasses =
  "flex min-h-11 items-center text-base text-text-secondary transition-colors hover:text-text-primary";

export function Footer() {
  return (
    <footer className="border-t border-panel-border bg-sunken">
      <div className="shell flex flex-wrap gap-[clamp(32px,4vw,64px)] pt-[clamp(40px,5vw,64px)] pb-7">
        <div className="min-w-0 flex-1 basis-[280px]">
          <p className="text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold uppercase leading-none tracking-[0.06em]">
            ML Studios
          </p>
          <p className="mt-3.5 max-w-[34ch] text-base leading-[1.6] text-text-secondary">
            Product and software studio. Websites, web apps, mobile apps, and
            games.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="grid min-w-0 flex-[2_1_420px] gap-x-[clamp(20px,3vw,40px)] gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(172px,1fr))]"
        >
          <div className="min-w-0">
            <p className="label mb-1.5 text-text-tertiary">Products</p>
            <ul className="grid">
              {products.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses}
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="label mb-1.5 text-text-tertiary">Studio</p>
            <ul className="grid">
              <li>
                <a href="#what-we-do" className={linkClasses}>
                  What we do
                </a>
              </li>
              <li>
                <a
                  href={gamesHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  Games
                </a>
              </li>
              <li>
                <a href="#client-work" className={linkClasses}>
                  Client work
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <p className="label mb-1.5 text-text-tertiary">Contact</p>
            <ul className="grid">
              <li>
                <a href={`mailto:${contactEmail}`} className={linkClasses}>
                  {contactEmail}
                </a>
              </li>
              <li>
                <a href="#inquiry" className={linkClasses}>
                  Start a project
                </a>
              </li>
              <li>
                <Link href="/privacy" className={linkClasses}>
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="shell pb-[clamp(28px,3vw,40px)]">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-panel-border pt-5 text-sm text-text-tertiary">
          <p>© {new Date().getFullYear()} ML Studios</p>
          <p className="ml-auto">Built in-house.</p>
        </div>
      </div>
    </footer>
  );
}
