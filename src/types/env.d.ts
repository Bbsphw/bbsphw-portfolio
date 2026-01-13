// src/types/env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    RESEND_API_KEY: string;
    RECEIVER_EMAIL: string;
    NEXT_PUBLIC_BASE_URL?: string;
    NODE_ENV: "development" | "production" | "test";
  }
}
