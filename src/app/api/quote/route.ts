import { NextResponse } from "next/server";

function getResendClient() {
  // Dynamic import at runtime to avoid build-time crashes when env var is missing
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { Resend } = require("resend");
  return new Resend(process.env.RESEND_API_KEY);
}

const SERVICE_LABELS: Record<string, string> = {
  extension: "Extension",
  "loft-conversion": "Loft Conversion",
  bathroom: "Bathroom",
  kitchen: "Kitchen",
  roofing: "Roofing",
  plastering: "Plastering",
  painting: "Painting & Decorating",
  other: "Other",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, postcode, service, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const serviceLabel = SERVICE_LABELS[service] || service || "Not specified";

    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from: "BBBrotherBuilding <quotes@bbbrotherbuilding.co.uk>",
      to: ["bledar@bbbrotherbuilding.co.uk"],
      replyTo: email || undefined,
      subject: `New Quote Request — ${serviceLabel} in ${postcode || "N/A"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a2b3c; border-bottom: 2px solid #b87333; padding-bottom: 12px;">
            New Quote Request
          </h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #555; width: 140px; vertical-align: top;">Service</td>
              <td style="padding: 10px 12px; color: #1a2b3c;">${serviceLabel}</td>
            </tr>
            <tr style="background: #f8f8f6;">
              <td style="padding: 10px 12px; font-weight: bold; color: #555; vertical-align: top;">Name</td>
              <td style="padding: 10px 12px; color: #1a2b3c;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #555; vertical-align: top;">Phone</td>
              <td style="padding: 10px 12px; color: #1a2b3c;">
                <a href="tel:${escapeHtml(phone)}" style="color: #b87333;">${escapeHtml(phone)}</a>
              </td>
            </tr>
            <tr style="background: #f8f8f6;">
              <td style="padding: 10px 12px; font-weight: bold; color: #555; vertical-align: top;">Email</td>
              <td style="padding: 10px 12px; color: #1a2b3c;">
                ${email ? `<a href="mailto:${escapeHtml(email)}" style="color: #b87333;">${escapeHtml(email)}</a>` : "Not provided"}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #555; vertical-align: top;">Postcode</td>
              <td style="padding: 10px 12px; color: #1a2b3c;">${escapeHtml(postcode || "Not provided")}</td>
            </tr>
            ${message ? `
            <tr style="background: #f8f8f6;">
              <td style="padding: 10px 12px; font-weight: bold; color: #555; vertical-align: top;">Project Details</td>
              <td style="padding: 10px 12px; color: #1a2b3c; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
            ` : ""}
          </table>

          <p style="margin-top: 24px; padding: 16px; background: #f0ebe4; border-radius: 8px; color: #555; font-size: 14px;">
            This enquiry was submitted via the BBBrotherBuilding website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    console.log("Email sent successfully, id:", data?.id);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
