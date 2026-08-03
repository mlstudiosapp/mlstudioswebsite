"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const CONTACT_EMAIL = "admin@mlstudiosapp.com";

const PROJECT_TYPES = ["Website", "Web App", "Mobile App", "Game", "Other"];

type FormStatus = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-panel-border bg-void px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none";

const labelClasses = "label mb-1.5 block text-text-tertiary";

export function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const projectType = String(data.get("projectType") ?? "Other");
    const message = String(data.get("message") ?? "");
    const botcheck = String(data.get("botcheck") ?? "");

    if (botcheck) return;

    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Project inquiry — ${projectType}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`
      );
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
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
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-xl rounded-xl border border-panel-border bg-panel p-8">
        <p className="text-lg font-medium">Message sent.</p>
        <p className="mt-2 text-sm text-text-secondary">
          Thanks for reaching out — we&apos;ll get back to you within a couple
          of days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl rounded-xl border border-panel-border bg-panel p-6 sm:p-8"
    >
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="inquiry-name" className={labelClasses}>
            Name
          </label>
          <input
            id="inquiry-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="inquiry-email" className={labelClasses}>
            Email
          </label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="inquiry-type" className={labelClasses}>
          Project type
        </label>
        <select id="inquiry-type" name="projectType" className={inputClasses}>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="inquiry-message" className={labelClasses}>
          What do you need?
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          required
          rows={4}
          placeholder="A short description of the project — what it is, who it's for, and any timeline in mind."
          className={inputClasses}
        />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-[#E58A8A]">
          Something went wrong — please try again, or email {CONTACT_EMAIL}{" "}
          directly.
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-void transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Start a project"}
        </button>
        <p className="text-xs text-text-tertiary">or email {CONTACT_EMAIL}</p>
      </div>
    </form>
  );
}
