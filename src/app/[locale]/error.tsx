// src/app/[locale]/error.tsx

"use client"; 

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6 p-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
        <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-500" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Something went wrong!
        </h2>
        <p className="max-w-md text-zinc-500 dark:text-zinc-400">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
      </div>

      <div className="flex gap-4">
        <Button onClick={() => (window.location.href = "/")} variant="outline">
          Go Home
        </Button>
        <Button onClick={() => reset()} className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
