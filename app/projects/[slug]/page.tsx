import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { projects } from "@/lib/projects";
import { markets } from "@/lib/markets";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  const market = markets.find((m) => m.id === project.marketId);

  return (
    <div>
      <div className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wide text-slate-300">
              Project
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              {project.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-200">
              <span>
                {project.city}, {project.state}
              </span>
              {market && (
                <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 font-semibold">
                  {market.name}
                </span>
              )}
              {project.projectType && (
                <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 font-semibold">
                  {project.projectType}
                </span>
              )}
              {project.squareFootage && (
                <span className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 font-semibold">
                  {project.squareFootage.toLocaleString()} sq ft
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
          <div className="space-y-6">
            {project.overview && (
              <section className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-900">
                  Project Overview
                </h2>
                <p className="text-sm text-slate-700">{project.overview}</p>
              </section>
            )}

            {project.scopeDetails && project.scopeDetails.length > 0 && (
              <section className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-900">
                  Scope of Work
                </h2>
                <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                  {project.scopeDetails.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <section className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-900">
                  Key Challenges &amp; Solutions
                </h2>
                <ul className="list-disc pl-4 space-y-1 text-sm text-slate-700">
                  {project.challenges.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-4 text-sm text-slate-700">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                Project Details
              </h2>
              {project.generalContractor && (
                <p>
                  <span className="font-medium">General Contractor: </span>
                  {project.generalContractor}
                </p>
              )}
              {project.owner && (
                <p>
                  <span className="font-medium">Owner: </span>
                  {project.owner}
                </p>
              )}
              {market && (
                <p>
                  <span className="font-medium">Market: </span>
                  {market.name}
                </p>
              )}
              {project.projectType && (
                <p>
                  <span className="font-medium">Project type: </span>
                  {project.projectType}
                </p>
              )}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
              <h2 className="text-base font-semibold text-slate-900">
                Similar Projects
              </h2>
              <p className="text-xs text-slate-600">
                Highlight other projects in this market or region here, or link
                back to the main portfolio.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </div>
  );
}
