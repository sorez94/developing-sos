import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

export default function NavBar() {
    const locale = useLocale();
    const t = useTranslations("NavBar");

    return (
        <div className='flex justify-between items-center p-4'>
            <div className='flex items-center justify-center'>
                <Link className='ml-4' href={`/${locale}`}>{t('home')}</Link>
                <Link className='ml-4' href={`/${locale}/contact`}>{t('contact')}</Link>
                <Link className='ml-4' href={`/${locale}/about`}>{t('aboutUs')}</Link>
                <Link className='ml-4' href={`/${locale}/product`}>{t('products')}</Link>
            </div>
            <LocaleSwitcher/>
        </div>
    );
}
