// src/components/sections/ContactSection.tsx
import { MdArrowOutward } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { SiGithub } from "react-icons/si";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContactForm } from "../forms/ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      // className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <header className="mb-8">
        <h1
          id="contact-heading"
          className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          Contact
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Have a question or looking for a developer ?
        </p>
      </header>

      {/* Separator */}
      <hr className="col-span-6 my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Contact Cards */}
      <div className="flex flex-col space-y-4">
        <h4 className="mb-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
          Find me on social media
        </h4>
        <div className="grid grid-cols-6 grid-rows-9 gap-6">
          {/* Gmail */}
          {/* <div className="col-span-6 row-span-3 flex items-center justify-center"> */}
          <div className="col-span-6 row-span-3">
            <div className="relative grid w-full grid-cols-1 gap-4 overflow-hidden rounded-md border border-red-300 bg-gradient-to-b from-red-700 to-red-900 p-6 md:grid-cols-[2.5fr_1fr]">
              {/* Background icon inside the box behind text */}
              <div className="absolute -top-[3.5rem] -left-[3.5rem] rotate-45 text-zinc-50/5">
                <SiGmail className="h-[275px] w-[275px] text-white/10" />
              </div>

              {/* Text Content */}
              <div className="z-10 flex flex-col justify-between gap-y-2 subpixel-antialiased">
                <h4 className="text-lg font-semibold tracking-wide text-red-300">
                  Get in touch
                </h4>
                <p className="pb-2 text-sm text-red-300">
                  For inquiries or collaborations, please contact us via email.
                </p>
                <Button
                  asChild
                  className="hover:bg-opacity-100 rounded-md bg-red-300 px-4 py-2 transition duration-100 md:w-max"
                >
                  <Link
                    href="mailto:sophonwit.ts@gmail.com"
                    aria-label="Send email"
                    className="flex items-center justify-center gap-x-2 text-black"
                  >
                    <span className="text-sm font-medium">Go to Email</span>
                    <MdArrowOutward className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Gmail Icon (ด้านขวา) */}
              <div className="flex items-end justify-end">
                <div className="border-opacity-10 bg-opacity-5 rounded-2xl border-8 p-2 text-zinc-50">
                  <SiGmail className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Instagram */}
          {/* <div className="col-span-3 row-span-3 row-start-4 flex items-center justify-center"> */}
          <div className="col-span-3 row-span-3 row-start-4">
            <div className="undefined relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border border-purple-200 bg-gradient-to-b from-purple-700 via-pink-500 to-orange-500 p-6">
              {/* Background icon inside the box behind text */}
              <div className="absolute -top-[3.5rem] -left-[3.5rem] rotate-45 text-zinc-50/5">
                <SiInstagram className="h-[275px] w-[275px] text-white/10" />
              </div>

              {/* Text Content */}
              <div className="z-10 flex flex-col justify-between gap-y-2 subpixel-antialiased">
                <h4 className="text-lg font-semibold tracking-wide text-purple-300">
                  Follow My Journey
                </h4>
                <p className="pb-2 text-sm text-purple-300">
                  Stay updated with my latest posts and stories on Instagram.
                </p>
                <Button
                  asChild
                  className="hover:bg-opacity-100 rounded-md bg-purple-300 px-4 py-2 transition duration-100 md:w-max"
                >
                  <Link
                    href="https://www.instagram.com/bbsphw_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Instagram"
                    className="flex items-center justify-center gap-x-2 text-black"
                  >
                    <span className="text-sm font-medium">Go to Instagram</span>
                    <MdArrowOutward className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Instagram Icon (ด้านขวา) */}
              <div className="flex items-end justify-end">
                <div className="border-opacity-10 bg-opacity-5 rounded-2xl border-8 p-2 text-zinc-50">
                  <SiInstagram className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          {/* <div className="col-span-3 row-span-3 col-start-4 row-start-4 flex items-center justify-center"> */}
          <div className="col-span-3 col-start-4 row-span-3 row-start-4">
            <div className="undefined relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border border-sky-300 bg-gradient-to-b from-sky-700 to-sky-900 p-6">
              {/* Background icon inside the box behind text */}
              <div className="absolute -top-[3.5rem] -left-[3.5rem] rotate-45 text-zinc-50/5">
                <SiLinkedin className="h-[275px] w-[275px] text-white/10" />
              </div>

              {/* Text Content */}
              <div className="z-10 flex flex-col justify-between gap-y-2 subpixel-antialiased">
                <h4 className="text-lg font-semibold tracking-wide text-sky-300">
                  Let&apos;s Connect
                </h4>
                <p className="pb-2 text-sm text-sky-300">
                  Connect for collaboration or explore my professional
                  experience.
                </p>
                <Button
                  asChild
                  className="hover:bg-opacity-100 rounded-md bg-sky-300 px-4 py-2 transition duration-100 md:w-max"
                >
                  <Link
                    href="linkedin.com/in/sophonwit-thapseng-1b1076330"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn"
                    className="flex items-center justify-center gap-x-2 text-black"
                  >
                    <span className="text-sm font-medium">Go to LinkedIn</span>
                    <MdArrowOutward className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* LinkedIn Icon (ด้านขวา) */}
              <div className="flex items-end justify-end">
                <div className="border-opacity-10 bg-opacity-5 rounded-2xl border-8 p-2 text-zinc-50">
                  <SiLinkedin className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          {/* TikTok */}
          {/* <div className="col-span-3 row-span-3 row-start-7 flex items-center justify-center"> */}
          <div className="col-span-3 row-span-3 row-start-7">
            <div className="undefined relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border border-zinc-400 bg-gradient-to-b from-zinc-700 to-zinc-900 p-6">
              {/* Background icon inside the box behind text */}
              <div className="absolute -top-[3.5rem] -left-[3.5rem] rotate-45 text-zinc-50/5">
                <SiTiktok className="h-[275px] w-[275px] text-white/10" />
              </div>

              {/* Text Content */}
              <div className="z-10 flex flex-col justify-between gap-y-2 subpixel-antialiased">
                <h4 className="text-lg font-semibold tracking-wide text-zinc-300">
                  Join the Fun
                </h4>
                <p className="pb-2 text-sm text-zinc-300">
                  Follow me on TikTok for entertaining and engaging content.
                </p>
                <Button
                  asChild
                  className="hover:bg-opacity-100 rounded-md bg-zinc-300 px-4 py-2 transition duration-100 md:w-max"
                >
                  <Link
                    href="https://www.tiktok.com/@bbsphw_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit TikTok"
                    className="flex items-center justify-center gap-x-2 text-black"
                  >
                    <span className="text-sm font-medium">Go to TikTok</span>
                    <MdArrowOutward className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* TikTok Icon (ด้านขวา) */}
              <div className="flex items-end justify-end">
                <div className="border-opacity-10 bg-opacity-5 rounded-2xl border-8 p-2 text-zinc-50">
                  <SiTiktok className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>

          {/* GitHub */}
          {/* <div className="col-span-3 row-span-3 col-start-4 row-start-7 flex items-center justify-center"> */}
          <div className="col-span-3 col-start-4 row-span-3 row-start-7">
            <div className="undefined relative grid w-full grid-cols-[2.5fr_1fr] overflow-hidden rounded-md border border-slate-400 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
              {/* Background icon inside the box behind text */}
              <div className="absolute -top-[3.5rem] -left-[3.5rem] rotate-45 text-zinc-50/5">
                <SiGithub className="h-[275px] w-[275px] text-white/10" />
              </div>

              {/* Text Content */}
              <div className="z-10 flex flex-col justify-between gap-y-2 subpixel-antialiased">
                <h4 className="text-lg font-semibold tracking-wide text-slate-300">
                  Explore the Code
                </h4>
                <p className="pb-2 text-sm text-slate-300">
                  Explore the source code for all my projects on GitHub.
                </p>
                <Button
                  asChild
                  className="hover:bg-opacity-100 rounded-md bg-slate-300 px-4 py-2 transition duration-100 md:w-max"
                >
                  <Link
                    href="https://github.com/Bbsphw"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit github"
                    className="flex items-center justify-center gap-x-2 text-black"
                  >
                    <span className="text-sm font-medium">Go to Github</span>
                    <MdArrowOutward className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              {/* GitHub Icon (ด้านขวา) */}
              <div className="flex items-end justify-end">
                <div className="border-opacity-10 bg-opacity-5 rounded-2xl border-8 p-2 text-zinc-50">
                  <SiGithub className="h-10 w-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="col-span-6 my-6 border-zinc-200 dark:border-zinc-700" />

      {/* Send me a message */}
      <div className="space-y-4">
        <h2>Or Send Me a Message</h2>
        <div className="grid w-full gap-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
