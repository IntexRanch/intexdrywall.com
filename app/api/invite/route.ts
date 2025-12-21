import { NextResponse } from "next/server";

type InvitePayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectName?: string;
  projectLocation?: string;
  bidDueDate?: string;
  scopeDescription?: string;
  plansLink?: string;
};

const DESTINATION =
  process.env.INVITE_TO_ADDRESS?.trim() || "intexranch@gmail.com";
const FROM_ADDRESS =
  process.env.MAILCHANNELS_FROM_ADDRESS?.trim() || "forms@intexdrywalls.com";

function buildEmailText({
  name = "",
  company = "",
  email = "",
  phone = "",
  projectName = "",
  projectLocation = "",
  bidDueDate = "",
  scopeDescription = "",
  plansLink = "",
}: InvitePayload) {
  return [
    `Name: ${name}`,
    `Company: ${company}`,
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
    plansLink || "(not provided)",
  ]
    .filter(Boolean)
    .join("\n");
}

export async function POST(req: Request) {
  const payload = (await req.json()) as InvitePayload;

  if (!payload.name || !payload.company || !payload.email) {
    return NextResponse.json(
      { error: "Name, company, and email are required." },
      { status: 400 }
    );
  }

  const subject = `Invite to Bid – ${payload.projectName || "New Project"}`;
  const text = buildEmailText(payload);

  const mailChannelsBody = {
    personalizations: [
      {
        to: [{ email: DESTINATION }],
      },
    ],
    from: {
      email: FROM_ADDRESS,
      name: "Intex Drywall",
    },
    reply_to: payload.email
      ? {
        email: payload.email,
        name: payload.name || payload.company || payload.email,
      }
      : undefined,
    subject,
    content: [
      {
        type: "text/plain",
        value: text,
      },
    ],
  };

  const res = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mailChannelsBody),
  });

  if (!res.ok) {
    const detail = await res.text();
    return NextResponse.json(
      { error: "Failed to send invite email.", detail },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
