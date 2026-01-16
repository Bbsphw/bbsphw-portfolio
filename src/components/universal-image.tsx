// src/components/universal-image.tsx

"use client";

import Image, { ImageProps } from "next/image";
import { CldImage, CldImageProps } from "next-cloudinary";

// ✅ Helper ดึง Public ID แบบใหม่ (Robust Regex)
const getPublicId = (url: string) => {
  if (!url) return "";
  if (!url.includes("cloudinary.com")) return url;

  // Regex: หา pattern หลัง /upload/ ตามด้วย (อาจจะมี v+ตัวเลข/) และจับกลุ่มที่เหลือจนจบหรือเจอ .
  // รองรับทั้งแบบมี version และไม่มี version
  const regex = /\/upload\/(?:v\d+\/)?([^\.]+)/;
  const match = url.match(regex);

  return match ? match[1] : url; // fallback
};

interface UniversalImageProps extends Omit<ImageProps, "src"> {
  src?: string | null;
  cldProps?: Partial<CldImageProps>;
}

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
        format="auto"
        {...cldProps}
        {...props}
      />
    );
  }

  return <Image src={safeSrc} alt={alt} className={className} {...props} />;
}
