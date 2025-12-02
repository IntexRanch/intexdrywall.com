import type { Market } from "./markets";

export type ProjectType = "New Construction" | "Renovation" | "Tenant Improvement";

export interface Project {
  id: string;
  name: string;
  slug: string;
  city: string;
  state: string;
  marketId: Market["id"];
  squareFootage?: number;
  scopeSummary: string;
  overview?: string;
  scopeDetails?: string[];
  challenges?: string[];
  generalContractor?: string;
  owner?: string;
  images?: string[];
  projectType?: ProjectType;
}

export const projects: Project[] = [
  {
    id: "central-medical-pavilion",
    name: "Central Medical Pavilion",
    slug: "central-medical-pavilion",
    city: "Raleigh",
    state: "NC",
    marketId: "healthcare",
    squareFootage: 180000,
    projectType: "New Construction",
    scopeSummary:
      "Interior metal stud framing and drywall for a new multi-tenant medical office building.",
    overview:
      "This ground-up medical office building required coordination with multiple tenant build-outs, robust infection control measures, and phased turnovers by floor.",
    scopeDetails: [
      "Interior non-structural metal stud framing for exam rooms, corridors, and support spaces",
      "Gypsum board installation, tape, and finish",
      "Lead-lined partitions for imaging suites",
      "Acoustical assemblies for patient privacy",
    ],
    challenges: [
      "Maintaining cleanliness and access in areas with early tenant occupancy",
      "Coordinating wall types with evolving MEP layouts",
    ],
    generalContractor: "Harborpoint Builders",
    owner: "Central Health Partners",
  },
  {
    id: "harborpoint-corporate-tower",
    name: "Harborpoint Corporate Tower",
    slug: "harborpoint-corporate-tower",
    city: "Charlotte",
    state: "NC",
    marketId: "corporate-office",
    squareFootage: 320000,
    projectType: "New Construction",
    scopeSummary:
      "Core & shell framing and interior drywall for a 24-story office tower.",
    overview:
      "The Harborpoint Corporate Tower project required tight sequencing and high-end lobby and amenity finishes coordinated across multiple trades.",
    scopeDetails: [
      "Core & shell demising and corridor walls",
      "High-finish lobby, amenity, and conference center interiors",
      "Soffits and bulkheads at feature ceilings",
    ],
    challenges: [
      "Maintaining production on upper floors while lower floors were turned over to tenants",
      "Just-in-time material deliveries in a constrained downtown site",
    ],
    generalContractor: "Skyline Construction Group",
    owner: "Harborpoint Real Estate Partners",
  },
  {
    id: "metro-tech-manufacturing-expansion",
    name: "Metro Tech Manufacturing Expansion",
    slug: "metro-tech-manufacturing-expansion",
    city: "Greensboro",
    state: "NC",
    marketId: "industrial-manufacturing",
    squareFootage: 140000,
    projectType: "New Construction",
    scopeSummary:
      "Exterior cold-formed steel framing and interior partitions for an industrial expansion.",
    overview:
      "This expansion added production space, administrative offices, and support areas to an active manufacturing campus.",
    scopeDetails: [
      "Exterior cold-formed steel backup framing for insulated metal panels",
      "Interior partitions for offices, break rooms, and locker areas",
      "Shaft walls and fire-rated assemblies at stair and elevator cores",
    ],
    challenges: [
      "Coordinating work around active plant operations",
      "Maintaining weather protection during envelope transitions",
    ],
    generalContractor: "Industrial Constructors Inc.",
    owner: "Metro Tech Manufacturing",
  },
  {
    id: "university-science-center-renovation",
    name: "University Science Center Renovation",
    slug: "university-science-center-renovation",
    city: "Durham",
    state: "NC",
    marketId: "education",
    squareFootage: 90000,
    projectType: "Renovation",
    scopeSummary:
      "Phased renovation of classrooms, labs, and common areas in an occupied campus building.",
    overview:
      "This multi-phase renovation modernized teaching labs and classrooms while the building remained partially occupied.",
    scopeDetails: [
      "Selective demolition and re-framing of interior partitions",
      "New shaft walls at revised mechanical chases",
      "Acoustical and fire-rated assemblies for lab environments",
    ],
    challenges: [
      "Night and weekend work to avoid disrupting classes",
      "Noise and dust control adjacent to occupied spaces",
    ],
    generalContractor: "Campus Builders Group",
    owner: "Triangle University",
  },
  {
    id: "riverfront-hotel-and-conference-center",
    name: "Riverfront Hotel & Conference Center",
    slug: "riverfront-hotel-and-conference-center",
    city: "Wilmington",
    state: "NC",
    marketId: "hospitality",
    squareFootage: 210000,
    projectType: "New Construction",
    scopeSummary:
      "Guestroom, corridor, and conference center framing and drywall for a full-service hotel.",
    overview:
      "The Riverfront Hotel project required repeatable production in guestroom stacks and more complex details in the lobby and conference spaces.",
    scopeDetails: [
      "Demising walls and corridor partitions for guestroom floors",
      "Lobby and bar ceilings with stepped soffits",
      "Conference center partitions and acoustic assemblies",
    ],
    challenges: [
      "Coordinating finish sequences with FF&E and casework vendors",
      "Maintaining consistent quality across hundreds of guestrooms",
    ],
    generalContractor: "Coastal Hospitality Builders",
    owner: "Riverfront Hospitality Group",
  },
  {
    id: "municipal-justice-center",
    name: "Municipal Justice Center",
    slug: "municipal-justice-center",
    city: "Cary",
    state: "NC",
    marketId: "government-municipal",
    squareFootage: 125000,
    projectType: "New Construction",
    scopeSummary:
      "Courtroom, office, and public area framing and drywall for a new justice center.",
    overview:
      "This justice center consolidated municipal courts, offices, and public services into a single secure facility.",
    scopeDetails: [
      "High-security partitions and chase walls",
      "Courtroom and public lobby ceilings with integrated lighting",
      "Back-of-house office and support area partitions",
    ],
    challenges: [
      "Enhanced documentation and inspection requirements for a public project",
      "Coordinating security details with other trades",
    ],
    generalContractor: "Civic Builders LLC",
    owner: "Town of Cary",
  },
];
