import { Section } from "@/components/Section";
import { InviteToBidForm } from "@/components/InviteToBidForm";

export default function InviteToBidPage() {
  return (
    <div>
      <div className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Invite Us to Bid
            </h1>
            <p className="text-sm sm:text-base text-slate-200">
              Share your project details and our preconstruction team will
              review your plans and respond with next steps. We focus on
              commercial drywall and metal stud framing scopes for offices,
              hospitals, schools, and industrial facilities.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
          <InviteToBidForm />
          <aside className="space-y-4 text-sm text-slate-700">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-base font-semibold text-slate-900">
                Direct Contact
              </h2>
              <p className="mt-2">
                Prefer to email us directly? Send your plans and specs to:
              </p>
              <p className="mt-2 font-medium text-slate-900">
                gdelgado@intexdrywalls.com
              </p>
              <p className="mt-1">
                Office: <span className="font-medium">(919) 391-0325</span>
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                Typical Projects
              </h2>
              <ul className="list-disc pl-4 space-y-1">
                <li>Core & shell office buildings</li>
                <li>Medical office and hospital interiors</li>
                <li>School and higher education facilities</li>
                <li>Industrial and manufacturing expansions</li>
                <li>Tenant improvement build-outs</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
