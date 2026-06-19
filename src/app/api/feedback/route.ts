import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Gmail account that sends (and receives) uninstall feedback. EMAIL_USER can
// override it, but it defaults to the inbox below so a missing var can't leave
// nodemailer with an empty username ("Missing credentials for PLAIN").
const FEEDBACK_EMAIL = process.env.EMAIL_USER || "ai.workspace.extension@gmail.com";

export async function POST(request: Request) {
  try {
    const appPassword = process.env.EMAIL_APP_PASSWORD;
    if (!appPassword) {
      console.error(
        'Feedback email not configured: EMAIL_APP_PASSWORD is missing. Set it (a Gmail App Password for ' +
          FEEDBACK_EMAIL +
          ') in the Vercel project environment variables.',
      );
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 503 },
      );
    }

    const { reason, feedback } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: FEEDBACK_EMAIL,
        pass: appPassword,
      },
    });

    const mailOptions = {
      from: FEEDBACK_EMAIL,
      to: "ai.workspace.extension@gmail.com",
      subject: `New Uninstall Feedback: ${reason}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px; background-color: #f8fafc;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #38bdf8; padding-bottom: 10px;">Uninstall Feedback</h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Reason</h3>
            <p style="background-color: #fff; padding: 15px; border-radius: 6px; border: 1px solid #cbd5e1; color: #0f172a; font-weight: bold;">
              ${reason}
            </p>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #64748b; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Additional Feedback</h3>
            <p style="background-color: #fff; padding: 15px; border-radius: 6px; border: 1px solid #cbd5e1; color: #334155; line-height: 1.6;">
              ${feedback || "No additional feedback provided."}
            </p>
          </div>

          <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
            Sent from AI Workspace Landing Page
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Feedback sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send feedback" },
      { status: 500 }
    );
  }
}
