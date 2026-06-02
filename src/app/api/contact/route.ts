import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  intent: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  product?: string;
  message: string;
  consent: boolean;
}

function isValid(p: Partial<ContactPayload>): p is ContactPayload {
  if (!p.intent || typeof p.intent !== "string") return false;
  if (!p.firstName || !p.lastName) return false;
  if (!p.email || !/.+@.+\..+/.test(p.email)) return false;
  if (!p.message || p.message.length < 5) return false;
  if (!p.consent) return false;
  return true;
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!isValid(body)) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 422 });
  }

  // ─── Phase 2 hook: actually deliver the message ───────────────────────
  // const resendKey = process.env.RESEND_API_KEY;
  // if (resendKey) {
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(resendKey);
  //   await resend.emails.send({
  //     from: "form@swisslongevitylab.com",
  //     to: ["hello@swisslongevitylab.com"],
  //     subject: `[Web] ${body.intent} – ${body.lastName}`,
  //     replyTo: body.email,
  //     text: serialise(body),
  //   });
  // }

  console.info("[contact] submission", {
    intent: body.intent,
    email: body.email,
    company: body.company,
    service: body.service,
    product: body.product,
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
