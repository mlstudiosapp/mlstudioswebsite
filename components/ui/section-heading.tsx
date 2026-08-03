export function SectionHeading({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="label text-text-tertiary">{label}</p>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
      <p className="mt-4 leading-relaxed text-text-secondary">{body}</p>
    </div>
  );
}
