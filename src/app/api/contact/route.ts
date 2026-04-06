import { getPrisma } from "@/lib/prisma";
import { sendContactNotification } from "@/lib/email";

const rateLimit = new Map<string, number[]>();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimit.get(ip) || []).filter(
    (t) => now - t < WINDOW_MS
  );
  if (timestamps.length >= MAX_REQUESTS) return true;
  timestamps.push(now);
  rateLimit.set(ip, timestamps);
  return false;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Te veel aanvragen. Probeer het over een minuut opnieuw." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { naam, bedrijf, email, bericht } = body;

    if (!naam || !bedrijf || !email) {
      return Response.json(
        { error: "Naam, bedrijf en e-mailadres zijn verplicht." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Ongeldig e-mailadres." },
        { status: 400 }
      );
    }

    const data = {
      naam: String(naam).trim(),
      bedrijf: String(bedrijf).trim(),
      email: String(email).trim().toLowerCase(),
      bericht: bericht ? String(bericht).trim() : undefined,
    };

    // Store in DB if available, skip gracefully otherwise
    const prisma = getPrisma();
    if (prisma) {
      await prisma.contactSubmission.create({ data });
    } else {
      console.log("[contact] No DATABASE_URL, skipping DB storage:", data);
    }

    sendContactNotification(data).catch((err) =>
      console.error("[email] Failed to send notification:", err)
    );

    return Response.json({ success: true });
  } catch (err) {
    console.error("[contact] Error:", err);
    return Response.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 500 }
    );
  }
}
