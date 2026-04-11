import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const BUCKET = "videos-admin";
const FILE_PATH =
  "promo/Introducing SuperMock -- IELTS Mock Test Platform..mp4";
const SIGNED_URL_EXPIRY = 7200; // 2 hours

// Force dynamic — never pre-render at build time.
// CDN caching is handled via Cache-Control headers below.
export const dynamic = "force-dynamic";

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
        // Browser: cache 60s so repeat visits in the same tab don't re-fetch,
        // but revalidate quickly so a fresh token is always nearby.
        // Vercel Edge (s-maxage): cache 1800s (30 min), revalidate in background.
        // Total worst-case age ≈ 1800 + 600 = 2400s — safely under the 7200s token expiry.
        "Cache-Control":
          "public, max-age=60, s-maxage=1800, stale-while-revalidate=600",
        // Cloudflare: respect the same budget as Vercel Edge.
        "CDN-Cache-Control":
          "public, max-age=1800, stale-while-revalidate=600",
      },
    },
  );
}
