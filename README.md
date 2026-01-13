<div align="center">

# ✨ Sophonwit Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

<br />

**A modern, high-performance personal portfolio website.** *Built to showcase my development journey, projects, and skills with a focus on UX, Performance, and Clean Architecture.*

[Live Demo](https://sophonwit.site) · [Report Bug](https://github.com/Bbsphw/bbsphw-portfolio/issues) · [Request Feature](https://github.com/Bbsphw/bbsphw-portfolio/issues)

</div>

---

## 🚀 Features

| Feature | Description |
| :--- | :--- |
| **⚡️ Modern Stack** | Built with Next.js 15 (App Router), React 19, and Tailwind CSS 4. |
| **🎨 Responsive** | Mobile-first approach ensuring perfect display on all devices. |
| **🌗 Dark Mode** | System-aware theme switching using `next-themes`. |
| **✨ Animations** | Smooth page transitions and interactions powered by `framer-motion`. |
| **📧 Contact Form** | Integrated with **Resend** for reliable email handling via server actions. |
| **🛡️ Type Safety** | Robust code with TypeScript and Zod schema validation. |
| **🔍 SEO Ready** | Fully configured metadata, Open Graph tags, and sitemap. |

## 🛠️ Tech Stack

### Core & Styling
| Category | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router & Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Components** | [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |

### Utilities & Tools
| Category | Technologies |
| :--- | :--- |
| **Forms** | [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/) |
| **Email API** | [Resend](https://resend.com/) |
| **UI Utils** | [Sonner](https://sonner.emilkowal.ski/), clsx, tailwind-merge |

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
│   │   └── ui/          # Reusable UI components
│   ├── data/            # Static data content
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── providers/       # Context providers (Theme, Language)
│   ├── types/           # TypeScript definitions
│   └── env.ts           # Env validation schema (Zod)
├── next.config.ts       # Next.js config
└── tailwind.config.ts   # Tailwind config
```

## 🏁 Getting Started
Follow these steps to set up the project locally.

Prerequisites
Node.js (v18.17 or later)

Package Manager: npm, yarn, pnpm, or bun

## Installation
1. Clone the repository
```bash
git clone [https://github.com/your-username/bbsphw-portfolio.git](https://github.com/your-username/bbsphw-portfolio.git)
cd bbsphw-portfolio
```

2. Install dependencies
```bash
npm install
# or yarn install / pnpm install
```

3. Configure Environment Variables Create a .env file in the root directory:
```bash
# Required for Contact Form (Resend)
RESEND_API_KEY=re_123456789
RECEIVER_EMAIL=your-email@example.com
NODE_ENV=development

# Public (Optional)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
💡 Note: You can obtain your API Key from Resend Dashboard.

4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open http://localhost:3000 to view the project.

📜 Scripts
Script	Description
```bash
npm run dev	Runs the app in development mode with Turbopack.
npm run build	Builds the app for production.
npm start	Runs the built app in production mode.
npm run lint	Runs ESLint to check for code quality issues.
```

🚀 Deployment
The easiest way to deploy your Next.js app is to use the Vercel Platform.
1.Push your code to a GitHub repository.
2.Import the project into Vercel.
3.Add the Environment Variables (RESEND_API_KEY, etc.) in Vercel settings.
4.Deploy! 🚀

👤 Author
Sophonwit Thapseng
🌐 Portfolio: sophonwit.site
🐙 GitHub: @Bbsphw

📄 License
This project is open source and available under the MIT License.
