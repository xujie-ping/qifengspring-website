import { NextResponse } from "next/server";

export function verifyAdmin(request: Request) {
  const expected = process.env.ADMIN_PASSWORD || "admin123";
  const password = request.headers.get("x-admin-password") || "";

  if (password !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
