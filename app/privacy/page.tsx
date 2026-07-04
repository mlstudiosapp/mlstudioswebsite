export const metadata = {
  title: "Privacy Policy — ML Studios",
  description: "Privacy policy for ML Studios ecosystem hub.",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
      <p className="mt-2 text-sm text-text-tertiary">Last updated: July 4, 2026</p>

      <div className="mt-8 space-y-8 text-sm leading-6 text-text-secondary">
        <section>
          <p>
            ML Studios ("we", "us", "our") operates the mlstudiosapp.com website (the "Website"). This privacy policy explains our practices regarding information collection and use.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-text-primary">Information We Collect</h2>
          <p className="mt-3">
            The Website is an informational hub. We do not collect personal information unless you voluntarily provide it. Specifically:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><strong>No account required.</strong> You can browse the Website without providing any personal information.</li>
            <li><strong>No forms or signups.</strong> We do not collect email addresses or other personal data through forms.</li>
            <li><strong>No tracking cookies.</strong> We do not use tracking cookies or similar technologies to monitor your behavior.</li>
            <li><strong>Contact information.</strong> If you contact us via email, we receive your email address and message content only to respond to your inquiry.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium text-text-primary">Third-Party Services</h2>
          <p className="mt-3">The Website uses the following third-party services:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li><strong>Hosting (Vercel).</strong> The Website is hosted on Vercel, which may log standard server information (IP address, referrer, user agent) for operational purposes. See Vercel's privacy policy for details.</li>
            <li><strong>External links.</strong> The Website links to external services (e.g., Scheduler, Arcana, Puzzle, Insurance AI). Each product has its own privacy policy — this policy applies only to the Website itself.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium text-text-primary">How We Use Information</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>To respond to inquiries if you contact us.</li>
            <li>To operate, maintain, and improve the Website.</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-medium text-text-primary">Data Sharing</h2>
          <p className="mt-3">
            We do not sell, trade, or share your personal information with third parties. We share data only with hosting providers necessary to operate the Website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-text-primary">Your Rights</h2>
          <p className="mt-3">
            If you have provided personal information and wish to access, correct, or delete it, please contact us at{" "}
            <a href="mailto:admin@mlstudiosapp.com" className="underline hover:text-text-primary">
              admin@mlstudiosapp.com
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-text-primary">Changes to This Policy</h2>
          <p className="mt-3">
            We may update this policy occasionally. Changes will be effective when posted. Continued use of the Website after changes means you accept the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium text-text-primary">Contact</h2>
          <p className="mt-3">
            Questions about this policy? Email{" "}
            <a href="mailto:admin@mlstudiosapp.com" className="underline hover:text-text-primary">
              admin@mlstudiosapp.com
            </a>
            .
          </p>
        </section>
      </div>

      <a
        href="/"
        className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium border border-panel-border text-text-primary transition-colors hover:border-text-tertiary mt-10"
      >
        Back to home
      </a>
    </main>
  );
}
