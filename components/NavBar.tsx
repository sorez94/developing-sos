"use client";

import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {usePathname, useRouter} from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { Menu, X, ShoppingBasket, UserRound } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const locale = useLocale();
    const pathname = usePathname();
    const t = useTranslations("NavBar");
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const cartCount = useCartStore((state) =>
        state.items.reduce((sum, item) => sum + item.quantity, 0)
    );

    const links = [
        { href: `/${locale}`, label: t("home") },
        { href: `/${locale}/product`, label: t("products") },
        { href: `/${locale}/contact-us`, label: t("contact") },
        { href: `/${locale}/about-us`, label: t("aboutUs") },
        { href: `/${locale}/faq`, label: t("FAQ") },
    ];

    return (
        <nav className="w-full z-50 fixed top-0 left-0">
            <div className="flex items-center justify-between py-3 px-4 sm:px-6 md:px-10 lg:px-20
                lg:h-[120px] md:h-[80px] sm:h-[80px] backdrop-blur-xl bg-gradient-to-r from-white/30 to-white/50
                border-b border-white/20 shadow-md transition-all duration-300">
                <motion.div
                    whileHover={{scale: 1.05}}
                    onClick={() => router.push(`/${locale}`)} // 👈 navigate to homepage
                    className="flex items-center gap-2 overflow-hidden flex-shrink-0 cursor-pointer"
                >
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] 2xl:w-[80px]"
                    />
                    <h1 className="select-none text-sm sm:text-base md:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] font-semibold whitespace-nowrap">
                        Sense Of Stone
                    </h1>
                </motion.div>

                {/* لینک‌های دسکتاپ */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 lg:gap-8">
                {links.map(({href, label}) => (
                        <Link
                            key={href}
                            href={href}
                            className={clsx(
                                "text-sm lg:text-lg whitespace-nowrap transition-all duration-200 border-b-2 border-transparent hover:border-black hover:scale-105",
                                pathname === href ? "font-bold border-black" : "font-medium"
                            )}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* آیکون‌ها و منوی موبایل */}
                <div className="flex items-center gap-3">
                    {/* موبایل */}
                    <div className="md:hidden flex items-center gap-2">
                        <Link href={`/${locale}/account`}>
                            <UserRound className="h-5 w-5 cursor-pointer"/>
                        </Link>
                        <Link href={`/${locale}/cart`} className="relative">
                            <ShoppingBasket className="h-5 w-5 cursor-pointer"/>
                            {cartCount > 0 && (
                                <span
                                    className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <LocaleSwitcherSelect defaultValue={locale} label="Select a locale">
                            {routing.locales.map((cur) => (
                                <option key={cur} value={cur}>
                                    {cur}
                                </option>
                            ))}
                        </LocaleSwitcherSelect>
                    </div>

                    {/* دکمه همبرگر */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                            {menuOpen ? <X size={26}/> : <Menu size={26}/>}
                        </button>
                    </div>

                    {/* دسکتاپ */}
                    <div className="hidden md:flex items-center gap-2">
                        <LocaleSwitcher/>
                    </div>
                </div>
            </div>

            {/* منوی موبایل بازشونده با انیمیشن */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3}}
                        className="md:hidden overflow-hidden absolute left-0 w-full z-40 backdrop-blur-md bg-white/70 border-t border-white/30 shadow-xl"
                        style={{ top: "64px" }}
                    >
                        <div className="flex flex-col items-start gap-4 px-4 py-4">
                            {links.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={clsx(
                                        "text-base font-medium transition-all duration-150 hover:font-semibold",
                                        pathname === href && "font-bold"
                                    )}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
