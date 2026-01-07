// src/components/forms/ContactForm.tsx

"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendEmail } from "@/actions/send-email"; // Import Server Action
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, XCircle } from "lucide-react"; // Import Icons

// Schema
const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

export function ContactForm() {
  const [isPending, startTransition] = useTransition(); // สำหรับสถานะ Loading
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    setStatus({ type: null, message: "" }); // Reset status

    // ใช้ startTransition เพื่อเรียก Server Action โดยไม่บล็อก UI
    startTransition(async () => {
      const result = await sendEmail(data);

      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        form.reset(); // เคลียร์ฟอร์มเมื่อส่งสำเร็จ
      } else {
        setStatus({
          type: "error",
          message: result.error || "Something went wrong.",
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* ชื่อและอีเมล */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" disabled={isPending} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* ข้อความ */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here..."
                  className="min-h-[100px] resize-none"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ข้อความแสดงสถานะ (Feedback Message) */}
        {status.message && (
          <div
            className={`flex items-center gap-2 rounded-lg p-3 text-sm font-medium ${
              status.type === "success"
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
            }`}
          >
            {status.type === "success" ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <XCircle className="h-4 w-4" />
            )}
            {status.message}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-neutral-600 px-4 py-2 text-neutral-50 shadow-md transition-all duration-300 hover:bg-neutral-700 hover:shadow-lg disabled:opacity-70 dark:bg-neutral-800 hover:dark:bg-neutral-700"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  );
}
