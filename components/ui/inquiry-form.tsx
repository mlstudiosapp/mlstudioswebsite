"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { contactEmail } from "@/lib/products";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const PROJECT_TYPES = [
  "Website",
  "Web app",
  "Mobile app",
  "Game",
  "Not sure yet",
];

type FormStatus = "idle" | "sending" | "success" | "error";

const fieldClasses =
  "w-full min-h-12 rounded-lg border border-panel-border bg-void px-3.5 py-3 text-base text-text-primary transition-colors focus:border-accent";

const labelClasses = "label text-[12px] tracking-[0.1em] text-text-secondary";

export function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const projectType = String(data.get("projectType") ?? "Not sure yet");
    const message = String(data.get("message") ?? "");
    const botcheck = String(data.get("botcheck") ?? "");

    if (botcheck) return;

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Project inquiry — ${projectType}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`
      );
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Project inquiry — ${projectType}`,
          from_name: "ML Studios Website",
          name,
          email,
          project_type: projectType,
          message,
        }),
      });
      const result = (await res.json()) as { success: boolean };
      setStatus(result.success ? "success" : "error");
      if (result.success) form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-[18px] rounded-xl border border-panel-border bg-panel p-[clamp(20px,2.6vw,28px)]"
    >
      <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5">
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full bg-status-live"
        />
        <p className="label text-text-secondary">
          Open for new client projects
        </p>
      </div>

      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
        <div className="grid min-w-0 gap-2">
          <label htmlFor="f-name" className={labelClasses}>
            Name
          </label>
          <input
            id="f-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClasses}
          />
        </div>
        <div className="grid min-w-0 gap-2">
          <label htmlFor="f-email" className={labelClasses}>
            Email
          </label>
          <input
            id="f-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClasses}
          />
        </div>
      </div>

      <div className="grid min-w-0 gap-2">
        <label htmlFor="f-type" className={labelClasses}>
          Project type
        </label>
        <span className="relative block">
          <select
            id="f-type"
            name="projectType"
            className={`${fieldClasses} appearance-none pr-10`}
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-text-secondary"
          >
            ▾
          </span>
        </span>
      </div>

      <div className="grid min-w-0 gap-2">
        <label htmlFor="f-msg" className={labelClasses}>
          Message
        </label>
        <textarea
          id="f-msg"
          name="message"
          required
          rows={4}
          placeholder="What are you building, and by when?"
          className={`${fieldClasses} min-h-[120px] resize-y leading-[1.55]`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-x-[18px] gap-y-3.5 pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 flex-none items-center rounded-lg border border-accent bg-accent px-[22px] text-[15px] font-semibold text-void transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send inquiry"}
        </button>
        <p className="min-w-0 flex-1 basis-[180px] text-sm leading-normal text-text-secondary">
          We reply within two business days.
        </p>
      </div>

      {status === "success" && (
        <p
          role="status"
          className="rounded-lg border border-panel-border bg-sunken px-4 py-3.5 text-[15px] leading-normal text-status-live"
        >
          Thanks — your inquiry is in. We&apos;ll be in touch.
        </p>
      )}

      {status === "error" && (
        <p
          role="status"
          className="rounded-lg border border-panel-border bg-sunken px-4 py-3.5 text-[15px] leading-normal text-[#E58A8A]"
        >
          Something went wrong — please try again, or email {contactEmail}{" "}
          directly.
        </p>
      )}
    </form>
  );
}
