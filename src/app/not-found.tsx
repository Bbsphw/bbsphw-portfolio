import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold text-zinc-900 dark:text-zinc-50">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300">
        Page Not Found
      </h2>
      <p className="max-w-md text-zinc-500 dark:text-zinc-400">
        Sorry, the project or page you are looking for does not exist. It might
        have been moved or deleted.
      </p>
      <Button asChild className="mt-4">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
