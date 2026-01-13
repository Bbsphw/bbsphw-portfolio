// src/lib/rate-limit.ts

// ✅ Simple In-Memory Rate Limiter (Token Bucket Algorithm)
// Note: บน Vercel/Serverless ข้อมูลนี้จะรีเซ็ตเมื่อ Lambda หยุดทำงาน
// แต่ก็เพียงพอสำหรับการกันสแปมพื้นฐาน (Best Practice สำหรับ Portfolio ที่ไม่มี Database)

type Tracker = {
  count: number;
  expiresAt: number;
};

const trackers = new Map<string, Tracker>();

/**
 * @param ip IP Address ของผู้ส่ง
 * @param limit จำนวนครั้งที่อนุญาต (เช่น 3 ครั้ง)
 * @param windowMs ระยะเวลาที่นับ (เช่น 1 ชั่วโมง = 3600000ms)
 */
export function rateLimit(
  ip: string,
  limit: number = 3,
  windowMs: number = 3600000,
) {
  const now = Date.now();
  const tracker = trackers.get(ip) || { count: 0, expiresAt: now + windowMs };

  // ถ้าระยะเวลาหมดอายุแล้ว ให้รีเซ็ตใหม่
  if (now > tracker.expiresAt) {
    tracker.count = 0;
    tracker.expiresAt = now + windowMs;
  }

  tracker.count++;
  trackers.set(ip, tracker);

  return tracker.count <= limit;
}
