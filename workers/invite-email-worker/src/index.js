import { EmailMessage } from "cloudflare:email";

const TO_ADDRESS = "intexranch@gmail.com";
const FROM_ADDRESS = "forms@intexdrywall.com"; // must be on your domain

function asString(v) {
  if (v === null || v === undefined) return "";
  return String(v);
}

function truncate(s, max = 5000) {
  s = asString(s);
  return s.length > max ? s.slice(0, max) + "\n...[truncated]..." : s;
}

function buildBody(values) {
  const name = truncate(values.name);
  const company = truncate(values.company);
  const role = truncate(values.role);
  const email = truncate(values.email);
  const phone = truncate(values.phone);
  const projectName = truncate(values.projectName);
  const projectLocation = truncate(values.projectLocation);
  const bidDueDate = truncate(values.bidDueDate);
  const scopeDescription = truncate(values.scopeDescription);
  const plansLink = truncate(values.plansLink);

  const lines = [
    `Name: ${name}`,
    `Company: ${company}`,
    role ? `Role: ${role}` : "",
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "",
    projectName ? `Project Name: ${projectName}` : "",
    projectLocation ? `Project Location: ${projectLocation}` : "",
    bidDueDate ? `Bid Due Date: ${bidDueDate}` : "",
    "",
    "Scope Description:",
    scopeDescription || "(not provided)",
    "",
    "Plans / Specs Link:",
    plansLink || "(not provided)"
  ].filter(Boolean);

  return lines.join("\n");
}

function subjectFor(values) {
  const projectName = asString(values.projectName).trim();
  return `Invite to Bid – ${projectName || "New Project"}`;
}

function buildMime({ from, to, subject, body, replyTo }) {
  const messageId = `<${(crypto.randomUUID ? crypto.randomUUID() : Date.now())}@intexdrywall.com>`;
  const date = new Date().toUTCString();
  const headers = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `Date: ${date}`,
    `Message-ID: ${messageId}`,
    replyTo ? `Reply-To: ${replyTo}` : "",
    'Content-Type: text/plain; charset="UTF-8"',
    "MIME-Version: 1.0",
    "",
  ].filter(Boolean);

  return headers.join("\n") + body;
}

function corsHeaders(origin) {
  // If this is same-origin only, you can keep it tight. This allows your domain + local dev.
  const allowed = new Set([
    "https://intexdrywall.com",
    "https://www.intexdrywall.com",
    "http://localhost:3000"
  ]);
  const o = origin && allowed.has(origin) ? origin : "https://intexdrywall.com";
  return {
    "Access-Control-Allow-Origin": o,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}

function isAuthorizedAdmin(request, env) {
  const header = request.headers.get("Authorization") || "";
  const token = header.startsWith("Bearer ") ? header.slice("Bearer ".length).trim() : "";
  return !!env.ADMIN_TOKEN && token === env.ADMIN_TOKEN;
}

async function saveSubmission(env, values) {
  const stmt = env.intex_forms
    .prepare(`
      INSERT INTO submissions
      (name, company, role, email, phone, project_name, project_location, bid_due_date, scope_description, plans_link)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
      asString(values.name).trim(),
      asString(values.company).trim(),
      asString(values.role).trim(),
      asString(values.email).trim(),
      asString(values.phone).trim(),
      asString(values.projectName).trim(),
      asString(values.projectLocation).trim(),
      asString(values.bidDueDate).trim(),
      asString(values.scopeDescription).trim(),
      asString(values.plansLink).trim()
    );

  await stmt.run();
}

async function listSubmissions(env, limit = 50) {
  const capped = Math.min(Math.max(parseInt(limit, 10) || 0, 1), 200);
  const stmt = env.intex_forms.prepare(
    `SELECT id, name, company, role, email, phone, project_name, project_location, bid_due_date, scope_description, plans_link, created_at
     FROM submissions
     ORDER BY id DESC
     LIMIT ?`
  ).bind(capped);
  const { results } = await stmt.all();
  return results || [];
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method === "GET") {
      if (!isAuthorizedAdmin(request, env)) {
        return new Response("Unauthorized", { status: 401, headers: corsHeaders(origin) });
      }
      try {
        const rows = await listSubmissions(env, url.searchParams.get("limit"));
        return new Response(JSON.stringify({ ok: true, submissions: rows }), {
          status: 200,
          headers: { "content-type": "application/json", ...corsHeaders(origin) }
        });
      } catch (e) {
        return new Response(JSON.stringify({ ok: false, error: "DB read failed" }), {
          status: 502,
          headers: { "content-type": "application/json", ...corsHeaders(origin) }
        });
      }
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    let values;
    try {
      values = await request.json();
    } catch {
      return new Response("Bad Request: expected JSON", { status: 400 });
    }

    // Honeypot check (same field your client uses)
    const honey = asString(values.company_website).trim();
    if (honey.length > 0) {
      // treat as success to avoid tipping off bots
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "content-type": "application/json", ...corsHeaders(origin) }
      });
    }

    // Basic validation
    const email = asString(values.email).trim();
    const name = asString(values.name).trim();
    const company = asString(values.company).trim();
    if (!email || !name || !company) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), {
        status: 400,
        headers: { "content-type": "application/json", ...corsHeaders(origin) }
      });
    }

    try {
      await saveSubmission(env, values);
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: "DB write failed" }), {
        status: 502,
        headers: { "content-type": "application/json", ...corsHeaders(origin) }
      });
    }

    const subject = subjectFor(values);
    const body = buildBody(values);

    const rawMime = buildMime({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      subject,
      body: `\n${body}`,
      replyTo: email.includes("@") ? email : "",
    });

    const message = new EmailMessage(FROM_ADDRESS, TO_ADDRESS, rawMime);

    try {
      await env.FORM_EMAIL.send(message);
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "content-type": "application/json", ...corsHeaders(origin) }
      });
    } catch (e) {
      return new Response(JSON.stringify({ ok: false, error: asString(e?.message || e) }), {
        status: 502,
        headers: { "content-type": "application/json", ...corsHeaders(origin) }
      });
    }
  }
};
