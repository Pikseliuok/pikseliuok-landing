import { NextResponse } from "next/server";

const HEALTH_CHECK_TARGET = process.env.HEALTH_CHECK_TARGET;
let parsedHealthCheckUrl: URL | null = null;

try {
  if (!HEALTH_CHECK_TARGET) {
    console.error(
      "Health check configuration error: HEALTH_CHECK_TARGET environment variable is not set.",
    );
  } else {
    parsedHealthCheckUrl = new URL(HEALTH_CHECK_TARGET);
  }
} catch (error) {
  console.error(
    "Health check configuration error: HEALTH_CHECK_TARGET is not a valid URL.",
    error,
  );
  parsedHealthCheckUrl = null;
}

export async function HEAD() {
  if (!parsedHealthCheckUrl) {
    return new NextResponse(null, { status: 503 });
  }

  try {
    const response = await fetch(parsedHealthCheckUrl.toString(), {
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
