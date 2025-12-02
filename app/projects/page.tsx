"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/Section";
import { markets } from "@/lib/markets";
import { projects } from "@/lib/projects";
import type { ProjectType } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useSearchParams, useRouter } from "next/navigation";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialMarket = searchParams.get("market") ?? "";
  const [selectedMarket, setSelectedMarket] = useState<string>(initialMarket);
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectType | "">("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (selectedMarket && p.marketId !== selectedMarket) return false;
      if (selectedProjectType && p.projectType !== selectedProjectType)
        return false;
      return true;
    });
  }, [selectedMarket, selectedProjectType]);

  function handleMarketChange(value: string) {
    setSelectedMarket(value);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    if (value) {
      params.set("market", value);
    } else {
      params.delete("market");
    }
    router.replace(`/projects?${params.toString()}`, { scroll: false });
  }

  return (
    <div>
      <div className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Project Portfolio
            </h1>
            <p className="text-sm sm:text-base text-slate-200">
              A selection of commercial drywall and metal stud framing projects
              across multiple markets and delivery methods.
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="space-y-6">
          {/* Filters */}
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-slate-900">
                Filter Projects
              </h2>
              <p className="text-xs text-slate-600">
                Narrow the portfolio by market or project type.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="space-y-1">
                <label
                  htmlFor="market"
                  className="block text-xs font-medium text-slate-800"
                >
                  Market
                </label>
                <select
                  id="market"
                  value={selectedMarket}
                  onChange={(e) => handleMarketChange(e.target.value)}
                  className="min-w-[180px] rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                >
                  <option value="">All markets</option>
                  {markets.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="projectType"
                  className="block text-xs font-medium text-slate-800"
                >
                  Project type
                </label>
                <select
                  id="projectType"
                  value={selectedProjectType}
                  onChange={(e) =>
                    setSelectedProjectType(
                      (e.target.value || "") as ProjectType | ""
                    )
                  }
                  className="min-w-[180px] rounded-md border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                >
                  <option value="">All types</option>
                  <option value="New Construction">New Construction</option>
                  <option value="Renovation">Renovation</option>
                  <option value="Tenant Improvement">Tenant Improvement</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          {filteredProjects.length === 0 ? (
            <p className="text-sm text-slate-600">
              No projects match the selected filters. Try adjusting your
              selections.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
