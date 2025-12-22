import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

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
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
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

    const subject = subjectFor(values);
    const body = buildBody(values);

    // Build MIME message (Cloudflare docs use EmailMessage + mimetext)
    const msg = createMimeMessage();
    msg.setSender({ name: "intexdrywall.com", addr: FROM_ADDRESS });
    msg.setRecipient(TO_ADDRESS);
    msg.setSubject(subject);
    msg.addMessage({ contentType: "text/plain", data: body });

    // Reply-To = submitter
    if (email.includes("@")) {
      msg.headers.set("Reply-To", email);
    }

    const message = new EmailMessage(FROM_ADDRESS, TO_ADDRESS, msg.asRaw());

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
