// src/components/providers/lazy-motion-provider.tsx

"use client";

import { LazyMotion, domAnimation } from "framer-motion";

export default function LazyMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // ใช้ domAnimation เพื่อลดขนาด Bundle (ตัด feature gestures ที่ไม่จำเป็นออก)
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
