export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  bullets: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "interior-framing",
    name: "Interior Metal Stud Framing",
    slug: "interior-metal-stud-framing",
    description:
      "Non-structural metal stud framing for commercial interiors of all sizes.",
    bullets: [
      "Demising walls, tenant separations, and corridor partitions",
      "Soffits, bulkheads, and framed openings",
      "Integration with MEP systems and prefabricated components",
    ],
  },
  {
    id: "exterior-framing",
    name: "Exterior Cold-Formed Steel Framing",
    slug: "exterior-cold-formed-steel-framing",
    description:
      "Cold-formed backup framing for exterior envelopes and façade systems.",
    bullets: [
      "Backup framing for sheathing and air barrier systems",
      "Parapets, cornices, and façade articulation",
      "Coordination with curtainwall and glazing trades",
    ],
  },
  {
    id: "gypsum-systems",
    name: "Gypsum Board Systems",
    slug: "gypsum-board-systems",
    description:
      "Gypsum wallboard, tape and finish, and specialty boards installed to commercial standards.",
    bullets: [
      "Standard and abuse-resistant gypsum board",
      "Moisture and mold-resistant assemblies",
      "Level 4 and 5 finish where required",
    ],
  },
  {
    id: "fire-rated",
    name: "Shaft Walls & Fire-Rated Assemblies",
    slug: "shaft-walls-fire-rated-assemblies",
    description:
      "Code-compliant fire-rated and shaft wall assemblies for stairs, elevators, and critical systems.",
    bullets: [
      "Shaft wall systems for elevators and mechanical chases",
      "1- and 2-hour rated partitions per design",
      "Coordination with inspectors and third-party special inspection",
    ],
  },
  {
    id: "acoustical",
    name: "Acoustical & Sound Assemblies",
    slug: "acoustical-sound-assemblies",
    description:
      "Acoustical wall and ceiling systems for patient rooms, classrooms, conference centers, and more.",
    bullets: [
      "STC-rated partition assemblies",
      "Acoustical ceilings and clouds",
      "Details coordinated with AV and MEP systems",
    ],
  },
  {
    id: "tenant-improvements",
    name: "Tenant Improvements & Build-Outs",
    slug: "tenant-improvements-build-outs",
    description:
      "Fast-paced tenant build-outs and renovations in occupied and unoccupied commercial spaces.",
    bullets: [
      "Phased work in occupied buildings",
      "Night and weekend schedules as required",
      "Coordination with building management and existing tenants",
    ],
  },
];
