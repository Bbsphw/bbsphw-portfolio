export const siteConfig = {
  name: "Sophonwit Thapseng",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  description: "Personal portfolio of Sophonwit Thapseng, Software Engineer.",
  links: {
    github: "https://github.com/bbsphw",
    linkedin: "https://linkedin.com/in/sophonwit-thapseng",
  },
};

export type SiteConfig = typeof siteConfig;
