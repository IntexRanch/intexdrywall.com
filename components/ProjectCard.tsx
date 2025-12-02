import Link from "next/link";
import type { Project } from "@/lib/projects";
import { markets } from "@/lib/markets";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const market = markets.find((m) => m.id === project.marketId);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-900">
          {project.name}
        </h3>
        {market && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
            {market.name}
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-slate-500">
        {project.city}, {project.state}
      </p>
      <p className="mt-3 text-sm text-slate-600">{project.scopeSummary}</p>
      {project.squareFootage && (
        <p className="mt-3 text-xs text-slate-500">
          Approx. {project.squareFootage.toLocaleString()} sq ft
        </p>
      )}
      {project.projectType && (
        <p className="mt-1 text-xs text-slate-500">
          Project type: {project.projectType}
        </p>
      )}
    </Link>
  );
}
