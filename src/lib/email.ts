import { Resend } from "resend";
import { readFileSync } from "fs";
import { join } from "path";

interface ContactData {
  naam: string;
  bedrijf: string;
  email: string;
  bericht?: string;
}

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

function loadTemplate(name: string, data: ContactData): string {
  const path = join(process.cwd(), "templates", `${name}.html`);
  let html = readFileSync(path, "utf-8");
  html = html.replace(/\{\{naam\}\}/g, data.naam);
  html = html.replace(/\{\{bedrijf\}\}/g, encodeURIComponent(data.bedrijf));
  html = html.replace(/\{\{email\}\}/g, data.email);
  html = html.replace(/\{\{bericht\}\}/g, data.bericht || "<em>(geen bericht)</em>");

  // Fix bedrijf in non-URL contexts (keep encoded only in href)
  const raw = html;
  html = raw.replace(
    /(<(?!a\b)[^>]*>)([^<]*)/g,
    (_, tag, text) => tag + text.replace(new RegExp(encodeURIComponent(data.bedrijf), "g"), data.bedrijf)
  );

  return html;
}

const FROM = process.env.RESEND_FROM || "Aifficient <onboarding@resend.dev>";
const NOTIFICATION_TO = process.env.NOTIFICATION_EMAIL || "hello@aifficient.be";

export async function sendContactNotification(data: ContactData) {
  const resend = getResend();
  if (!resend) {
    console.log("[email] RESEND_API_KEY not configured, skipping emails");
    return;
  }

  const [notif, confirm] = await Promise.all([
    resend.emails.send({
      from: FROM,
      to: NOTIFICATION_TO,
      replyTo: data.email,
      subject: `Nieuw contactformulier: ${data.naam} — ${data.bedrijf}`,
      html: loadTemplate("notification", data),
    }),

    resend.emails.send({
      from: FROM,
      to: data.email,
      subject: "Bedankt voor je aanvraag — Aifficient",
      html: loadTemplate("confirmation", data),
    }),
  ]);

  console.log("[email] Notification result:", JSON.stringify(notif));
  console.log("[email] Confirmation result:", JSON.stringify(confirm));
}
