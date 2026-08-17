import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(120),
  enquiryType: z.enum(["Product enquiry", "School partnership", "Engineering project", "Sponsorship", "Partnership", "Join the team"]),
  message: z.string().trim().min(20, "Tell us a little more (at least 20 characters)").max(2000),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
