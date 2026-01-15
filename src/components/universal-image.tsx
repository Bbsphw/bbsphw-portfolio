// src/components/universal-image.tsx

"use client";

import Image, { ImageProps } from "next/image";
import { CldImage, CldImageProps } from "next-cloudinary";

// Helper ดึง Public ID
const getPublicId = (url: string) => {
  if (!url) return "";
  if (!url.includes("cloudinary.com")) return url;
  const parts = url.split("/upload/");
  if (parts.length < 2) return url;
  const pathParts = parts[1].split("/");
  if (
    pathParts[0].startsWith("v") &&
    !isNaN(Number(pathParts[0].substring(1)))
  ) {
    return pathParts.slice(1).join("/");
  }
  return parts[1];
};

interface UniversalImageProps extends Omit<ImageProps, "src"> {
  src?: string | null;
  cldProps?: Partial<CldImageProps>; // เผื่อส่ง props พิเศษของ Cloudinary
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
        {...cldProps} // รับ props เสริมเช่น quality, sharpen
        {...props} // รับ props มาตรฐานเช่น fill, sizes
      />
    );
  }

  return <Image src={safeSrc} alt={alt} className={className} {...props} />;
}
