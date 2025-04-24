'use client'

import { routing } from "@/i18n/routing";
import { ShoppingBasket, UserRound } from "lucide-react";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";

export default function LocaleSwitcher() {
    const locale = useLocale();
    const cartCount = useCartStore((state) =>
        state.items.reduce((sum, item) => sum + item.quantity, 0)
    );

    return (
        <div className='flex items-center gap-2'>
            <Link href={`/${locale}/account`}>
                <UserRound className='h-5 w-5 mx-1 cursor-pointer' />
            </Link>

            <Link href={`/${locale}/cart`} className="relative mx-1">
                <ShoppingBasket className='h-5 w-5 cursor-pointer' />
                {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full px-1.5 py-0.5">
            {cartCount}
          </span>
                )}
            </Link>

            <LocaleSwitcherSelect defaultValue={locale} label='Select a locale'>
                {routing.locales.map((cur) => (
                    <option key={cur} value={cur}>
                        {cur}
                    </option>
                ))}
            </LocaleSwitcherSelect>
        </div>
    );
}
