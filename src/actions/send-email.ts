"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";
import { env } from "@/env";
import { rateLimit } from "@/lib/rate-limit";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

// ใช้ API Key จาก env ที่ validate แล้ว
const resend = new Resend(env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormValues) {
  // 1. 🛡️ Security: Rate Limiting
  const headersList = await headers();

  // Fallback เพื่อความชัวร์ในการหา IP จริง
  const ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    "unknown";

  // อนุญาตให้ส่งได้ 3 ครั้ง ต่อ 1 ชั่วโมง ต่อ 1 IP
  const isAllowed = rateLimit(ip, 3, 60 * 60 * 1000);

  if (!isAllowed) {
    return {
      success: false,
      error: "Too many requests. Please try again in an hour.",
    };
  }

  // 2. ✅ Validation
  const result = ContactSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, message } = result.data;

  try {
    // 3. 📧 Sending Email
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: env.RECEIVER_EMAIL, // Type-safe environment variable
      subject: `New Message from ${name} (Portfolio)`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}
