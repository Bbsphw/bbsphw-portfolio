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
🏁 Getting Started
Follow these steps to set up the project locally.

Prerequisites
Node.js (v18.17 or later)

npm, yarn, pnpm, or bun

1. Clone the repository
Bash

git clone [https://github.com/your-username/bbsphw-portfolio.git](https://github.com/your-username/bbsphw-portfolio.git)
cd bbsphw-portfolio
2. Install dependencies
Bash

npm install
# or
yarn install
# or
pnpm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following variables (based on src/env.ts):

ข้อมูลโค้ด

# Server-side Environment Variables (Required for Contact Form)
RESEND_API_KEY=re_123456789
RECEIVER_EMAIL=your-email@example.com
NODE_ENV=development

# Public Environment Variables (Optional)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
Note: You can get your API Key from Resend.

4. Run the development server
Bash

npm run dev
# or
yarn dev
# or
pnpm dev
Open http://localhost:3000 with your browser to see the result.

📜 Scripts
npm run dev: Runs the app in development mode with Turbopack.

npm run build: Builds the app for production.

npm start: Runs the built app in production mode.

npm run lint: Runs ESLint to check for code quality issues.

🚀 Deployment
The easiest way to deploy your Next.js app is to use the Vercel Platform.

Push your code to a GitHub repository.

Import the project into Vercel.

Add the Environment Variables (RESEND_API_KEY, etc.) in the Vercel project settings.

Deploy! 🚀

👤 Author
Sophonwit Thapseng

Portfolio: sophonwit.site

GitHub: @Bbsphw

📄 License
This project is open source and available under the MIT License.


### สิ่งที่เพิ่มเข้ามาเพื่อให้เป็น Best Practice:
1.  **Badges:** เพิ่มโลโก้เทคโนโลยีเพื่อให้ดูน่าสนใจและเห็นภาพรวม Tech Stack ได้ทันที
2.  **Introduction ที่ชัดเจน:** สรุปจุดเด่นของโปรเจกต์ (Lighthouse Score, SEO, Clean Code)
3.  **Detailed Tech Stack:** แบ่งหมวดหมู่เครื่องมือที่ใช้ (UI, Forms, Core) ให้คนอ่านเข้าใจง่าย
4.  **Project Structure:** แสดงโครงสร้างไฟล์เพื่อให้ Developer คนอื่น (หรือตัวคุณเองในอนาคต) เข้าใจที่เก็บไฟล์ต่างๆ ได้เร็วขึ้น
5.  **Environment Variables:** ระบุตัวแปรที่ **จำเป็น** ต้องใช้ (ดึงมาจากไฟล์ `src/env.ts` ของคุณ) ซึ่งสำคัญมากสำหรับคนที่เอาไปรันต่อ
6.  **Getting Started:** ขั้นตอนการติดตั้งที่ชัดเจน
7.  **Scripts:** อธิบายคำสั่งที่มีให้ใช้
