import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

describe("contactSchema", () => {
  it("accepts a complete enquiry", () => {
    expect(contactSchema.safeParse({ name: "Ama Mensah", email: "ama@example.com", enquiryType: "Engineering project", message: "We would like to explore an embedded sensing project." }).success).toBe(true);
  });

  it("rejects invalid contact details and short messages", () => {
    expect(contactSchema.safeParse({ name: "A", email: "wrong", enquiryType: "Engineering project", message: "Too short" }).success).toBe(false);
  });
});
