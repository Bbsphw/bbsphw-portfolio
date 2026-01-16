// src/env.ts

import "server-only";

import { z } from "zod";

const envSchema = z.object({
  // Server-side Environment Variables
  RESEND_API_KEY: z.string().min(1, "❌ RESEND_API_KEY is missing!"),
  RECEIVER_EMAIL: z.string().email("❌ RECEIVER_EMAIL is invalid!"),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  // Public Environment Variables (ถ้ามีให้เพิ่มตรงนี้)
  NEXT_PUBLIC_BASE_URL: z.string().optional().default("http://localhost:3000"),
});

// Validate process.env
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    parsed.error.flatten().fieldErrors,
  );
  throw new Error("Invalid environment variables. Check your .env file.");
}

export const env = parsed.data;
