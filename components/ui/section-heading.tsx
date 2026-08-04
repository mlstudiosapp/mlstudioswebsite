/**
 * Two-column section header: the label pins to a narrow left rail while the
 * heading and body take the wide column, so the page reads across its full
 * width instead of hugging the left edge.
 */
export function SectionHeading({
  id,
  label,
  title,
  body,
}: {
  id: string;
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div className="flex flex-wrap items-start gap-x-[clamp(40px,6vw,80px)] gap-y-6">
      <p className="label flex-none basis-[180px] pt-1.5 text-text-secondary">
        {label}
      </p>
      <div className="min-w-0 flex-1 basis-[460px]">
        <h2
          id={id}
          className="text-pretty text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.06] tracking-[-0.02em]"
        >
          {title}
        </h2>
        <p className="mt-[18px] max-w-[56ch] text-pretty text-[17px] leading-[1.65] text-text-secondary">
          {body}
        </p>
      </div>
    </div>
  );
}
