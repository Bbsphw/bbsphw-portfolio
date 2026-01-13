# Sophonwit Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern, high-performance personal portfolio website built to showcase my development journey, projects, and skills. Designed with a focus on **User Experience (UX)**, **Performance (100 Lighthouse score)**, and **Clean Code Architecture**.

## 🚀 Features

- **⚡️ Modern Tech Stack:** Built with Next.js 15 (App Router), React 19, and Tailwind CSS 4.
- **🎨 Responsive Design:** Mobile-first approach ensuring perfect display on all devices.
- **🌗 Dark/Light Mode:** System-aware theme switching using `next-themes`.
- **✨ Smooth Animations:** Powered by `framer-motion` for page transitions and interactive elements.
- **📧 Contact Form:** Integrated with **Resend** for handling emails via server actions.
- **🛡️ Type Safety:** Fully typed with TypeScript and Zod for schema validation.
- **🔍 SEO Optimized:** Configured metadata, Open Graph tags, and sitemap.

## 🛠️ Tech Stack

**Core:**
- [Next.js 15](https://nextjs.org/) - The React Framework for the Web (App Router & Turbopack)
- [React 19](https://react.dev/) - JS library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Static type definitions

**Styling & UI:**
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

**Forms & Validation:**
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms
- [Zod](https://zod.dev/) - TypeScript-first schema declaration and validation
- [Sonner](https://sonner.emilkowal.ski/) - An opinionated toast component

**Utils:**
- [Resend](https://resend.com/) - Email API for developers
- [clsx](https://github.com/lukeed/clsx) / [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Class name utilities

## 📂 Project Structure

```bash
bbsphw-portfolio/
├── public/              # Static assets (images, icons, fonts)
├── src/
│   ├── actions/         # Server Actions (e.g., send-email.ts)
│   ├── app/             # Next.js App Router pages & layouts
│   ├── components/      # React components
│   │   ├── cards/       # Project/Experience/Education cards
│   │   ├── sections/    # Page sections (Hero, About, Contact)
│   │   └── ui/          # Reusable UI components (Button, Input, etc.)
│   ├── data/            # Static data content (projects, skills, about)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions (utils.ts, rate-limit.ts)
│   ├── providers/       # Context providers (Theme, Language)
│   ├── types/           # TypeScript type definitions
│   └── env.ts           # Environment variables schema (Zod)
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Project dependencies
