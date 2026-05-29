import { NextResponse } from "next/server";
import { getCms, writeCms, type CmsData } from "@/lib/cms";
import { verifyAdmin } from "@/lib/adminAuth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 10;

export async function GET(request: Request) {
  const unauthorized = verifyAdmin(request);
  if (unauthorized) return unauthorized;

  return NextResponse.json(getCms());
}

export async function PUT(request: Request) {
  const unauthorized = verifyAdmin(request);
  if (unauthorized) return unauthorized;

  const data = (await request.json()) as CmsData;

  if (!Array.isArray(data.products) || !Array.isArray(data.news) || !data.settings) {
    return NextResponse.json({ error: "Invalid CMS payload." }, { status: 400 });
  }

  writeCms(data);
  return NextResponse.json({ ok: true });
}
