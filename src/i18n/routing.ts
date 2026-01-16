// src/i18n/routing.ts

import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // รายชื่อภาษาทั้งหมดที่รองรับ
  locales: ["en", "th"],

  // ภาษาเริ่มต้น ถ้า user เข้ามาโดยไม่มี prefix (เช่น /)
  defaultLocale: "en",

  // (Optional) ถ้าไม่อยากให้ภาษา default มี prefix (เช่น / แทน /en) ให้ใส่บรรทัดนี้
  // localePrefix: 'as-needed'
});

// สร้าง function Navigation ที่รองรับ i18n
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
