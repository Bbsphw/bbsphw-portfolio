"use client";

import { LazyMotion, domAnimation } from "framer-motion";

export default function LazyMotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Performance: ใช้ domAnimation เพื่อลดขนาด Bundle (ตัด feature gestures/drag ที่ไม่จำเป็นออก)
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
