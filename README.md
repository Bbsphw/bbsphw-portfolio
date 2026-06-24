# Sophonwit Thapseng | Portfolio 🚀

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15.5.19-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-v4.1.7-06B6D4)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)

A highly optimized, SEO-friendly, and interactive personal portfolio website showcasing my skills, projects, and professional journey as a Software Engineer & Full Stack Developer.

---

## 🌟 Key Features

- **Blazing Fast Performance**: Built with Next.js 15.5.19 (App Router) using **Turbopack** and 100% Static Site Generation (SSG).
- **React Compiler Enabled**: Leveraging React 19.2.3 with the experimental React Compiler for seamless state optimization without manual `useMemo` or `useCallback`.
- **Content via MDX**: Case studies and project details are structured within an **MDX-based CMS** (`next-mdx-remote` v6) for clean separation of code and content.
- **Dynamic Open Graph Images**: Auto-generated `@vercel/og` thumbnails for professional social sharing.
- **SEO & Structured Data**: Implemented **JSON-LD Schema.org** markup for `Person` profiles, and a dynamic `sitemap.xml` that auto-indexes localized MDX files.
- **Micro-Interactions**: Smooth scrolling, Framer Motion (v12.24.0) animations. *Optimized with `LazyMotion` and `<m.div>` to aggressively reduce bundle size.*
- **Strict Type-Safety Audit**: Mathematically proven 100% Type-Safe (`tsc --noEmit` passed flawlessly) with **Zero `any` Policy**.
- **Lighthouse CI & Vercel Insights**: Automated performance auditing via GitHub Actions, combined with Real User Monitoring via `@vercel/analytics` and `@vercel/speed-insights`.

---

## 📂 Project Structure

A clean, scalable Next.js App Router architecture with localized MDX support:

```text
bbsphw-portfolio/
├── public/                 # Static assets (images, icons, PDFs)
├── messages/               # i18n JSON dictionaries (en.json, th.json)
├── src/
│   ├── actions/            # Server actions (e.g., Contact Form handling)
│   ├── app/                # Next.js App Router
│   │   ├── [locale]/       # Dynamic i18n routing (Pages, Layouts)
│   │   └── api/            # API endpoints
│   ├── components/         # Reusable UI components
│   │   ├── cards/          # Project & Achievement cards
│   │   ├── forms/          # User input forms
│   │   ├── sections/       # Major landing page sections
│   │   └── ui/             # Shadcn/UI primitive components
│   ├── config/             # Site configuration and static metadata
│   ├── content/            # 📝 MDX CMS Content Data
│   │   ├── achievements/   # Certifications (en/th)
│   │   └── projects/       # Portfolio case studies (en/th)
│   ├── hooks/              # Custom React hooks
│   ├── i18n/               # Internationalization configuration
│   ├── lib/                # Utility functions & MDX parser logic
│   ├── providers/          # Global React Context providers (Themes)
│   ├── types/              # TypeScript interfaces
│   ├── env.ts              # Environment variable validation
│   └── middleware.ts       # Next.js Middleware (Language detection)
├── .env.example            # Environment variables template
└── package.json            # Dependencies & Scripts
```

---

## 🏛️ Deep Technical Architecture & Versions

This project utilizes bleeding-edge technologies configured for maximum production stability.

| Category | Technology | Version | Implementation Details |
| :--- | :--- | :--- | :--- |
| **Framework** | `next` | `15.5.19` | App Router, **Turbopack**, React Compiler (`reactCompiler: true`), Enhanced Security Headers (`X-Frame-Options`, `X-Content-Type-Options`) |
| **UI Library** | `react`, `react-dom` | `^19.2.3` | React Compiler integration, concurrent rendering |
| **Styling** | `tailwindcss`, `@tailwindcss/vite` | `^4.1.7` | PostCSS Tailwind v4, Shadcn UI patterns with `tailwind-merge` and `clsx` |
| **Language** | `typescript` | `5.9.3` | Strict Mode, audited to ensure 0 implicit or explicit `any` usages |
| **Animation** | `framer-motion` | `^12.24.0` | `LazyMotion` loaded asynchronously to cut JS bundle payload |
| **i18n** | `next-intl` | `^4.7.0` | Route handling `/[locale]/...` with middleware |
| **CMS/Content**| `next-mdx-remote` | `^6.0.0` | Next.js Server Components rendering MDX + `gray-matter` for YAML parsing |
| **Image Opt.** | `next/image` | Built-in | MDX mapping to `<Image />`, formats: `avif`/`webp`, configured strictly to `res.cloudinary.com` |

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 20
- `pnpm` >= 8

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Bbsphw/bbsphw-portfolio.git
   cd bbsphw-portfolio
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Set up environment variables
   Copy the provided `.env.example` file to create your local environment file:
   ```bash
   cp .env.example .env.local
   ```
   *For Windows Command Prompt, use `copy .env.example .env.local`*

   **Key Environment Variables:**
   - `NEXT_PUBLIC_APP_URL`: Your local or production domain (e.g. `http://localhost:3000`). Essential for Sitemap and SEO.
   - `RESEND_API_KEY`: API Key from Resend to handle the Contact form.
   - `RECEIVER_EMAIL`: The destination email where contact messages will be sent.

4. Run the development server (with Turbopack)
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📝 Managing Content (MDX CMS & Cloudinary)

The portfolio uses an MDX-based file system to handle dynamic content, natively supporting both English (`/en/`) and Thai (`/th/`) locales.

**To add or update a project:**
1. Create or edit a `.mdx` file in both `src/content/projects/en/` and `src/content/projects/th/`.
2. Provide the synchronized YAML Frontmatter metadata. The schema supports the following key fields:
   ```yaml
   id: proj-name-id
   title: Project Title
   category: Web App | Enterprise | Mobile
   description: Short description for the project card.
   role: Your Role (e.g., Full-Stack Developer)
   date: Duration (e.g., Nov 2024 - Mar 2025)
   technologies: [Next.js, React, ...]
   tags: [Automation, Dashboard, ...]
   featured: true # Set to true to show on the Hero/Featured section
   order: 1 # Determines rendering order
   image: 'https://res.cloudinary.com/...' # Main hero thumbnail
   gallery: # Array of additional Cloudinary images for the detail page
     - 'https://res.cloudinary.com/...'
   # Optional fields:
   link: 'https://live-demo-url.com'
   githubUrl: 'https://github.com/...'
   ```
3. Below the frontmatter, use the `overview`, `features`, and `challenges` structured data. The `sitemap.xml` will dynamically index it upon the next build.

> [!TIP]
> **Cloudinary Integration**: Always use Cloudinary URLs (`res.cloudinary.com`) for the `image` and `gallery` fields to ensure Next.js image optimization works correctly without throwing external domain errors.

**To edit skills:**
Update the arrays inside `src/types/index.ts` or the relevant skills data component.

---

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are always welcome! Feel free to open an issue or submit a PR.
Please follow the **Conventional Commits** format when contributing (`feat: ...`, `fix: ...`).

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
