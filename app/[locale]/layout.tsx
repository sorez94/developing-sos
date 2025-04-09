import Navbar from "@/components/NavBar";
import {Locale, routing} from "@/i18n/routing";
import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {notFound} from "next/navigation";
import "./globals.css";
import "react-multi-carousel/lib/styles.css";
import {cinzel, dirooz, glacier} from "@/app/[locale]/fonts/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Sense of stone",
    description: "Generated by sorez",
    icons: {
        icon: "/favicon.ico",
    },
};


export default async function RootLayout({
                                             children,
                                             params,
                                         }: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
}>) {
    const {locale} = await params;
    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = await getMessages();
    return (
        <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"}>
        <body className={locale === "en" ? glacier.className : dirooz.className}>

        <NextIntlClientProvider messages={messages}>
            <Navbar/>
            {children}
            <Footer />
        </NextIntlClientProvider>
        </body>
        </html>
    );

}
