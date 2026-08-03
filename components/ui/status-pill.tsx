export function StatusPill({
  label,
  tone,
}: {
  label: string;
  tone: "live" | "soon";
}) {
  const color = tone === "live" ? "var(--status-live)" : "var(--status-soon)";

  return (
    <span className="inline-flex shrink-0 items-center gap-2 text-text-secondary">
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: color }}
        aria-hidden="true"
      />
      <span className="label whitespace-nowrap">{label}</span>
    </span>
  );
}
