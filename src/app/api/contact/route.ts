import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Invalid form submission" }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ message: "Accepted" });
  // Delivery provider is connected after the official recipient address is confirmed.
  console.info("Validated contact enquiry", { enquiryType: parsed.data.enquiryType, receivedAt: new Date().toISOString() });
  return NextResponse.json({ message: "Enquiry received" }, { status: 202 });
}
