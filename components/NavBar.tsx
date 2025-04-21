"use client";

import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
    const locale = useLocale();
    const pathname = usePathname();
    const t = useTranslations("NavBar");
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { href: `/${locale}`, label: t("home") },
        { href: `/${locale}/contact-us`, label: t("contact") },
        { href: `/${locale}/about-us`, label: t("aboutUs") },
        { href: `/${locale}/faq`, label: t("FAQ") },
        { href: `/${locale}/product`, label: t("products") },
    ];

    return (
        <nav className="w-full z-50 fixed top-0 left-0">
            <div
                className="flex items-center justify-between py-3 px-4 sm:px-6 md:px-10 lg:px-20
                lg:h-[120px] md:h-[80px] sm:h-[80px] backdrop-blur-xl bg-white/30
                border-b border-white/20 shadow-sm"
            >
                <div className="flex items-center gap-2 overflow-hidden flex-shrink-0">
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] 2xl:w-[80px]"
                    />
                    <h1 className="text-sm sm:text-base md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold whitespace-nowrap">
                        Sense Of Stone
                    </h1>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 lg:gap-8">
                    {links.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={clsx(
                                "text-sm lg:text-lg whitespace-nowrap",
                                pathname === href ? "font-bold" : "font-medium"
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                <div className="hidden md:block">
                    <LocaleSwitcher />
                </div>
            </div>

            {menuOpen && (
                <div
                    className={clsx(
                        "md:hidden absolute left-0 w-full z-40 shadow-md backdrop-blur-md bg-white/40 border-t border-white/30 transition-all duration-300"
                    )}
                    style={{ top: "64px" }}
                >
                    <div className="flex flex-col items-start gap-4 px-4 py-4">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={clsx(
                                    "text-base font-medium",
                                    pathname === href && "font-bold"
                                )}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <LocaleSwitcher />
                    </div>
                </div>
            )}
        </nav>
    );
}
