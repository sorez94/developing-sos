import { routing } from "@/i18n/routing";
import {Globe, ShoppingBasket, UserRound} from "lucide-react";
import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import Link from "next/link";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <div className='flex items-center gap-2'>
        <Link href={`/${locale}/account`}>
            <UserRound className='h-5 w-5 text-muted-foreground cursor-pointer' />
        </Link>
        <Link href={`/${locale}/shop`}>
            <ShoppingBasket className='h-5 w-5 text-muted-foreground cursor-pointer' />
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
