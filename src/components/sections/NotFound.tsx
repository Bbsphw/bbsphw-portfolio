import { useTranslations } from "next-intl"; // ✅
import Link from "next/link"; // ✅ ใส่ Link เพื่อให้ใช้งานได้จริง

export default function NotFound() {
  const t = useTranslations("NotFound"); // ✅

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{t("title")}</h1> {/* ✅ */}
        <p className="mt-4 text-lg">{t("description")}</p> {/* ✅ */}
        <div className="mt-6">
          <Link href="/" className="text-blue-600 hover:underline">
            {t("homeButton")} {/* ✅ */}
          </Link>
        </div>
      </div>
    </div>
  );
}
