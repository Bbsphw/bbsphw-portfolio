// src/i18n/request.ts

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. รอรับค่า locale จาก Params หรือ Cookie
  let locale = await requestLocale;

  // 2. ตรวจสอบว่า locale ที่ได้มา มีอยู่ใน list ที่เรากำหนดไว้ไหม
  // แก้ไข: ใช้ as (typeof routing.locales)[number] แทน as any
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // 3. Import ไฟล์ JSON จากโฟลเดอร์ messages ที่อยู่ root level
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
