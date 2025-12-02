export interface Market {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const markets: Market[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    slug: "healthcare",
    description:
      "Hospitals, medical office buildings, outpatient facilities, and specialty care environments with strict infection control and phasing requirements.",
  },
  {
    id: "education",
    name: "Education",
    slug: "education",
    description:
      "K-12 schools, higher education buildings, student housing, and campus facilities often delivered on tight academic calendars.",
  },
  {
    id: "corporate-office",
    name: "Corporate / Office",
    slug: "corporate-office",
    description:
      "Core and shell office towers, build-to-suit headquarters, and high-finish tenant interiors in multi-tenant buildings.",
  },
  {
    id: "industrial-manufacturing",
    name: "Industrial / Manufacturing",
    slug: "industrial-manufacturing",
    description:
      "Manufacturing plants, distribution centers, and industrial expansions with coordinated MEP and process equipment.",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    slug: "hospitality",
    description:
      "Hotels, conference centers, and mixed-use developments requiring consistent finishes and phased turnovers.",
  },
  {
    id: "retail-mixed-use",
    name: "Retail / Mixed-Use",
    slug: "retail-mixed-use",
    description:
      "Street-level retail shells, inline tenant spaces, and mixed-use podiums with integrated parking and residential above.",
  },
  {
    id: "government-municipal",
    name: "Government / Municipal",
    slug: "government-municipal",
    description:
      "Courthouses, municipal buildings, public safety facilities, and other government projects with enhanced security and documentation.",
  },
];
