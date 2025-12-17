// Manual CSV-to-JSON content exporter.
// Run: `node scripts/content-to-json.js`
// Outputs: content/generated.json

const fs = require("fs");
const path = require("path");

const csvPath = path.join(process.cwd(), "content", "content.csv");
const outputPath = path.join(process.cwd(), "content", "generated.json");

function slugify(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        row.push(field);
        field = "";
      } else if (char === "\n" || char === "\r") {
        if (field !== "" || row.length > 0) {
          row.push(field);
          rows.push(row);
          row = [];
          field = "";
        }
      } else {
        field += char;
      }
    }
  }

  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((r) => r.length > 0);
}

function readRows() {
  const csv = fs.readFileSync(csvPath, "utf8");
  const rows = parseCsv(csv);
  if (rows.length === 0) {
    throw new Error("CSV appears empty");
  }
  const headers = rows[0];
  return rows.slice(1).map((r) => {
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = r[idx] ?? "";
    });
    return obj;
  });
}

function buildContent(rows) {
  const content = {
    about: {
      heroTitle: "",
      heroSubtitle: "",
      sections: [],
      leadership: [],
      values: [],
    },
    services: [],
    markets: [],
    projects: [],
  };

  const sectionMap = new Map();
  const servicesMap = new Map();
  const marketsMap = new Map();
  const projectsMap = new Map();

  rows.forEach((row) => {
    const section = row.Section;
    const item = row.Item;
    const field = row.Field;
    const value = row.Value;

    if (!section || !item || !field) return;

    if (section === "About") {
      if (item === "Hero") {
        if (field === "title") content.about.heroTitle = value;
        if (field === "subtitle") content.about.heroSubtitle = value;
        return;
      }

      if (item === "Leadership" || item.toLowerCase().startsWith("leadership")) {
        const key = slugify(item);
        const existing = sectionMap.get(`leadership-${key}`) || {
          name: "",
          title: "",
          bio: "",
        };
        if (field === "name") existing.name = value;
        if (field === "title") existing.title = value;
        if (field === "bio") existing.bio = value;
        sectionMap.set(`leadership-${key}`, existing);
        return;
      }

      // Generic about section paragraphs
      const key = `about-${item}`;
      const existing = sectionMap.get(key) || { title: item, paragraphs: [] };
      if (field.startsWith("paragraph")) {
        if (value) existing.paragraphs.push(value);
      }
      sectionMap.set(key, existing);
      return;
    }

    if (section === "Values") {
      if (field === "desc") {
        content.about.values.push({ title: item, desc: value });
      }
      return;
    }

    if (section === "Services") {
      const key = slugify(item);
      const existing = servicesMap.get(key) || {
        id: key,
        name: item,
        slug: key,
        description: "",
        bullets: [],
      };
      if (field === "description") existing.description = value;
      if (field.startsWith("bullet") && value) existing.bullets.push(value);
      servicesMap.set(key, existing);
      return;
    }

    if (section === "Markets") {
      const key = slugify(item);
      marketsMap.set(key, {
        id: key,
        name: item,
        slug: key,
        description: value,
      });
      return;
    }

    if (section === "Projects") {
      const key = slugify(item);
      const existing = projectsMap.get(key) || {
        id: key,
        name: item,
        slug: key,
        city: "",
        state: "",
        marketId: "",
        squareFootage: undefined,
        scopeSummary: "",
        overview: "",
        scopeDetails: [],
        challenges: [],
        generalContractor: "",
        owner: "",
        projectType: "",
      };

      switch (field) {
        case "city":
          existing.city = value;
          break;
        case "state":
          existing.state = value;
          break;
        case "market":
          existing.marketId = slugify(value);
          break;
        case "projectType":
          existing.projectType = value;
          break;
        case "squareFootage":
          existing.squareFootage = value ? Number(value) : undefined;
          break;
        case "scopeSummary":
          existing.scopeSummary = value;
          break;
        case "overview":
          existing.overview = value;
          break;
        case "generalContractor":
          existing.generalContractor = value;
          break;
        case "owner":
          existing.owner = value;
          break;
        default:
          if (field.startsWith("scopeDetail") && value) {
            existing.scopeDetails.push(value);
          }
          if (field.startsWith("challenge") && value) {
            existing.challenges.push(value);
          }
          break;
      }

      projectsMap.set(key, existing);
      return;
    }
  });

  content.about.sections = Array.from(sectionMap.entries())
    .filter(([key]) => key.startsWith("about-"))
    .map(([, val]) => val);

  content.about.leadership = Array.from(sectionMap.entries())
    .filter(([key]) => key.startsWith("leadership-"))
    .map(([, val]) => val)
    .filter((val) => val.name || val.title || val.bio);

  content.services = Array.from(servicesMap.values());
  content.markets = Array.from(marketsMap.values());
  content.projects = Array.from(projectsMap.values());

  return content;
}

function main() {
  const rows = readRows();
  const content = buildContent(rows);
  fs.writeFileSync(outputPath, JSON.stringify(content, null, 2));
  console.log(`Generated ${outputPath}`);
}

main();
