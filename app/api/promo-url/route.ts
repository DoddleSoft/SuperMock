import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const BUCKET = "videos-admin";
const FILE_PATH =
  "promo/Introducing SuperMock -- IELTS Mock Test Platform..mp4";
const SIGNED_URL_EXPIRY = 7200; // 2 hours

// Revalidate every 50 min — Vercel CDN caches the response at the edge.
// Most requests never hit the serverless function at all.
export const revalidate = 3000;

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(FILE_PATH, SIGNED_URL_EXPIRY);

  if (error || !data?.signedUrl) {
    return NextResponse.json(
      { error: "Failed to generate video URL" },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { url: data.signedUrl },
    {
      headers: {
        "CDN-Cache-Control": "public, max-age=3000, stale-while-revalidate=600",
        "Cache-Control": "public, max-age=3000, stale-while-revalidate=600",
      },
    },
  );
}
