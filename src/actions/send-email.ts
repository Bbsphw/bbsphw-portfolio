// src/actions/send-email.ts

"use server";

import { Resend } from "resend";
import { z } from "zod";

// 1. กำหนด Schema ให้ตรงกับฝั่ง Client เพื่อความชัวร์ (Validation 2 ชั้น)
const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormValues) {
  // 2. Validate ข้อมูลอีกครั้งฝั่ง Server (Security Best Practice)
  const result = ContactSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, message } = result.data;

  try {
    // 3. ส่งอีเมลผ่าน Resend
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // หรือ Domain ที่คุณ verify แล้ว
      to: "sophonwit.ts@gmail.com", // ⚠️ อีเมลของคุณที่จะรับข้อความ
      subject: `New Message from ${name} (Portfolio)`,
      replyTo: email, // เพื่อให้กด Reply ตอบกลับหาคนส่งได้เลย
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false, error: "Failed to send email. Please try again." };
  }
}
