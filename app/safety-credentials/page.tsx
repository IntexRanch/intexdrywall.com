import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";

export default function SafetyCredentialsPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Safety &amp; Credentials
            </h1>
            <p className="text-sm sm:text-base text-slate-200">
              Safety, quality, and documentation are built into how we plan and
              execute every commercial drywall and metal framing project. Our
              goal is simple: everyone goes home safe and your project delivers
              without surprises.
            </p>
          </div>
        </div>
      </div>

      {/* Safety philosophy */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
          <div className="space-y-6">
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">
                Safety First, From Precon to Punch List
              </h2>
              <p className="text-sm text-slate-700">
                Safety is not a box we check at orientation. It&apos;s a daily
                discipline tied directly to how we staff, sequence, and
                supervise our work. We align our safety planning with your site
                rules, your GC program, and the specific hazards of each phase
                of construction.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">
                Safety Programs &amp; Training
              </h3>
              <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                <li>Company-wide written safety program and jobsite policies</li>
                <li>Daily job hazard analyses (JHAs) and pre-task planning</li>
                <li>Regular toolbox talks focused on current site activities</li>
                <li>Fall protection training and enforcement for elevated work</li>
                <li>
                  Lift, scaffold, and ladder training for field supervision and
                  crews
                </li>
                <li>Incident reporting, investigation, and corrective actions</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">
                Planning Around Risk
              </h3>
              <p className="text-sm text-slate-700">
                We work with your team to identify high-risk activities early, so
                they are covered in the schedule, logistics plan, and site
                coordination. Confined spaces, overhead work, night shifts, and
                work above occupied areas receive additional planning and
                supervision.
              </p>
            </section>
          </div>

          {/* Sidebar: metrics + certifications */}
          <aside className="space-y-4 text-sm text-slate-700">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                Safety Metrics
              </h2>
              <dl className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <dt className="text-slate-600">EMR (Experience Mod Rate)</dt>
                  <dd className="font-semibold text-slate-900">0.80</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-600">OSHA Recordable Rate</dt>
                  <dd className="font-semibold text-slate-900">Below industry avg.</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-600">Lost Time Incidents (Last 12 mo)</dt>
                  <dd className="font-semibold text-slate-900">0</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                Certifications &amp; Memberships
              </h2>
              <ul className="space-y-1 text-sm">
                <li>✓ OSHA 30-hour trained supervision</li>
                <li>✓ Trade association membership (e.g., AGC / ABC)</li>
                <li>✓ Prequalification with major regional GCs</li>
                <li>✓ Participation in third-party safety platforms as required</li>
                <li>✓ Ability to support owner- or GC-specific safety programs</li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                Capability Statement
              </h2>
              <p className="text-sm text-slate-700">
                Many owners and GCs request a formal capability statement with
                safety metrics, bonding capacity, and key projects.
              </p>
              <ButtonLink
                href="#"
                variant="secondary"
                className="w-full justify-center"
              >
                Download Capability Statement (Coming Soon)
              </ButtonLink>
            </div>
          </aside>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-slate-100">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Need a safety-focused framing &amp; drywall partner?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Share your project details and site requirements, and we&apos;ll
              align our safety planning with your program from day one.
            </p>
          </div>
          <ButtonLink href="/invite-to-bid">Invite Us to Bid</ButtonLink>
        </div>
      </Section>
    </div>
  );
}
