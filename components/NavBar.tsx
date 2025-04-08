"use client";

import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavBar() {
    const locale = useLocale();
    const pathname = usePathname();
    const t = useTranslations("NavBar");

    const links = [
        { href: `/${locale}`, label: t("home") },
        { href: `/${locale}/contact-us`, label: t("contact") },
        { href: `/${locale}/about-us`, label: t("aboutUs") },
        { href: `/${locale}/faq`, label: t("FAQ") },
        { href: `/${locale}/product`, label: t("products") },
    ];

    return (
        <div
            style={{ background: "rgba(210, 210, 208, 0.5)" }}
            className="flex justify-between items-center py-4 h-[120px] px-20"
        >
            <div className="flex items-center justify-center">
                {links.map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        className={clsx(
                            "ml-[24px] text-[20px]",
                                pathname === href ? "font-black" : "font-medium"
                        )}
                    >
                        {label}
                    </Link>

                ))}
            </div>
            <LocaleSwitcher />
        </div>
    );
}
