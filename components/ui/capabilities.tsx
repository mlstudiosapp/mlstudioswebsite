import { Fragment } from "react";

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
    <div className="border-y border-panel-border">
      <div className="shell py-[18px]">
        <h2 className="sr-only">Capabilities</h2>
        <ul className="label flex flex-wrap items-center gap-x-[18px] gap-y-1.5 text-text-secondary">
          {items.map((item, i) => (
            <Fragment key={item}>
              {i > 0 && (
                <li aria-hidden="true" className="text-border-strong">
                  /
                </li>
              )}
              <li>{item}</li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}
