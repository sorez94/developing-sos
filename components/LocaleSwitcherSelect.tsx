"use client";

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {Locale, routing, usePathname, useRouter} from "@/i18n/routing";
import {useParams} from "next/navigation";
import {ReactNode} from "react";
import {useTranslations} from "next-intl";
import usaFlag from '../public/images/en.png'
import iranFlag from '../public/images/fa.png'
import Image from "next/image";

type Props = {
    children: ReactNode;
    defaultValue: string;
    label: string;
};

export default function LocaleSwitcherSelect({defaultValue, label}: Props) {
    const router = useRouter();
    const t = useTranslations("LocaleSwitcher");
    const pathname = usePathname();
    const params = useParams();

    const localeFlags: Record<string, string> = {
        en: "/images/en.png",
        fa: "/images/fa.png",
    };


    function onSelectChange(nextLocale: string) {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params`
            // are used in combination with a given `pathname`. Since the two will
            // always match for the current route, we can skip runtime checks.
            {pathname, params},
            {locale: nextLocale as Locale}
        );
    }

    return (
        <>
            {/*<select*/}
            {/*    defaultValue={defaultValue}*/}
            {/*    onChange={(e) => onSelectChange(e.target.value)}*/}
            {/*    aria-label={label}*/}
            {/*    className="w-[110px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0"*/}
            {/*>*/}
            {/*    {routing.locales.map((locale) => (*/}

            {/*        <option key={locale} value={locale}>*/}
            {/*            <Image*/}
            {/*                width={38}*/}
            {/*                height={38}*/}
            {/*                src={locale === "en" ? usaFlag : iranFlag}*/}
            {/*                alt={locale === "en" ? "English" : "Persian"}*/}
            {/*            />*/}
            {/*            {t(locale.toUpperCase())}*/}
            {/*        </option>*/}
            {/*    ))}*/}
            {/*</select>*/}
            <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
                <SelectTrigger
                    className='w-[110px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0'
                    aria-label={label}
                >
                    <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                    {routing.locales.map((locale) => (
                        <SelectItem key={locale} value={locale}>
                            {t(locale.toUpperCase())}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>

    );
}
