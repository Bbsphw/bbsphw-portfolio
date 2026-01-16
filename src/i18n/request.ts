// src/i18n/request.ts

import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. รอรับค่า locale จาก Params หรือ Cookie
  let locale = await requestLocale;

  // 2. ตรวจสอบว่า locale ที่ได้มา มีอยู่ใน list ที่เรากำหนดไว้ไหม
  // ถ้าไม่มี (เป็น null หรือค่าแปลกๆ) ให้ใช้ defaultLocale ('en')
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    // 3. Import ไฟล์ JSON จากโฟลเดอร์ messages ที่อยู่ root level
    // ใช้ ../.. เพื่อถอยออกจาก src/i18n ไปหา messages/
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
