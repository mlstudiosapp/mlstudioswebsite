import { games, gamesHubUrl } from "@/lib/products";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatusPill } from "@/components/ui/status-pill";

export function GamesSection() {
  return (
    <section
      id="games"
      className="mx-auto w-full max-w-5xl border-t border-panel-border px-6 py-20 sm:py-24"
    >
      <SectionHeading
        label="Games"
        title="Play is part of the practice."
        body="Small, polished games from the studio — landing first on Android."
      />

      <div className="mt-12 flex flex-col gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex items-start justify-between gap-4 rounded-xl border border-panel-border bg-panel p-6"
          >
            <div>
              <h3 className="text-lg font-medium">{game.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{game.tagline}</p>
            </div>
            <StatusPill
              label={game.statusLabel}
              tone={game.status === "live" ? "live" : "soon"}
            />
          </div>
        ))}
      </div>

      <a
        href={gamesHubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm text-text-secondary transition-colors hover:text-text-primary"
      >
        games.mlstudiosapp.com →
      </a>
    </section>
  );
}
