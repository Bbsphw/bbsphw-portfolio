// src/lib/rate-limit.ts

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
  // ✅ Safety: ถ้า Map ใหญ่เกินไป (เช่นโดน Spam Attack ด้วย IP ปลอม) ให้เคลียร์ทิ้งป้องกัน Memory Leak
  if (trackers.size > 10000) {
    trackers.clear();
  }

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