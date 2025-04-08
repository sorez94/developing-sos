import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

export default function NavBar() {
    const locale = useLocale();
    const t = useTranslations("NavBar");

    return (
        <div style={{background: 'rgba(210, 210, 208, 0.5)'}} className='flex justify-between items-center py-4 h-[150px] px-20'>
            <div className='flex items-center justify-center'>
                <Link className='ml-4' href={`/${locale}`}>{t('home')}</Link>
                <Link className='ml-4' href={`/${locale}/contact`}>{t('contact')}</Link>
                <Link className='ml-4' href={`/${locale}/about`}>{t('aboutUs')}</Link>
                <Link className='ml-4' href={`/${locale}/faq`}>{t('FAQ')}</Link>
                <Link className='ml-4' href={`/${locale}/product`}>{t('products')}</Link>
            </div>
            <LocaleSwitcher/>
        </div>
    );
}
