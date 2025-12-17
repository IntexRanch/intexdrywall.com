import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";

const services = [
  {
    title: "Interior & Exterior Metal Stud Framing",
    description:
      "Structural and non-structural framing for commercial interiors and building envelopes.",
  },
  {
    title: "Commercial Drywall Systems",
    description:
      "Gypsum wallboard, tape and finish, and specialty assemblies for offices, hospitals, and more.",
  },
  {
    title: "Shaft Walls & Fire-Rated Assemblies",
    description:
      "Rated wall and shaft systems installed to specification for code compliance.",
  },
  {
    title: "Tenant Improvements & Build-Outs",
    description:
      "Fast-track interior build-outs in occupied and unoccupied commercial spaces.",
  },
];

const markets = [
  "Healthcare",
  "Education",
  "Corporate / Office",
  "Industrial / Manufacturing",
  "Hospitality",
  "Retail / Mixed-Use",
  "Government / Municipal",
];

const featuredProjects = [
  {
    name: "Central Medical Pavilion",
    market: "Healthcare",
    location: "Raleigh, NC",
    scope: "Interior framing and drywall for a 180,000 sq ft medical office building.",
  },
  {
    name: "Harborpoint Corporate Tower",
    market: "Corporate / Office",
    location: "Charlotte, NC",
    scope: "Core & shell framing and interior drywall for a 24-story office tower.",
  },
  {
    name: "Metro Tech Manufacturing Expansion",
    market: "Industrial / Manufacturing",
    location: "Greensboro, NC",
    scope: "Exterior cold-formed steel framing and interior build-out for an industrial expansion.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Intex Drywall – Commercial Drywall &amp; Metal Stud Framing
              Contractors
            </h1>
            <p className="text-base sm:text-lg text-slate-200">
              We partner with general contractors and owners to deliver
              schedule-driven commercial interiors and envelope packages for
              offices, hospitals, schools, and industrial facilities.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <ButtonLink href="/invite-to-bid">Invite Us to Bid</ButtonLink>
              <ButtonLink
                href="/services/drywall-metal-stud-framing"
                variant="secondary"
              >
                Commercial Services
              </ButtonLink>
              <ButtonLink
                href="/services/residential-drywall-framing"
                variant="ghost"
              >
                Residential Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* Services snapshot */}
      <Section>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Core Commercial Services
              </h2>
              <p className="text-sm text-slate-600">
                Dedicated to commercial drywall and metal framing scopes from
                shell to finish.
              </p>
            </div>
            <ButtonLink
              href="/services/drywall-metal-stud-framing"
              variant="ghost"
              className="self-start sm:self-auto"
            >
              Explore Services
            </ButtonLink>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Markets preview */}
      <Section className="bg-slate-100">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Markets We Serve
              </h2>
              <p className="text-sm text-slate-600">
                Experience across healthcare, education, corporate, industrial,
                and more.
              </p>
            </div>
            <ButtonLink
              href="/markets"
              variant="ghost"
              className="self-start sm:self-auto"
            >
              View All Markets
            </ButtonLink>
          </div>
          <div className="flex flex-wrap gap-2">
            {markets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700"
              >
                {market}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured projects */}
      <Section>
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Featured Projects
              </h2>
              <p className="text-sm text-slate-600">
                A sample of recent commercial drywall and framing work.
              </p>
            </div>
            <ButtonLink
              href="/projects"
              variant="ghost"
              className="self-start sm:self-auto"
            >
              View All Projects
            </ButtonLink>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {project.name}
                  </h3>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                    {project.market}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{project.location}</p>
                <p className="text-sm text-slate-600">{project.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why GCs Work With Us */}
      <Section className="bg-slate-900 text-white">
        <div className="space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">
              Why General Contractors Work With Us
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              We align our field leadership, manpower, and planning with your
              schedule and your client&apos;s expectations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Schedule Reliability",
                desc: "We staff and sequence work to meet aggressive commercial schedules.",
              },
              {
                title: "Safety First",
                desc: "Documented safety programs and training to protect people and projects.",
              },
              {
                title: "Experienced Supervision",
                desc: "Foremen and project leads with deep commercial interiors experience.",
              },
              {
                title: "Commercial Focus",
                desc: "We focus our crews and systems exclusively on commercial work.",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-1">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-xs text-slate-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Invite to bid CTA */}
      <Section className="bg-slate-100">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Ready to send us your next project?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Share your plans and specs and our preconstruction team will
              respond quickly.
            </p>
          </div>
          <ButtonLink href="/invite-to-bid">Invite Us to Bid</ButtonLink>
        </div>
      </Section>
    </div>
  );
}
