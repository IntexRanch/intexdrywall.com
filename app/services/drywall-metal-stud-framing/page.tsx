import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { serviceCategories } from "@/lib/services";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Commercial Drywall &amp; Metal Stud Framing
            </h1>
            <p className="text-sm sm:text-base text-slate-200">
              We focus exclusively on commercial drywall and metal stud framing
              scopes for offices, healthcare, education, industrial, and other
              institutional projects. From core and shell to detailed interiors,
              our teams are built around schedule, safety, and quality.
            </p>
            <div className="pt-3">
              <ButtonLink href="/invite-to-bid">Invite Us to Bid</ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* Service categories */}
      <Section>
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-900">
              Core Service Categories
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our work covers the full range of commercial framing and drywall
              scopes, from structural-adjacent exterior framing to
              high-finish interiors.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceCategories.map((service) => (
              <div
                key={service.id}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-3"
              >
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {service.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
                <ul className="mt-1 list-disc pl-4 space-y-1 text-xs text-slate-600">
                  {service.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-slate-100">
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-900">
              How We Work With Your Team
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Commercial projects live or die on planning and coordination. Our
              process is built to align with your preconstruction and field
              teams from day one.
            </p>
          </div>
          <ol className="grid gap-4 md:grid-cols-5 text-sm text-slate-800">
            {[
              {
                title: "Preconstruction",
                desc: "Early involvement to review drawings, wall types, and sequencing.",
              },
              {
                title: "Estimating",
                desc: "Detailed takeoffs, clarifications, and value-focused alternates.",
              },
              {
                title: "Submittals",
                desc: "Timely submittals aligned with long-lead items and other scopes.",
              },
              {
                title: "Mobilization",
                desc: "Field leadership and manpower matched to your schedule.",
              },
              {
                title: "Close-Out",
                desc: "Punch list response, documentation, and warranty support.",
              },
            ].map((step, idx) => (
              <li
                key={step.title}
                className="flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Need a drywall &amp; framing partner for your next project?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Share your plans and our preconstruction team will review scope,
              schedule, and logistics for a responsive, complete proposal.
            </p>
          </div>
          <ButtonLink href="/invite-to-bid">Invite Us to Bid</ButtonLink>
        </div>
      </Section>
    </div>
  );
}
