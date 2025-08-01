import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Setup mail transporter
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: "767148001@smtp-brevo.com",
    pass: "CfO8bZwmvzM7yqXK",
  },
});

export async function GET() {
  try {
    const mailOptions = {
      from: "yuvrajpradeep2018@gmail.com",
      to: "bhimmridha62@gmail.com",
      subject: "Cron Job Test",
      text: "This is a test email sent by the cron job route.",
    };

    await transporter.sendMail(mailOptions);

    console.log("Test email sent by cron route.");

    return NextResponse.json({
      success: true,
      message: "Cron job ran and test email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending test email:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Cron job failed to send test email.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
