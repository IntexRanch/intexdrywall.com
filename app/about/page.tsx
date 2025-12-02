import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";

const leadership = [
  {
    name: "Guillermo Montoya",
    title: "President",
    bio: "Over 25 years of experience leading commercial drywall and framing projects across healthcare, education, industrial, and corporate markets.",
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
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-slate-900">
                Who We Are
              </h2>
              <p className="text-sm text-slate-700">
                Intex Drywall is a commercial drywall and metal framing contractor headquartered at 145 Penny Lane, Pittsboro, North Carolina 27312, serving Central North Carolina and surrounding markets. The company specializes exclusively in commercial interior and light exterior framing and drywall systems, partnering with general contractors, construction managers, and building owners to deliver high-quality, schedule-driven construction solutions across a wide range of project types.
              </p>
              <p className="text-sm text-slate-700">
                Founded on the principles of reliability, craftsmanship, safety, and accountability, Intex Drywall has built its reputation by focusing on what matters most to commercial construction teams: predictable performance in the field, clear communication, and consistent quality from mobilization through final punch-out. The company understands that drywall and framing scopes often sit directly on the critical path of a project, and its operational systems are designed to support aggressive schedules without sacrificing safety or workmanship.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Services & Capabilities
              </h3>
              <p className="text-sm text-slate-700">
                Intex Drywall provides a full range of commercial drywall and metal framing services, including interior non-structural metal stud framing, exterior cold-formed steel backup framing, gypsum board systems, shaft walls, fire-rated assemblies, acoustical and sound-rated wall systems, and fast-track tenant improvement build-outs. The company&apos;s crews are experienced in constructing demising walls, corridor systems, soffits, bulkheads, mechanical and electrical chases, elevator and stair shafts, specialty assemblies, and high-finish interiors requiring Level 4 and Level 5 finishes. Intex works closely with project teams to ensure that framing layouts, wall types, and finish requirements are fully coordinated with architectural, structural, and MEP systems.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Markets We Serve
              </h3>
              <p className="text-sm text-slate-700">
                The company serves a broad mix of commercial markets across Central North Carolina, including healthcare, education, corporate and office, industrial and manufacturing, hospitality, retail and mixed-use, and municipal and public sector projects. From medical office buildings and hospitals to K-12 schools, higher-education facilities, office towers, industrial expansions, hotels, and public buildings, Intex Drywall brings market-specific knowledge and disciplined execution to each assignment. The company is especially adept at working in occupied and phased construction environments, where coordination, cleanliness, and schedule control are critical to project success.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Safety & Field Operations
              </h3>
              <p className="text-sm text-slate-700">
                Safety is a core operational priority at Intex Drywall. The company maintains a structured safety program supported by ongoing training, daily job hazard analyses, toolbox talks, and active field supervision. Safety planning is integrated into scheduling and preconstruction to identify high-risk activities early and to protect workers, building occupants, and surrounding trades. Intex partners closely with general contractors to align with project-specific safety requirements and owner programs, recognizing that a strong safety culture is essential to long-term project performance and workforce stability.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Preconstruction & Communication
              </h3>
              <p className="text-sm text-slate-700">
                Intex Drywall also places a strong emphasis on preconstruction collaboration and field communication. Estimating and operations teams work together to provide accurate takeoffs, detailed scope clarifications, and constructability feedback that supports informed decision-making during procurement. Once in the field, experienced foremen and supervisors manage manpower, sequencing, and material logistics to keep production steady and predictable. Transparent communication with general contractors and project managers ensures that issues are addressed early, reducing rework and protecting overall project timelines.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Our Commitment
              </h3>
              <p className="text-sm text-slate-700">
                As a locally based contractor, Intex Drywall takes pride in serving Central North Carolina with a hands-on, relationship-driven approach. The company&apos;s growth is built on repeat business and long-standing partnerships with general contractors who value dependable performance and responsive service. Whether supporting large ground-up commercial developments or fast-paced interior renovations, Intex brings the same level of commitment to quality, safety, and professionalism to every project.
              </p>
              <p className="text-sm text-slate-700">
                Today, Intex Drywall continues to expand its capabilities while staying true to its core mission: to be a trusted commercial drywall and metal framing partner that delivers consistent results, supports project teams, and contributes to safe, efficient, and successful construction outcomes across Central North Carolina.
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
