import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fa"],

  defaultLocale: "en",
  pathnames: {
    "/contact": {
      en: "/contact-us",
      fa: "/contact-us"
    },"/about": {
      en: "/about-us",
      fa: "/about-us"
    },
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
