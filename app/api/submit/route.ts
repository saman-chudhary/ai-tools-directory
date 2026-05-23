import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, website, category, description, pricing, email } = body;

    // Basic validation
    if (!name || !website || !category || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log submission (in production, save to DB or send email here)
    console.log("New tool submission:", {
      name,
      website,
      category,
      description,
      pricing,
      email,
      submittedAt: new Date().toISOString(),
    });

    // TODO: Add your preferred storage:
    // Option A: Save to Supabase — await supabase.from('submissions').insert({...})
    // Option B: Send email via Resend — await resend.emails.send({...})
    // Option C: Write to Google Sheets via their API

    return NextResponse.json(
      { message: "Submission received. Thank you!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Submit error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
