import { games, gamesHubUrl } from "@/lib/products";

const COLS = 14;
const ROWS = 8;
const BODY = new Set([
  "3:6", "3:5", "3:4", "4:4", "5:4", "6:4",
  "7:4", "7:3", "7:2", "8:2", "9:2",
]);
const HEAD = "10:2";
const FOOD = "12:6";

/** A still frame of a Snake game, drawn as a grid of divs. Decorative. */
function SnakeBoard() {
  const cells = [];
  for (let row = 1; row <= ROWS; row++) {
    for (let col = 1; col <= COLS; col++) {
      const key = `${col}:${row}`;
      cells.push({
        key,
        className:
          key === HEAD
            ? "bg-text-primary rounded-[2px]"
            : BODY.has(key)
              ? "bg-wire-strong rounded-[2px]"
              : key === FOOD
                ? "bg-status-soon rounded-full"
                : "rounded-[2px]",
      });
    }
  }

  return (
    <div
      aria-hidden="true"
      className="min-w-0 max-w-[560px] flex-1 basis-[380px] rounded-xl border border-panel-border bg-panel p-[clamp(14px,1.6vw,20px)]"
    >
      <div
        className="grid gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
      >
        {cells.map((cell) => (
          <span
            key={cell.key}
            className={`aspect-square border border-wire-rule ${cell.className}`}
          />
        ))}
      </div>

      <div className="label mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-panel-border pt-3.5 text-text-secondary">
        <span className="inline-flex items-center gap-2">
          <span className="h-[9px] w-[9px] rounded-[2px] bg-text-primary" />
          Head
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-[9px] w-[9px] rounded-[2px] bg-wire-strong" />
          Body
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-[9px] w-[9px] rounded-full bg-status-soon" />
          Food
        </span>
      </div>
    </div>
  );
}

export function GamesSection() {
  const snake = games[0];

  return (
    <section
      id="games"
      aria-labelledby="games-title"
      className="border-y border-panel-border bg-sunken"
    >
      <div className="shell flex flex-wrap items-center gap-[clamp(32px,5vw,72px)] py-[clamp(48px,6vw,88px)]">
        <div className="min-w-0 flex-1 basis-[340px]">
          <p className="label text-text-secondary">Games</p>
          <h2
            id="games-title"
            className="mt-4 text-pretty text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.06] tracking-[-0.02em]"
          >
            Play is part of the practice.
          </h2>
          <p className="mt-[18px] max-w-[50ch] text-pretty text-[17px] leading-[1.65] text-text-secondary">
            {snake.tagline}
          </p>

          <div className="mt-[clamp(28px,3.4vw,40px)] flex flex-wrap items-baseline gap-x-5 gap-y-3">
            <p className="text-[clamp(2.5rem,6vw,4rem)] font-bold uppercase leading-[0.95] tracking-[0.02em]">
              {snake.name}
            </p>
            <span className="label inline-flex items-center gap-2 rounded-lg border border-panel-border px-3 py-[7px] text-status-soon">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-status-soon"
              />
              {snake.statusLabel}
            </span>
          </div>

          <p className="mt-3.5 text-[13px] uppercase tracking-[0.06em] text-text-secondary">
            {snake.meta}
          </p>

          <a
            href={gamesHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center text-[15px] font-semibold text-accent transition-colors hover:text-accent-link"
          >
            games.mlstudiosapp.com&nbsp;→
          </a>
        </div>

        <SnakeBoard />
      </div>
    </section>
  );
}
