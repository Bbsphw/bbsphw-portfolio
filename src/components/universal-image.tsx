// src/components/universal-image.tsx

"use client";

import Image, { ImageProps } from "next/image";
import { CldImage, CldImageProps } from "next-cloudinary";

// ✅ Helper ดึง Public ID แบบใหม่ (Robust Regex)
const getPublicId = (url: string) => {
  if (!url) return "";
  if (!url.includes("cloudinary.com")) return url;

  // Regex: หา pattern หลัง /upload/ ตามด้วย (อาจจะมี v+ตัวเลข/) และจับกลุ่มที่เหลือจนจบหรือเจอ .
  const regex = /\/upload\/(?:v\d+\/)?([^\.]+)/;
  const match = url.match(regex);

  return match ? match[1] : url; // fallback
};

interface UniversalImageProps extends Omit<ImageProps, "src"> {
  src?: string | null;
  cldProps?: Partial<CldImageProps>;
}

// 1x1 gray pixel SVG base64 for placeholder
const blurDataUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiA5Ij48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iI2U1ZTdlYiIvPjwvc3ZnPg==";

export function UniversalImage({
  src,
  alt,
  className,
  cldProps,
  ...props
}: UniversalImageProps) {
  const safeSrc = src || "/images/project-placeholder.svg";
  const isCloudinary = safeSrc.includes("cloudinary.com");
  const publicId = isCloudinary ? getPublicId(safeSrc) : safeSrc;

  if (isCloudinary && publicId) {
    return (
      <CldImage
        src={publicId}
        alt={alt}
        className={className}
        // ✅ Performance Improvements:
        format="auto" // ให้ Cloudinary เลือกไฟล์ที่ดีที่สุด (AVIF/WebP)
        quality="auto" // บีบอัดภาพอัตโนมัติ (ลดขนาดไฟล์โดยตาเปล่าแยกไม่ออก)
        // dpr="auto" // ปรับความชัดตาม Device Pixel Ratio
        placeholder="blur"
        blurDataURL={blurDataUrl}
        {...cldProps} // ยอมให้ override ค่าได้ถ้าส่ง cldProps มา
        {...props} // ส่ง props มาตรฐาน (fill, sizes, priority) ต่อไป
      />
    );
  }

  // สำหรับรูป Local
  return (
    <Image 
      src={safeSrc} 
      alt={alt} 
      className={className} 
      placeholder="blur"
      blurDataURL={blurDataUrl}
      {...props} 
    />
  );
}
