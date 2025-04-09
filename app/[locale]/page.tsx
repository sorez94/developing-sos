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
            <div className='w-full text-[55px] max-w-md bg-card p-8 rounded-lg shadow-sm'>
                {t('title')}
            </div>
            <h1>What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum. </h1>
        </>
    );
}
