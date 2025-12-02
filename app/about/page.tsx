import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";

const leadership = [
  {
    name: "John Smith",
    title: "President",
    bio: "Over 25 years of experience leading commercial drywall and framing projects across healthcare, education, industrial, and corporate markets.",
  },
  {
    name: "Maria Lopez",
    title: "Operations Manager",
    bio: "Specializes in field operations, manpower planning, and schedule coordination for fast-track and multi-phase projects.",
  },
  {
    name: "Derrick Johnson",
    title: "Preconstruction Manager",
    bio: "Leads estimating and preconstruction support, working closely with GCs to clarify scope, alternates, and constructability.",
  },
];

const values = [
  {
    title: "Safety",
    desc: "We plan and execute work so that everyone goes home safe, every single day.",
  },
  {
    title: "Quality",
    desc: "We deliver clean, consistent work that stands up to punch lists and long-term use.",
  },
  {
    title: "Schedule",
    desc: "We understand how critical our scope is to the overall schedule and sequence accordingly.",
  },
  {
    title: "Communication",
    desc: "We keep GCs, owners, and other trades informed so issues are addressed early.",
  },
  {
    title: "Integrity",
    desc: "We do what we say we will do and stand behind our work.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              About Our Company
            </h1>
            <p className="text-sm sm:text-base text-slate-200">
              We are a commercial drywall and metal stud framing contractor
              focused on building long-term relationships with general
              contractors, construction managers, and owners across the region.
              Our teams combine hands-on field experience with disciplined
              planning and communication.
            </p>
          </div>
        </div>
      </div>

      {/* Overview & service area */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
          <div className="space-y-6">
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">
                Who We Are
              </h2>
              <p className="text-sm text-slate-700">
                Intex Drywall was founded on the belief that commercial drywall
                and framing work should be predictable, professional, and easy
                to coordinate. We&apos;ve grown by delivering on that promise
                project after project, building strong relationships with repeat
                GCs and owners.
              </p>
              <p className="text-sm text-slate-700">
                Today, our crews deliver work on hospitals, schools, office
                towers, industrial facilities, hotels, and public projects. We
                scale our manpower, supervision, and prefabrication options to
                match the demands of each project&apos;s schedule and
                complexity.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">
                Geographic Service Area
              </h3>
              <p className="text-sm text-slate-700">
                We primarily serve commercial projects across{" "}
                <span className="font-semibold">
                  the Carolinas and the surrounding Southeast
                </span>
                . For the right projects and partners, we will consider work
                outside our core area.
              </p>
            </section>
          </div>

          {/* Values */}
          <aside className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                Our Core Values
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {values.map((v) => (
                  <li key={v.title}>
                    <p className="font-semibold text-slate-900">{v.title}</p>
                    <p className="text-xs text-slate-600">{v.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
              <h2 className="text-base font-semibold text-slate-900">
                Trusted Partners
              </h2>
              <p className="text-sm text-slate-700">
                We are prequalified and active with a range of regional and
                national general contractors. Add their logos or names here to
                reinforce your track record and relationships.
              </p>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div className="h-10 rounded-md bg-slate-100" />
                <div className="h-10 rounded-md bg-slate-100" />
                <div className="h-10 rounded-md bg-slate-100" />
              </div>
              <p className="text-xs text-slate-500">
                Replace these placeholders with actual client or GC logos as
                they become available.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* Leadership */}
      <Section className="bg-slate-100">
        <div className="space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-900">
              Leadership Team
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our leadership team has decades of combined experience in
              commercial interiors and envelope work, from estimating and
              project management to field supervision and safety.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col gap-2"
              >
                <div className="h-12 w-12 rounded-full bg-slate-200" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {person.name}
                  </h3>
                  <p className="text-xs text-slate-600">{person.title}</p>
                </div>
                <p className="text-xs text-slate-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Let&apos;s talk about your next project.
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Whether you&apos;re finalizing CDs or already in procurement, we
              can help you plan and staff the drywall and framing scope.
            </p>
          </div>
          <ButtonLink href="/invite-to-bid">Invite Us to Bid</ButtonLink>
        </div>
      </Section>
    </div>
  );
}
