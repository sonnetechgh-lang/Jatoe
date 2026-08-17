"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

const enquiryTypes = ["Product enquiry", "School partnership", "Engineering project", "Sponsorship", "Partnership", "Join the team"] as const;

export function ContactForm() {
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });
  async function onSubmit(values: ContactFormValues) {
    setResult("idle");
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    if (response.ok) { setResult("success"); reset(); } else setResult("error");
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="form-row"><div className="field"><label htmlFor="name">Your name</label><input id="name" autoComplete="name" {...register("name")} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name ? <p className="field-error" id="name-error">{errors.name.message}</p> : null}</div><div className="field"><label htmlFor="email">Email address</label><input id="email" type="email" autoComplete="email" {...register("email")} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email ? <p className="field-error" id="email-error">{errors.email.message}</p> : null}</div></div>
      <div className="field"><label htmlFor="enquiryType">What would you like to discuss?</label><select id="enquiryType" defaultValue="" {...register("enquiryType")} aria-invalid={Boolean(errors.enquiryType)}><option value="" disabled>Select an enquiry type</option>{enquiryTypes.map((type) => <option key={type}>{type}</option>)}</select>{errors.enquiryType ? <p className="field-error">Choose an enquiry type</p> : null}</div>
      <div className="field"><label htmlFor="message">Tell us a little more</label><textarea id="message" rows={6} {...register("message")} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} /><p className={errors.message ? "field-error" : "field-hint"} id="message-error">{errors.message?.message ?? "What are you hoping to do, who is it for and when would you like to begin?"}</p></div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" {...register("website")} /></div>
      <button className="submit-button" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send enquiry"}<Send aria-hidden="true" size={18} /></button>
      <div className="form-status" aria-live="polite">{result === "success" ? "Thank you. We’ve received your enquiry." : result === "error" ? "We could not send your enquiry. Please try again shortly." : null}</div>
    </form>
  );
}
