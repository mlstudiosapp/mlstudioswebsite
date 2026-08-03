const items = [
  "Websites",
  "Web Apps",
  "Mobile Apps",
  "Games",
  "AI-Assisted Builds",
  "Design",
  "Engineering",
];

export function Capabilities() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-y border-panel-border py-5">
        {items.map((item) => (
          <span key={item} className="label text-text-tertiary">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
