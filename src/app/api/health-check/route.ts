import { NextResponse } from "next/server";

export async function HEAD() {
  try {
    const response = await fetch("http://localhost:3001", {
      method: "HEAD",
      signal: AbortSignal.timeout(3000),
    });

    if (response.ok) {
      return new NextResponse(null, { status: 200 });
    } else {
      return new NextResponse(null, { status: 503 });
    }
  } catch (error) {
    console.error("Health check failed:", error);
    return new NextResponse(null, { status: 503 });
  }
}

export async function GET() {
  return HEAD();
}
