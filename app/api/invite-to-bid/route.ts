import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // In production, you would send this to an email service or CRM.
    // For now, we just log to the server console as a placeholder.
    console.log("New Invite to Bid submission:", data);

    // TODO: integrate with email (e.g., Nodemailer, SendGrid) or save to a database.

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error handling invite-to-bid submission:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
