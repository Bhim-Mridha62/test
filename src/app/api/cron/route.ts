// app/api/cron/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // ✅ Your cron job logic here
  console.log("Running cron task!");

  // For example, call a database or send an email here

  return NextResponse.json({
    success: true,
    message: "Cron job ran successfully!",
  });
}
