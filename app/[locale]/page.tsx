import {getTranslations} from "next-intl/server";
import Banner from "@/components/Banner";
import LandingProduct from "@/components/landingpage/LandingProduct";
import LinesCarousel from "@/components/landingpage/LinesCarousel";
import CategoryCarousel from "@/components/landingpage/CategoryCarousel";

export default async function HomePage() {
    const t = await getTranslations("HomePage");
    return (
        <>
            <Banner />
            <LinesCarousel />
            <LandingProduct />
            <CategoryCarousel />
        </>
    );
}
